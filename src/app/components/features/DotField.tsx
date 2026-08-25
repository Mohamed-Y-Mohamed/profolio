"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

type Dot = { x: number; y: number; ox: number; oy: number };

/**
 * Hero background: a dot lattice that yields around the pointer and takes on
 * the accent colour near it. Pauses when scrolled off-screen, and paints a
 * single static frame when the visitor prefers reduced motion.
 */
export default function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d", { alpha: true });
    if (!ctx) return;
    const host = cv.parentElement;
    if (!host) return;

    let dots: Dot[] = [];
    let w = 0;
    let h = 0;
    let raf: number | null = null;
    const ptr = { x: -9999, y: -9999, on: false };

    const accentRGB = () => {
      const hex = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim()
        .replace("#", "");
      return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
      ];
    };

    const build = () => {
      const r = cv.getBoundingClientRect();
      w = r.width;
      h = r.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const gap = w < 700 ? 46 : 34;
      dots = [];
      for (let y = gap * 0.5; y < h; y += gap) {
        for (let x = gap * 0.5; x < w; x += gap) {
          dots.push({ x, y, ox: x, oy: y });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const [ar, ag, ab] = accentRGB();
      const R = 148;
      const R2 = R * R;
      for (const d of dots) {
        const dx = d.ox - ptr.x;
        const dy = d.oy - ptr.y;
        const d2 = dx * dx + dy * dy;
        let tx = d.ox;
        let ty = d.oy;
        let near = 0;
        if (ptr.on && d2 < R2) {
          const dist = Math.sqrt(d2) || 1;
          near = 1 - dist / R;
          const push = near * near * 26;
          tx = d.ox + (dx / dist) * push;
          ty = d.oy + (dy / dist) * push;
        }
        d.x += (tx - d.x) * 0.14;
        d.y += (ty - d.y) * 0.14;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.15 + near * 1.7, 0, 6.2832);
        ctx.fillStyle =
          near > 0.01
            ? `rgba(${ar},${ag},${ab},${0.13 + near * 0.72})`
            : "rgba(158,166,174,0.26)";
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (raf) cancelAnimationFrame(raf);
      build();
      if (reduced) {
        ptr.on = false;
        draw();
        return;
      }
      loop();
    };

    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      ptr.x = e.clientX - r.left;
      ptr.y = e.clientY - r.top;
      ptr.on = true;
    };
    const onLeave = () => {
      ptr.on = false;
    };
    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);

    const io = new IntersectionObserver(
      ([e]) => {
        if (reduced) return;
        if (e.isIntersecting) {
          if (!raf) loop();
        } else if (raf) {
          cancelAnimationFrame(raf);
          raf = null;
        }
      },
      { threshold: 0.01 }
    );
    io.observe(host);

    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(start, 160);
    };
    window.addEventListener("resize", onResize);

    start();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      clearTimeout(rt);
      window.removeEventListener("resize", onResize);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 z-0 h-full w-full" />;
}
