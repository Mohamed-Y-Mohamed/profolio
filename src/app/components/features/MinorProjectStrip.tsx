import type { MinorProject } from "@/app/types";

/** Compact row of secondary repositories under the main project grid. */
export default function MinorProjectStrip({ items }: { items: MinorProject[] }) {
  return (
    <div className="mt-[clamp(1rem,2vw,1.5rem)] grid gap-px overflow-hidden rounded-[3px] border border-line-soft bg-line-soft [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
      {items.map((p) => (
        <a
          key={p.title}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 bg-raise px-[1.3rem] py-[1.15rem] transition-colors duration-300 hover:bg-hi"
        >
          <b className="t-sm font-medium">{p.title}</b>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-3">
            {p.meta}
          </span>
        </a>
      ))}
    </div>
  );
}
