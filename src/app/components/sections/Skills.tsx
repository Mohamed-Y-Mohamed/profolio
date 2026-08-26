import { skillGroups } from "@/app/data/skills";
import Section from "./Section";
import SkillColumn from "@/app/components/features/SkillColumn";

export default function Skills() {
  return (
    <Section id="stack" index="03" title="Stack">
      {/*
        Column counts are divisors of skillGroups.length (6) at every breakpoint,
        so the last row is always full. auto-fit would pick 4 or 5 here and leave
        an orphan column with a dead gap beside it.
      */}
      <div className="grid grid-cols-1 gap-px border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {skillGroups.map((g) => (
          <SkillColumn key={g.title} group={g} />
        ))}
      </div>
    </Section>
  );
}
