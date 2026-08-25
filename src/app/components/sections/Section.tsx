import type { ReactNode } from "react";
import Reveal from "@/app/components/ui/Reveal";
import SectionHeading from "@/app/components/ui/SectionHeading";

/** Shared shell: alt background, reveal-on-scroll, numbered heading. */
export default function Section({
  id,
  index,
  title,
  alt = false,
  children,
}: {
  id: string;
  index: string;
  title: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section-pad relative z-[2] ${
        alt ? "border-y border-line-soft bg-raise" : ""
      }`}
    >
      <Reveal className="gutter mx-auto max-w-[1280px]">
        <SectionHeading index={index} title={title} />
        {children}
      </Reveal>
    </section>
  );
}
