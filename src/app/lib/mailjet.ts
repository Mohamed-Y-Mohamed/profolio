/**
 * Mailjet integration boundary.
 *
 * Everything vendor-specific about sending email lives here. The rest of the
 * app knows only `sendContactEmail(message)` — swapping Mailjet for Postmark or
 * Resend later means rewriting this file and nothing else.
 *
 * Send API v3.1: POST https://api.mailjet.com/v3.1/send
 * Auth: HTTP Basic, API key as the user, secret key as the password.
 * Docs: https://dev.mailjet.com/email/guides/send-api-v31/
 */

const SEND_ENDPOINT = "https://api.mailjet.com/v3.1/send";

/** How long we wait on Mailjet before giving up and letting the caller fall back. */
const TIMEOUT_MS = 8000;

export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type SendResult =
  | { ok: true }
  | { ok: false; reason: "not-configured" | "rejected" | "unreachable" };

type MailjetConfig = {
  apiKey: string;
  secretKey: string;
  templateId: number;
  fromEmail: string;
  fromName: string;
  toEmail: string;
  toName: string;
};

/**
 * Reads config from the environment. Returns null when anything required is
 * missing so the caller can degrade instead of throwing — a portfolio that
 * loses its mail credentials should still tell the visitor what to do next.
 *
 * None of these are NEXT_PUBLIC_*. They must never reach the browser bundle.
 */
function readConfig(): MailjetConfig | null {
  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const templateId = Number(process.env.MAILJET_TEMPLATE_ID);
  const fromEmail = process.env.MAILJET_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !secretKey || !fromEmail || !toEmail) return null;
  if (!Number.isInteger(templateId) || templateId <= 0) return null;

  return {
    apiKey,
    secretKey,
    templateId,
    fromEmail,
    fromName: process.env.MAILJET_FROM_NAME || "Portfolio",
    toEmail,
    toName: process.env.CONTACT_TO_NAME || "",
  };
}

/** Escapes the five characters that can break out of HTML text content. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * The message is attacker-controlled text from a public form, so it is escaped
 * here rather than trusting the template engine to do it.
 *
 * The template renders this inside a <pre>, which preserves newlines without
 * needing <br> tags — so no HTML ever has to survive a template variable, and
 * whether Mailjet escapes variable output becomes irrelevant to line breaks.
 *
 * If a test send shows literal "&amp;lt;" in the received email, Mailjet is
 * escaping too and this call is the only thing to remove.
 */
function prepareMessage(message: string): string {
  return escapeHtml(message.replace(/\r\n/g, "\n").trim());
}

/**
 * Strips CR/LF so user input can never inject extra email headers via the
 * Subject or a display name. Mailjet would likely reject it anyway; we do not
 * rely on that.
 */
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function formatReceivedAt(when: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(when);
}

/**
 * Sends one contact message through the Mailjet template.
 *
 * From is always the verified sender, never the visitor — sending as
 * `visitor@theirdomain.com` fails SPF/DKIM and lands in spam. The visitor goes
 * in ReplyTo instead, so hitting reply in the inbox does the right thing.
 */
export async function sendContactEmail(
  input: ContactMessage
): Promise<SendResult> {
  const config = readConfig();
  if (!config) return { ok: false, reason: "not-configured" };

  const name = singleLine(input.name);
  const subject = singleLine(input.subject);
  const firstName = name.split(/\s+/)[0] || name;

  const payload = {
    Messages: [
      {
        From: { Email: config.fromEmail, Name: config.fromName },
        To: [{ Email: config.toEmail, Name: config.toName || undefined }],
        ReplyTo: { Email: input.email, Name: name },
        Subject: `Portfolio — ${subject}`,
        TemplateID: config.templateId,
        TemplateLanguage: true,
        // Surfaces template syntax errors in the Mailjet dashboard instead of
        // silently sending a half-rendered email.
        TemplateErrorReporting: { Email: config.toEmail },
        TemplateErrorDeliver: true,
        Variables: {
          name,
          first_name: firstName,
          email: input.email,
          subject,
          message: prepareMessage(input.message),
          received_at: formatReceivedAt(new Date()),
        },
      },
    ],
  };

  const auth = Buffer.from(`${config.apiKey}:${config.secretKey}`).toString(
    "base64"
  );

  try {
    const res = await fetch(SEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (!res.ok) {
      // Body may name the field at fault. It never contains our credentials,
      // but it can echo the visitor's address, so this stays in server logs.
      const detail = await res.text().catch(() => "");
      console.error(
        `[mailjet] send rejected: HTTP ${res.status} ${detail.slice(0, 500)}`
      );
      return { ok: false, reason: "rejected" };
    }

    // v3.1 returns 200 with per-message statuses; one bad message does not
    // fail the request, so the status has to be inspected.
    const body = (await res.json()) as {
      Messages?: Array<{ Status?: string; Errors?: unknown }>;
    };
    const status = body.Messages?.[0]?.Status;
    if (status !== "success") {
      console.error(
        `[mailjet] message status "${status}":`,
        JSON.stringify(body.Messages?.[0]?.Errors ?? {}).slice(0, 500)
      );
      return { ok: false, reason: "rejected" };
    }

    return { ok: true };
  } catch (err) {
    console.error("[mailjet] unreachable:", err);
    return { ok: false, reason: "unreachable" };
  }
}
