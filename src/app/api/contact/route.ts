import { NextResponse } from "next/server";
import { sendContactEmail, type ContactMessage } from "@/app/lib/mailjet";

/**
 * Public, unauthenticated contact endpoint.
 *
 * It sends email on behalf of anyone who can reach it, so it is treated as an
 * abuse target: strict field limits, a honeypot, and a per-IP rate limit before
 * anything touches Mailjet. Errors returned to the browser are deliberately
 * generic — the detail goes to the server log.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Anything longer is either a mistake or an attack; neither needs sending. */
const LIMITS = {
  name: 100,
  email: 254, // RFC 5321 maximum
  subject: 150,
  message: 4000,
} as const;

const RATE_LIMIT = { max: 5, windowMs: 60 * 60 * 1000 };

/**
 * Best-effort in-memory rate limit. Serverless instances are ephemeral and not
 * shared, so this stops a naive loop from one machine, not a distributed flood.
 * If this ever gets seriously abused, move to Netlify's edge rate limiting or
 * put a CAPTCHA in front — do not grow this Map into a database.
 */
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT.windowMs
  );
  if (recent.length >= RATE_LIMIT.max) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);

  // Keep the Map from growing without bound on a long-lived instance.
  if (hits.size > 5000) {
    for (const [key, stamps] of hits) {
      if (stamps.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(key);
    }
  }
  return false;
}

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-nf-client-connection-ip");
  if (forwarded) return forwarded;
  // x-forwarded-for is a client-supplied chain; the leftmost entry is spoofable,
  // so it is only a bucketing key here, never an authorisation input.
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Validated = { ok: true; value: ContactMessage } | { ok: false };

/**
 * Allowlist validation: unknown fields are dropped rather than passed through,
 * and every value is length-capped before it reaches the mail template.
 */
function validate(body: unknown): Validated {
  if (typeof body !== "object" || body === null) return { ok: false };
  const raw = body as Record<string, unknown>;

  const str = (key: string, max: number): string | null => {
    const value = raw[key];
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    return trimmed.length > max ? null : trimmed;
  };

  const name = str("name", LIMITS.name);
  const email = str("email", LIMITS.email);
  const subject = str("subject", LIMITS.subject) ?? "";
  const message = str("message", LIMITS.message);

  if (!name || name.length < 2) return { ok: false };
  if (!email || !EMAIL_RE.test(email)) return { ok: false };
  if (!message || message.length < 10) return { ok: false };

  return {
    ok: true,
    value: {
      name,
      email,
      subject: subject || `Enquiry from ${name}`,
      message,
    },
  };
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  // Honeypot: hidden from humans, irresistible to bots. Answer 200 so the bot
  // records a success and moves on rather than probing for the real check.
  if (typeof (body as Record<string, unknown>)?.["bot-field"] === "string") {
    const trap = (body as Record<string, string>)["bot-field"];
    if (trap.length > 0) return NextResponse.json({ ok: true });
  }

  const checked = validate(body);
  if (!checked.ok) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { ok: false, error: "Too many messages. Please try again later." },
      { status: 429 }
    );
  }

  const result = await sendContactEmail(checked.value);

  if (result.ok) return NextResponse.json({ ok: true });

  if (result.reason === "not-configured") {
    console.error("[contact] Mailjet env vars missing — falling back to mailto");
  }

  return NextResponse.json(
    { ok: false, error: "Could not send right now." },
    { status: 502 }
  );
}

/** Anything other than POST is not part of the contract. */
export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
