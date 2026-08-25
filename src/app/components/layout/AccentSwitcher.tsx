"use client";
import { accents } from "@/app/data/site";
import { useAccent } from "@/app/hooks/useAccent";

/** The signature control: re-themes the whole page and remembers the choice. */
export default function AccentSwitcher() {
  const { accent, choose } = useAccent();
  return (
    <div className="flex items-center gap-[0.42rem]" role="group" aria-label="Accent colour">
      {accents.map((a) => (
        <button
          key={a.hex}
          onClick={() => choose(a.hex)}
          aria-label={`${a.name} accent`}
          aria-pressed={accent === a.hex}
          className="h-[15px] w-[15px] cursor-pointer rounded-full border border-white/20 transition-transform duration-300 hover:scale-125"
          style={{
            background: a.hex,
            color: a.hex,
            transform: accent === a.hex ? "scale(1.15)" : undefined,
            boxShadow:
              accent === a.hex
                ? "0 0 0 2px var(--color-bg), 0 0 0 3px currentColor"
                : undefined,
          }}
        />
      ))}
    </div>
  );
}
