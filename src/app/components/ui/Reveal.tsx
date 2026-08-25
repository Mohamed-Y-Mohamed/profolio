"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Fades + lifts its children in once, when scrolled into view. */
export default function Reveal({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      data-shown={shown}
      className={`transition-all duration-[850ms] ease-[cubic-bezier(.22,1,.36,1)] ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[26px]"
      } ${shown ? "[&_.section-rule]:scale-x-100" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
