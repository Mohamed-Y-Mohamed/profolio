"use client";
import { navLinks, site } from "@/app/data/site";
import { useScrollProgress } from "@/app/hooks/useScrollProgress";
import AccentSwitcher from "./AccentSwitcher";

export default function Navbar() {
  const { scrolled } = useScrollProgress();
  return (
    <nav
      className={`gutter fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-4 py-[1.1rem] transition-colors duration-300 ${
        scrolled
          ? "border-b border-line-soft bg-bg/70 backdrop-blur-[14px]"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#top"
        className="flex items-center gap-[0.6rem] font-mono text-[0.74rem] uppercase tracking-[0.14em] text-ink-2"
        aria-label={`${site.name} — home`}
      >
        <span
          aria-hidden
          className="h-[6px] w-[6px] shrink-0 rounded-full"
          style={{ background: "var(--accent)" }}
        />
        <b className="font-semibold text-ink">{site.initials}</b>
        <span className="hidden sm:inline">/ {site.role}</span>
      </a>

      <div className="hidden items-center gap-[1.6rem] lg:flex">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="group/nav relative py-[0.3rem] font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3 transition-colors hover:text-ink"
          >
            {l.name}
            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-300 group-hover/nav:origin-left group-hover/nav:scale-x-100"
              style={{ background: "var(--accent)" }}
            />
          </a>
        ))}
      </div>

      <AccentSwitcher />
    </nav>
  );
}
