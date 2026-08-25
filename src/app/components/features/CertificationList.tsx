import type { Certification } from "@/app/types";

export default function CertificationList({ items }: { items: Certification[] }) {
  return (
    <div className="flex flex-wrap gap-[0.6rem]">
      {items.map((c) => (
        <span
          key={c.name}
          className="t-sm inline-flex items-center gap-[0.6rem] rounded-[3px] border border-line-soft bg-raise px-[1.1rem] py-3 text-ink-2 transition-colors duration-300 hover:border-accent-soft hover:text-ink"
        >
          <i
            aria-hidden
            className="h-[5px] w-[5px] shrink-0 rounded-full"
            style={
              c.inProgress
                ? { border: "1px solid var(--accent)" }
                : { background: "var(--accent)" }
            }
          />
          {c.name}
          {c.inProgress && (
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-4">
              in progress
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
