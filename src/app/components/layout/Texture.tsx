/** Film grain + vignette. Purely decorative, sits above everything. */
export default function Texture() {
  return (
    <>
      <div
        aria-hidden
        className="grain-layer pointer-events-none fixed inset-0 z-[60] opacity-[0.035]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, transparent 40%, rgba(0,0,0,.55) 100%)",
        }}
      />
    </>
  );
}
