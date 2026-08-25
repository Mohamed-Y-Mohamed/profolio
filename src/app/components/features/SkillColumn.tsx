import type { SkillGroup } from "@/app/types";

export default function SkillColumn({ group }: { group: SkillGroup }) {
  return (
    <div className="bg-bg px-[1.4rem] py-[1.7rem] transition-colors duration-300 hover:bg-hi">
      <h4 className="accent mb-[1.1rem] font-mono text-[0.66rem] font-medium uppercase tracking-[0.15em]">
        {group.title}
      </h4>
      <ul>
        {group.items.map((s) => (
          <li
            key={s}
            className="t-sm py-[0.36rem] text-ink-2 transition-colors duration-200 hover:text-ink"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
