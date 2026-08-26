"use client";
import { useState } from "react";
import { site } from "@/app/data/site";
import Button from "@/app/components/ui/Button";
import Spinner from "@/app/components/ui/Spinner";
import { TextAreaField, TextField } from "@/app/components/ui/Field";

type Values = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Phase = "idle" | "sending" | "sent" | "partial" | "error";

const EMPTY: Values = { name: "", email: "", subject: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Enter a valid email address";
  if (v.message.trim().length < 10)
    e.message = "A little more detail, please (10+ characters)";
  return e;
}

/**
 * On submit, two requests go out together:
 *   1. POST /api/contact — sends the email through Mailjet. This is the one
 *      that matters; its result decides what the visitor is told.
 *   2. POST /__forms.html — files a copy in Netlify Forms as a durable record.
 *      Best effort; a failure here is never shown to the visitor.
 *
 * If the send fails, the mail client opens with the message pre-filled so the
 * visitor still has a route to us. On success it does not open — hijacking
 * someone's browser is only justified when the alternative is losing their
 * message.
 *
 * /__forms.html is a static file in /public carrying the Netlify Forms
 * declaration. The Netlify Next runtime v5 does not scan prerendered Next
 * output for forms, and a data-netlify attribute on a prerendered form breaks
 * the build outright. It is also the form's method/action, so a submit with no
 * JavaScript still reaches Netlify rather than dumping the message into a
 * query string.
 *
 * On localhost that POST always returns 405 — `next dev` serves static files
 * GET-only, and it is Netlify's edge that intercepts it in production.
 */
export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [phase, setPhase] = useState<Phase>("idle");
  const [note, setNote] = useState("");
  const [botField, setBotField] = useState("");

  const set =
    (k: keyof Values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
      if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
    };

  const blur = (k: keyof Values) => () => {
    const e = validate(values);
    setErrors((prev) => ({ ...prev, [k]: e[k] }));
  };

  function openMailClient(v: Values, subject: string) {
    const body =
      `From: ${v.name} (${v.email})\n` +
      (v.subject ? `Re: ${v.subject}\n` : "") +
      `\n${v.message}`;
    window.location.href =
      `mailto:${site.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  /** The real send. Resolves false on any failure so the caller can fall back. */
  async function sendEmail(v: Values, subject: string): Promise<boolean> {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, subject, "bot-field": botField }),
      });
      if (!res.ok) {
        console.warn(`[contact] send failed: HTTP ${res.status}`);
      }
      return res.ok;
    } catch (err) {
      console.warn("[contact] send failed:", err);
      return false;
    }
  }

  /** Durable copy in the Netlify dashboard. Never surfaced to the visitor. */
  async function fileCopy(v: Values, subject: string): Promise<void> {
    try {
      const body = new URLSearchParams({
        "form-name": site.netlifyFormName,
        "bot-field": "",
        name: v.name,
        email: v.email,
        subject: subject,
        message: v.message,
      });
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) {
        // 405 is expected in `next dev` — static files only accept GET there.
        console.warn(
          `[contact] Netlify copy unavailable (HTTP ${res.status}). ` +
            "Expected on localhost; on the live site check Netlify > Forms."
        );
      }
    } catch (err) {
      console.warn("[contact] Netlify copy failed:", err);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (botField) return; // honeypot tripped

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setPhase("error");
      setNote("Please fix the highlighted fields and try again.");
      return;
    }

    const subject = values.subject.trim() || `Portfolio enquiry from ${values.name}`;
    const snapshot = { ...values };

    setPhase("sending");
    setNote("Sending your message…");

    const [sent] = await Promise.all([
      sendEmail(snapshot, subject),
      fileCopy(snapshot, subject),
    ]);

    if (sent) {
      setPhase("sent");
      setNote("Message sent — it's in my inbox. I'll come back to you shortly.");
      setValues(EMPTY);
      return;
    }

    setPhase("partial");
    setNote(
      "That didn't go through. Your email client is opening with the message ready — press send there and it reaches me."
    );
    // let the status render before the browser hands over to the mail client
    window.setTimeout(() => openMailClient(snapshot, subject), 800);
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      name={site.netlifyFormName}
      method="POST"
      action="/__forms.html"
    >
      <input type="hidden" name="form-name" value={site.netlifyFormName} />

      <div className="grid grid-cols-1 gap-[1.1rem] sm:grid-cols-2">
        <TextField
          id="f-name"
          name="name"
          label="Name"
          required
          autoComplete="name"
          placeholder="Jane Doe"
          value={values.name}
          onChange={set("name")}
          onBlur={blur("name")}
          error={errors.name}
        />
        <TextField
          id="f-email"
          name="email"
          label="Email"
          required
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          value={values.email}
          onChange={set("email")}
          onBlur={blur("email")}
          error={errors.email}
        />
        <div className="sm:col-span-2">
          <TextField
            id="f-subject"
            name="subject"
            label="Company / Subject"
            autoComplete="organization"
            placeholder="Graduate engineer role at …"
            value={values.subject}
            onChange={set("subject")}
          />
        </div>
        <div className="sm:col-span-2">
          <TextAreaField
            id="f-message"
            name="message"
            label="Message"
            required
            placeholder="A line or two about the role or project…"
            value={values.message}
            onChange={set("message")}
            onBlur={blur("message")}
            error={errors.message}
          />
        </div>
      </div>

      {/* honeypot — bots fill this, humans never see it */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="f-bot">Do not fill this in</label>
        <input
          id="f-bot"
          name="bot-field"
          tabIndex={-1}
          autoComplete="off"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
        />
      </div>

      <div className="mt-[1.6rem] flex flex-wrap items-center gap-[1.2rem]">
        <Button type="submit" disabled={phase === "sending"}>
          {phase === "sending" ? (
            <>
              <Spinner /> Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-4">
          Goes straight to my inbox
        </span>
      </div>

      {note && (
        <div
          role="status"
          aria-live="polite"
          className={`t-sm mt-[1.4rem] rounded-[3px] border bg-raise px-[1.1rem] py-[0.95rem] ${
            phase === "sent"
              ? "border-ok/45 text-ok"
              : phase === "error"
                ? "border-bad/45 text-bad"
                : phase === "partial"
                  ? "border-line text-ink"
                  : "border-line text-ink-2"
          }`}
        >
          {note}
        </div>
      )}
    </form>
  );
}
