import { PlateMark } from "@/components/brand/PlateMark";

export function Logo() {
  return (
    <a
      href="#top"
      aria-label="Spotter home"
      className="inline-flex items-center gap-2.5 font-display text-[1.55rem] leading-none font-bold tracking-[-0.035em] no-underline"
    >
      <PlateMark />
      spotter
    </a>
  );
}
