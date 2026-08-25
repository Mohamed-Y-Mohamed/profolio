import type { TimelineEntry } from "@/app/types";
import MonoLabel from "@/app/components/ui/MonoLabel";

export default function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="group relative pb-[clamp(2.4rem,5vw,3.6rem)] last:pb-0">
      <span
        aria-hidden
        className="absolute top-[0.62rem] left-[calc(-1*clamp(1.4rem,3vw,2.6rem))] h-[7px] w-[7px] -translate-x-[3px] rounded-full border bg-bg transition-colors duration-300 group-hover:bg-[var(--accent)]"
        style={{ borderColor: "var(--accent)" }}
      />
      <div className="mb-[0.3rem] flex flex-wrap items-baseline justify-between gap-4">
        <h3 className="t-h3 font-display font-medium">{entry.title}</h3>
        <MonoLabel>{entry.period}</MonoLabel>
      </div>
      <span className="accent t-sm mb-4 block">{entry.organisation}</span>
      <ul>
        {entry.points.map((p) => (
          <li key={p} className="mb-[0.55rem] flex max-w-[70ch] gap-[1.2rem] last:mb-0">
            <span aria-hidden className="mt-[0.68em] h-px w-[6px] shrink-0 bg-ink-4" />
            <span className="t-sm text-ink-2">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
