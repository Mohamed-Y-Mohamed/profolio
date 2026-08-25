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
 * Two things happen on submit, in this order:
 *   1. A copy is POSTed to Netlify Forms so it is saved in the dashboard.
 *   2. The visitor's mail client opens with the message pre-filled.
 *
 * Netlify goes first and is awaited — handing over to the mail client
 * navigates the page, which would cancel an in-flight request.
 *
 * The POST target is /__forms.html, a static file in /public that carries the
 * Netlify Forms declaration. The Netlify Next runtime v5 does not scan
 * prerendered Next output for forms, and a data-netlify attribute on a
 * prerendered form breaks the build outright.
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

  async function saveToNetlify(v: Values, subject: string): Promise<boolean> {
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
      return res.ok;
    } catch {
      return false;
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
    setNote("Saving your message…");

    const saved = await saveToNetlify(snapshot, subject);

    if (saved) {
      setPhase("sent");
      setNote(
        "Saved — I've got your message. Your email client is opening with a copy; you can send it or just close it."
      );
      setValues(EMPTY);
    } else {
      setPhase("partial");
      setNote(
        "Couldn't save a copy here, so your email client is opening instead — press send there and it reaches me."
      );
    }

    // let the status render before the browser hands over to the mail client
    window.setTimeout(() => openMailClient(snapshot, subject), 600);
  }

  return (
    <form onSubmit={onSubmit} noValidate name={site.netlifyFormName}>
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
          Saved here + opens your email client
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
