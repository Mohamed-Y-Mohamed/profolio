"use client";
import { useState } from "react";
import { site } from "@/app/data/site";
import Button from "@/app/components/ui/Button";
import Spinner from "@/app/components/ui/Spinner";
import { TextAreaField, TextField } from "@/app/components/ui/Field";

type Values = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Phase = "idle" | "sending" | "sent" | "error";

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

export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [phase, setPhase] = useState<Phase>("idle");
  const [note, setNote] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const hasEndpoint = site.formspreeId.trim().length > 0;

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const blur = (k: keyof Values) => () => {
    const e = validate(values);
    setErrors((prev) => ({ ...prev, [k]: e[k] }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return; // bot

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setPhase("error");
      setNote("Please fix the highlighted fields and try again.");
      return;
    }

    const subject = values.subject.trim() || `Portfolio enquiry from ${values.name}`;

    if (!hasEndpoint) {
      const body =
        `From: ${values.name} (${values.email})\n` +
        (values.subject ? `Re: ${values.subject}\n` : "") +
        `\n${values.message}`;
      window.location.href =
        `mailto:${site.email}?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
      setPhase("sent");
      setNote("Opening your email client — press send there and it's on its way.");
      return;
    }

    setPhase("sending");
    setNote("Sending your message…");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, _subject: subject }),
      });
      if (res.ok) {
        setValues(EMPTY);
        setPhase("sent");
        setNote("Thanks — your message is with me. I'll reply within a couple of days.");
      } else {
        setPhase("error");
        setNote(`That didn't send. Please email me directly at ${site.email}.`);
      }
    } catch {
      setPhase("error");
      setNote(`Network problem — please email me directly at ${site.email}.`);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-1 gap-[1.1rem] sm:grid-cols-2">
        <TextField
          id="f-name"
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
        <label htmlFor="f-website">Website</label>
        <input
          id="f-website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
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
          {hasEndpoint ? "Sends straight to my inbox" : "Opens your email client"}
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
                : "border-line text-ink-2"
          }`}
        >
          {note}
        </div>
      )}
    </form>
  );
}
