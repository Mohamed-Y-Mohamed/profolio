"use client";
import type { Project } from "@/app/types";
import { usePointerGlow } from "@/app/hooks/usePointerGlow";
import ArrowLink from "@/app/components/ui/ArrowLink";
import LiveBadge from "@/app/components/ui/LiveBadge";
import MonoLabel from "@/app/components/ui/MonoLabel";
import Tag from "@/app/components/ui/Tag";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const onPointerMove = usePointerGlow();
  const span = project.size === "feature" ? "lg:col-span-2" : "lg:col-span-3";

  return (
    <article
      onPointerMove={onPointerMove}
      className={`group card-glow relative isolate flex flex-col overflow-hidden rounded-[3px] border border-line-soft bg-raise p-[clamp(1.5rem,2.6vw,2.2rem)] transition-all duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:border-accent-soft ${span}`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <MonoLabel className="accent">{String(index + 1).padStart(2, "0")}</MonoLabel>
        {project.isLive ? <LiveBadge /> : <MonoLabel>{project.note}</MonoLabel>}
      </div>

      <h3 className="t-h3 mb-[0.7rem] font-display font-medium">{project.title}</h3>
      <span className="mb-4 block font-mono text-[0.64rem] uppercase tracking-[0.13em] text-ink-3">
        {project.role}
      </span>

      <p className="t-sm mb-6 flex-1 text-ink-2">{project.description}</p>

      <div className="mb-[1.4rem] flex flex-wrap gap-[0.4rem]">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-[1.1rem] border-t border-line-soft pt-[1.1rem]">
        {project.links.map((l) => (
          <ArrowLink key={l.label} href={l.url}>
            {l.label}
          </ArrowLink>
        ))}
      </div>
    </article>
  );
}
