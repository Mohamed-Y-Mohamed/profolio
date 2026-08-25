import MonoLabel from "./MonoLabel";

/** Numbered section heading with the rule that draws itself in on reveal. */
export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-[1.1rem] mb-[clamp(2.4rem,5vw,4rem)]">
      <MonoLabel className="accent shrink-0">{index}</MonoLabel>
      <h2 className="font-display t-h2 font-medium shrink-0">{title}</h2>
      <span
        aria-hidden
        className="section-rule flex-1 h-px bg-line origin-left scale-x-0 transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-100"
      />
    </div>
  );
}
