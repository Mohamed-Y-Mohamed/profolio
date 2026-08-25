import { site } from "@/app/data/site";

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-line-soft py-[2.2rem]">
      <div className="gutter mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink-3">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
