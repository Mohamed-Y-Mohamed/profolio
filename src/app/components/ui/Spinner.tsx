export default function Spinner() {
  return (
    <span
      aria-hidden
      className="inline-block w-[13px] h-[13px] rounded-full border-2 border-current border-r-transparent"
      style={{ animation: "spin-fast .7s linear infinite" }}
    />
  );
}
