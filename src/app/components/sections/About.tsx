import { stats } from "@/app/data/site";
import Section from "./Section";
import StatCard from "@/app/components/ui/StatCard";

export default function About() {
  return (
    <Section id="about" index="01" title="Profile">
      <div className="grid grid-cols-1 gap-[clamp(2.4rem,6vw,6rem)] lg:grid-cols-[1.35fr_1fr]">
        <div className="t-body">
          <p className="mb-[1.15rem] max-w-[62ch] text-ink-2">
            I&apos;m a graduate software engineer in London who builds things end to end —{" "}
            <b className="font-semibold text-ink">
              TypeScript and React on the front, Node, Express and Java behind it
            </b>
            , with PostgreSQL, Supabase or Firebase underneath. Most of what I build gets
            deployed, not just demoed.
          </p>
          <p className="mb-[1.15rem] max-w-[62ch] text-ink-2">
            Recent work includes <b className="font-semibold text-ink">NutriPilot</b>, a
            nutrition tracker running as both a web app and an Android build from one React
            codebase, with an AI coach that analyses meal photos; and{" "}
            <b className="font-semibold text-ink">Streamline</b>, a project-management
            platform with an Express and Prisma API behind AWS Cognito authentication.
          </p>
          <p className="max-w-[62ch] text-ink-2">
            I got my first taste of a production codebase interning at{" "}
            <b className="font-semibold text-ink">Lab Diagnostic</b>, working on a
            real-time diagnostics dashboard used by healthcare professionals. Since August
            2024 I&apos;ve delivered client work through{" "}
            <b className="font-semibold text-ink">Fiverr and Freelancer.com</b> — gathering
            requirements directly, designing the API and database, then deploying and
            supporting what I build. I work in Agile teams and lean on version control, TDD
            and CI/CD to keep software maintainable rather than merely working.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px self-start border border-line-soft bg-line-soft">
          {stats.map((s) => (
            <StatCard key={s.value} stat={s} />
          ))}
        </div>
      </div>
    </Section>
  );
}
