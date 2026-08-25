"use client";
import { useCallback, useEffect, useState } from "react";
import { accents } from "@/app/data/site";

const KEY = "mym-accent";

/** Reads/writes the --accent CSS variable and remembers the choice. */
export function useAccent() {
  const [accent, setAccent] = useState<string>(accents[0].hex);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) {
        setAccent(saved);
        document.documentElement.style.setProperty("--accent", saved);
      }
    } catch {
      /* storage unavailable — keep the default */
    }
  }, []);

  const choose = useCallback((hex: string) => {
    setAccent(hex);
    document.documentElement.style.setProperty("--accent", hex);
    try {
      localStorage.setItem(KEY, hex);
    } catch {
      /* ignore */
    }
  }, []);

  return { accent, choose };
}
