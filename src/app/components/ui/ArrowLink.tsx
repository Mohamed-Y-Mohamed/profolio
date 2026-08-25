/** Small uppercase link with an arrow that nudges on hover. */
export default function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: string;
  className?: string;
}) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/link font-mono text-[0.66rem] uppercase tracking-[0.11em] text-ink-2 inline-flex items-center gap-[0.4rem] min-h-[32px] transition-colors hover:accent ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]"
      >
        ↗
      </span>
    </a>
  );
}
