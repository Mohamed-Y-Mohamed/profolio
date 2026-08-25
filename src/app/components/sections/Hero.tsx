import { heroMeta, site } from "@/app/data/site";
import DotField from "@/app/components/features/DotField";
import { ButtonLink } from "@/app/components/ui/Button";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-[clamp(2.5rem,6vw,4.5rem)] pt-32"
    >
      <DotField />

      <div className="gutter relative z-[2] mx-auto w-full max-w-[1280px]">
        <div className="mb-[clamp(1.6rem,4vw,2.6rem)] flex flex-wrap gap-x-[1.4rem] gap-y-[0.6rem] font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink-3">
          {heroMeta.map((m) => (
            <span key={m.label} className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="h-[4px] w-[4px] shrink-0 rounded-full"
                style={
                  m.live
                    ? { background: "var(--color-ok)", animation: "blip 2.4s ease-in-out infinite" }
                    : { background: "var(--accent)", opacity: 0.85 }
                }
              />
              {m.label}
            </span>
          ))}
        </div>

        <h1 className="t-hero mb-[clamp(1.5rem,3.5vw,2.4rem)] font-display font-medium">
          <span className="anim-rise block overflow-hidden">
            <span>{site.firstName}</span>
          </span>
          <span className="anim-rise block overflow-hidden">
            <span className="accent italic" style={{ animationDelay: ".1s" }}>
              {site.lastName}
            </span>
          </span>
        </h1>

        <div className="grid grid-cols-1 items-end gap-x-12 gap-y-8 border-t border-line-soft pt-[clamp(1.4rem,3vw,2rem)] md:grid-cols-[1fr_auto]">
          <p
            className="t-lead anim-fade-up max-w-[52ch] text-ink-2"
            style={{ animationDelay: ".5s" }}
          >
            Graduate <b className="font-semibold text-ink">software engineer</b> shipping
            full-stack products — nutrition tracking on web and Android, a
            project-management platform on AWS, and AI-assisted tooling. First Class BEng
            from the <b className="font-semibold text-ink">University of Westminster</b>.
          </p>
          <div
            className="anim-fade-up flex flex-wrap gap-[0.7rem]"
            style={{ animationDelay: ".68s" }}
          >
            <ButtonLink href="#work" variant="solid">
              Selected work
            </ButtonLink>
            <ButtonLink href="#contact">Get in touch ↗</ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
