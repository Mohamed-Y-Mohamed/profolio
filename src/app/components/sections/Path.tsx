import { certifications, timeline } from "@/app/data/timeline";
import Section from "./Section";
import TimelineItem from "@/app/components/features/TimelineItem";
import CertificationList from "@/app/components/features/CertificationList";

export default function Path() {
  return (
    <Section id="path" index="04" title="Path" alt>
      <div className="relative pl-[clamp(1.4rem,3vw,2.6rem)]">
        <span
          aria-hidden
          className="absolute bottom-2 left-0 top-2 w-px bg-line"
        />
        {timeline.map((e) => (
          <TimelineItem key={e.id} entry={e} />
        ))}
      </div>

      <div className="mt-[clamp(3rem,7vw,5rem)]">
        <h4 className="accent mb-[1.2rem] font-mono text-[0.6875rem] uppercase tracking-[0.16em] font-medium">
          Certification
        </h4>
        <CertificationList items={certifications} />
      </div>
    </Section>
  );
}
