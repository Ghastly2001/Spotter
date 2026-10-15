import { Section } from "@/components/brand/Section";
import { Lede, SectionIntro } from "@/components/brand/Typography";
import { SECTION_IDS } from "@/content/navigation";
import { INCLUDED_FEATURES, PRICING_EXTRAS } from "@/content/pricing";
import { PriceCard } from "./PriceCard";

const CHECK_MARK =
  "before:absolute before:top-[17px] before:left-[3px] before:h-1.5 before:w-3 before:-rotate-45 before:border-b-2 before:border-l-2 before:border-gain before:content-['']";

export function Pricing() {
  return (
    <Section id={SECTION_IDS.pricing} labelledBy="pricing-heading" tone="wash">
      <SectionIntro>
        <h2 id="pricing-heading">One plan per gym. No member caps.</h2>
        <Lede>Every feature is included. Add your 400th member or your tenth staff login and the price stays the same.</Lede>
      </SectionIntro>

      <div className="grid items-start gap-[clamp(32px,5vw,80px)] min-[901px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <PriceCard />
        <div>
          <h3 className="mb-3">Everything included</h3>
          <ul className="m-0 mb-11 list-none columns-1 gap-8 p-0 min-[541px]:columns-2">
            {INCLUDED_FEATURES.map((feature) => (
              <li key={feature} className={`relative break-inside-avoid border-t border-rule py-2.5 pl-7 ${CHECK_MARK}`}>
                {feature}
              </li>
            ))}
          </ul>
          <h3 className="mb-3">Only if you need them</h3>
          <dl className="m-0 grid">
            {PRICING_EXTRAS.map((extra) => (
              <div
                key={extra.name}
                className="grid gap-0.5 border-t border-rule py-3.5 min-[541px]:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] min-[541px]:gap-4"
              >
                <dt className="font-semibold">{extra.name}</dt>
                <dd className="m-0 text-ink-2">{extra.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
