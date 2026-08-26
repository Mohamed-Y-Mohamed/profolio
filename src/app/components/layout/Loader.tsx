"use client";
import { useEffect } from "react";
import { site } from "@/app/data/site";

/**
 * The opening curtain.
 *
 * It is only ever visible when the inline script in <head> has set
 * `html.is-loading` — which it does before first paint, and only when motion is
 * allowed. That gating matters:
 *
 *   - No JavaScript at all      -> the class is never set, the curtain never
 *                                  renders, the site is immediately readable.
 *   - JS runs but React does not hydrate -> the inline script's own timeout
 *                                  clears the class after 2.2s.
 *   - Reduced motion            -> the class is never set.
 *
 * So there are three independent ways out and none of them depend on this
 * component. It only makes the good path prettier: dismiss as soon as the fonts
 * are ready, after a short minimum so a fast connection does not see a flash.
 */

/** Below this the curtain reads as a flicker rather than a beat. */
const MIN_VISIBLE_MS = 620;

/** Matches the hard exit in the inline head script. */
const MAX_VISIBLE_MS = 2200;

export default function Loader() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("is-loading")) return;

    const startedAt = performance.now();
    let settled = false;
    let minTimer = 0;

    const dismiss = () => {
      if (settled) return;
      settled = true;
      root.classList.remove("is-loading");
      root.classList.add("is-loaded");
    };

    // document.fonts is a real readiness signal — the display face landing late
    // is the one thing that would visibly reflow the hero.
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    fontsReady.then(() => {
      const elapsed = performance.now() - startedAt;
      minTimer = window.setTimeout(
        dismiss,
        Math.max(0, MIN_VISIBLE_MS - elapsed)
      );
    });

    const capTimer = window.setTimeout(dismiss, MAX_VISIBLE_MS);

    return () => {
      window.clearTimeout(minTimer);
      window.clearTimeout(capTimer);
      dismiss();
    };
  }, []);

  return (
    <div className="loader" aria-hidden>
      <div className="loader-mark">
        <span className="loader-initials">{site.initials}</span>
        <span className="loader-rule" />
      </div>
    </div>
  );
}
