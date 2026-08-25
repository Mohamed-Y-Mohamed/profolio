import type { Stat } from "@/app/types";

export default function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="bg-bg px-[1.3rem] py-6 transition-colors duration-400 hover:bg-hi">
      <b className="block font-display font-medium leading-none tracking-[-0.03em] accent mb-2 text-[clamp(1.9rem,4vw,2.7rem)]">
        {stat.value}
      </b>
      <span className="block font-mono text-[0.66rem] uppercase tracking-[0.13em] text-ink-3 leading-[1.5] whitespace-pre-line">
        {stat.label}
      </span>
    </div>
  );
}
