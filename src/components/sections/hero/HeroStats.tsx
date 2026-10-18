import { FOUNDING_OFFER, PRICES } from "@/content/pricing";
import { formatRupees } from "@/lib/format";

const STATS: ReadonlyArray<Readonly<{ value: string; label: string }>> = [
  { value: String(FOUNDING_OFFER.spots), label: "founding gyms, no more" },
  { value: "1 month", label: "free, with setup done for you" },
  { value: formatRupees(PRICES.founding), label: "a month after that, locked for good" },
];

/** One glass bar, three facts, hairline dividers. */
export function HeroStats() {
  return (
    <dl className="glass m-0 grid [--cut:var(--cut-lg)] min-[641px]:grid-cols-3">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="grid gap-1 border-t border-on-navy-rule px-6 py-5 first:border-t-0 min-[641px]:border-t-0 min-[641px]:border-l min-[641px]:first:border-l-0"
        >
          <dt className="font-display text-[2rem] leading-none font-bold tracking-[-0.02em] text-marker">{stat.value}</dt>
          <dd className="m-0 text-[0.9375rem] text-on-navy">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
