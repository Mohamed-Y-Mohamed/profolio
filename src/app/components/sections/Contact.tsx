import { site } from "@/app/data/site";
import Section from "./Section";
import ContactForm from "@/app/components/features/ContactForm";

type Row = { key: string; label: string; href: string };

export default function Contact() {
  const rows: Row[] = [
    { key: "Email", label: site.email, href: `mailto:${site.email}` },
    { key: "LinkedIn", label: `${site.name} ↗`, href: site.linkedin },
    { key: "GitHub", label: `${site.githubHandle} ↗`, href: site.github },
  ];
  if (site.cv) rows.push({ key: "CV", label: "Download PDF ↗", href: site.cv });

  return (
    <Section id="contact" index="05" title="Contact">
      <div className="grid grid-cols-1 gap-[clamp(2.5rem,6vw,5.5rem)] lg:grid-cols-[1fr_1.15fr]">
        <div>
          <h2 className="t-h2 mb-[1.2rem] font-display font-medium">
            Let&apos;s build something <em className="accent italic">solid</em>.
          </h2>
          <p className="t-body mb-8 max-w-[40ch] text-ink-2">
            Open to graduate and junior software engineering roles in London, and to
            freelance work. I reply to everything.
          </p>

          <div className="flex flex-col">
            {rows.map((r) => (
              <a
                key={r.key}
                href={r.href}
                {...(/^https?:/.test(r.href)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="t-sm flex items-center gap-[0.7rem] break-words py-[0.6rem] text-ink-2 transition-colors hover:accent"
              >
                <span className="w-[66px] shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-4">
                  {r.key}
                </span>
                {r.label}
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
