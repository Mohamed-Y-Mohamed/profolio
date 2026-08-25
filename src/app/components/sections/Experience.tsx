import { certifications, timeline } from "@/app/data/timeline";
import type { TimelineEntry } from "@/app/types";
import Section from "./Section";
import TimelineItem from "@/app/components/features/TimelineItem";
import CertificationList from "@/app/components/features/CertificationList";

/** One labelled rail of entries — the vertical line is scoped to the group. */
function Rail({ label, entries }: { label: string; entries: TimelineEntry[] }) {
  return (
    <div className="mb-[clamp(2.5rem,5vw,4rem)] last:mb-0">
      <h3 className="mb-[1.4rem] font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-ink-3">
        <span className="accent">/</span> {label}
      </h3>
      <div className="relative pl-[clamp(1.4rem,3vw,2.6rem)]">
        <span aria-hidden className="absolute bottom-3 left-0 top-3 w-px bg-line" />
        {entries.map((e) => (
          <TimelineItem key={e.id} entry={e} />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const work = timeline.filter((e) => e.kind === "work");
  const education = timeline.filter((e) => e.kind === "education");

  return (
    <Section id="experience" index="04" title="Experience" alt>
      <Rail label="Work" entries={work} />
      <Rail label="Education" entries={education} />

      <div className="mt-[clamp(2rem,4vw,3rem)] border-t border-line-soft pt-[clamp(2rem,4vw,3rem)]">
        <h3 className="mb-[1.2rem] font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-ink-3">
          <span className="accent">/</span> Certification
        </h3>
        <CertificationList items={certifications} />
      </div>
    </Section>
  );
}
