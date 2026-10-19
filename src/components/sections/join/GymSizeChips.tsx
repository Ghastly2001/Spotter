import { DEFAULT_GYM_SIZE, GYM_SIZES } from "@/content/faqAndJoin";

const CHIP =
  "chisel-card block px-4 pt-[11px] pb-[9px] text-[0.9375rem] leading-none font-semibold text-on-navy-muted transition-colors [--cut:var(--cut-sm)] [--chisel-bg:var(--navy)] [--chisel-border:var(--on-navy-rule)] hover:text-on-navy hover:[--chisel-border:var(--on-navy-muted)] peer-checked:text-on-navy peer-checked:[--chisel-bg:color-mix(in_oklab,var(--marker)_12%,var(--navy))] peer-checked:[--chisel-border:var(--marker)] peer-focus-visible:[--chisel-border:var(--marker)]";

export type GymSizeChipsProps = Readonly<{ defaultValue: string }>;

/** One choice out of a few, shown as chips. Real radio inputs, so it posts with the form and works by keyboard. */
export function GymSizeChips({ defaultValue }: GymSizeChipsProps) {
  const selected = defaultValue || DEFAULT_GYM_SIZE;

  return (
    <fieldset className="m-0 min-w-0 border-0 p-0 min-[521px]:col-span-2">
      <legend className="mb-2 p-0 text-[0.9375rem] font-semibold">Active members</legend>
      <div className="flex flex-wrap gap-2.5">
        {GYM_SIZES.map((size) => (
          <label key={size} className="relative cursor-pointer">
            <input type="radio" name="size" value={size} defaultChecked={size === selected} className="peer sr-only" />
            <span className={CHIP}>{size}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
