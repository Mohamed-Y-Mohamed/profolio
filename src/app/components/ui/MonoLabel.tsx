import type { ReactNode } from "react";

/** Uppercase monospace micro-label used for all technical metadata. */
export default function MonoLabel({
  children,
  className = "",
  as: Tag = "span",
}: {
  children: ReactNode;
  className?: string;
  as?: "span" | "div" | "h4";
}) {
  return (
    <Tag
      className={`font-mono text-[0.6875rem] uppercase tracking-[0.16em] font-medium text-ink-3 ${className}`}
    >
      {children}
    </Tag>
  );
}
