import type { TimelineEntry } from "@/app/types";

/**
 * One entry on the experience rail. The marker fills and a soft accent wash
 * rises from the left edge on hover, so a long list still reads as a set of
 * distinct, scannable records rather than one wall of bullets.
 */
export default function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="group relative pb-[clamp(2rem,4vw,3rem)] last:pb-0">
      {/* rail marker */}
      <span
        aria-hidden
        className="absolute top-[1.45rem] left-[calc(-1*clamp(1.4rem,3vw,2.6rem))] z-10 h-[9px] w-[9px] -translate-x-[4px] rounded-full border-2 bg-bg transition-all duration-300 group-hover:scale-125"
        style={{ borderColor: "var(--accent)" }}
      />
      <span
        aria-hidden
        className="absolute top-[1.45rem] left-[calc(-1*clamp(1.4rem,3vw,2.6rem))] z-10 h-[9px] w-[9px] -translate-x-[4px] scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"
        style={{ background: "var(--accent)" }}
      />

      <div className="card-glow relative isolate overflow-hidden rounded-[3px] border border-transparent px-[clamp(0.9rem,2vw,1.4rem)] py-[1.1rem] transition-colors duration-300 group-hover:border-line-soft group-hover:bg-raise/60">
        <div className="mb-[0.55rem] flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="t-h3 font-display font-medium">{entry.title}</h3>
            <span
              className="rounded-[2px] border px-[0.45rem] py-[0.15rem] font-mono text-[0.58rem] uppercase tracking-[0.12em]"
              style={{
                color: "var(--accent)",
                borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
                background: "color-mix(in srgb, var(--accent) 8%, transparent)",
              }}
            >
              {entry.tag}
            </span>
          </div>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.13em] text-ink-3">
            {entry.period}
          </span>
        </div>

        <span className="t-sm mb-[0.9rem] block text-ink-2">{entry.organisation}</span>

        <ul className="grid gap-[0.5rem]">
          {entry.points.map((p) => (
            <li key={p} className="flex max-w-[74ch] gap-[0.85rem]">
              <span
                aria-hidden
                className="mt-[0.62em] h-[3px] w-[3px] shrink-0 rounded-full bg-ink-4 transition-colors duration-300 group-hover:bg-[var(--accent)]"
              />
              <span className="t-sm text-ink-2">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
