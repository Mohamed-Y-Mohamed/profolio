export default function Tag({ children }: { children: string }) {
  return (
    <span className="font-mono text-[0.62rem] tracking-[0.08em] px-[0.6rem] py-[0.3rem] border border-line rounded-[2px] text-ink-3 transition-colors group-hover:text-ink-2">
      {children}
    </span>
  );
}
