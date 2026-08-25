import type { ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-[0.6rem] font-mono text-[0.72rem] uppercase tracking-[0.13em] px-6 py-[0.92rem] rounded-[3px] border min-h-[46px] cursor-pointer transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] disabled:opacity-55 disabled:cursor-not-allowed";

/** Anchor-shaped call to action. */
export function ButtonLink({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/btn ${base} ${
        variant === "solid"
          ? "bg-accent-solid border-transparent font-semibold hover:brightness-110 hover:-translate-y-[2px]"
          : "border-line text-ink hover:border-accent-soft hover:accent hover:-translate-y-[2px]"
      }`}
    >
      {children}
    </a>
  );
}

/** Real button, for form submission. */
export default function Button({
  children,
  variant = "solid",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  return (
    <button
      {...rest}
      className={`${base} ${
        variant === "solid"
          ? "bg-accent-solid border-transparent font-semibold enabled:hover:brightness-110"
          : "border-line text-ink enabled:hover:accent"
      }`}
    >
      {children}
    </button>
  );
}
