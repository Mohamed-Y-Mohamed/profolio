/** Green "Live" pill for deployed projects. */
export default function LiveBadge() {
  return (
    <span
      className="font-mono text-[0.58rem] uppercase tracking-[0.12em] px-[0.5rem] py-[0.24rem] rounded-[2px] border whitespace-nowrap text-ok"
      style={{
        borderColor: "color-mix(in srgb, var(--color-ok) 40%, transparent)",
        background: "color-mix(in srgb, var(--color-ok) 9%, transparent)",
      }}
    >
      Live
    </span>
  );
}
