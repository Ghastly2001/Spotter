import { PlateMark } from "@/components/brand/PlateMark";

/**
 * The brand name, set huge and cropped by the footer's lower edge, fading out as it goes.
 * Decorative: the header logo is the accessible one.
 */
export function FooterWordmark() {
  return (
    <div aria-hidden="true" className="relative isolate select-none">
      <div className="pointer-events-none absolute -bottom-1/3 -left-[8%] -z-10 aspect-square w-[60%] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--marker)_38%,transparent),transparent)] blur-2xl" />
      <div className="pointer-events-none absolute -right-[10%] -bottom-1/2 -z-10 aspect-square w-[55%] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--navy-2)_90%,var(--on-navy)),transparent)] blur-2xl" />
      <p className="m-0 flex h-[0.8em] items-start gap-[0.1em] overflow-hidden font-display text-[clamp(3.5rem,23vw,18.7rem)] leading-[0.82] font-bold tracking-[-0.045em]">
        <PlateMark size="display" />
        <span className="bg-[linear-gradient(to_bottom,var(--on-navy)_25%,transparent_98%)] bg-clip-text text-transparent">
          spotter
        </span>
      </p>
    </div>
  );
}
