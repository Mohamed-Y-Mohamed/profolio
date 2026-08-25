import { minorProjects, projects } from "@/app/data/projects";
import Section from "./Section";
import ProjectCard from "@/app/components/features/ProjectCard";
import MinorProjectStrip from "@/app/components/features/MinorProjectStrip";

export default function Projects() {
  return (
    <Section id="work" index="02" title="Selected work" alt>
      <div className="grid grid-cols-1 gap-[clamp(1rem,2vw,1.5rem)] md:grid-cols-2 lg:grid-cols-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
      <MinorProjectStrip items={minorProjects} />
    </Section>
  );
}
