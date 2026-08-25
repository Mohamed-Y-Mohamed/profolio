import { skillGroups } from "@/app/data/skills";
import Section from "./Section";
import SkillColumn from "@/app/components/features/SkillColumn";

export default function Skills() {
  return (
    <Section id="stack" index="03" title="Stack">
      <div className="grid gap-px border border-line-soft bg-line-soft [grid-template-columns:repeat(auto-fit,minmax(215px,1fr))]">
        {skillGroups.map((g) => (
          <SkillColumn key={g.title} group={g} />
        ))}
      </div>
    </Section>
  );
}
