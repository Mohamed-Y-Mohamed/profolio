"use client";
import { useScrollProgress } from "@/app/hooks/useScrollProgress";

export default function ScrollProgress() {
  const { progress } = useScrollProgress();
  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left opacity-90 transition-transform duration-100"
      style={{ background: "var(--accent)", transform: `scaleX(${progress})` }}
    />
  );
}
