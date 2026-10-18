import { ChiselCard } from "@/components/brand/ChiselCard";
import { Section } from "@/components/brand/Section";
import { FOUNDING_PERKS } from "@/content/faqAndJoin";
import { FOUNDING_OFFER } from "@/content/pricing";
import { SECTION_IDS } from "@/content/navigation";
import { JoinForm } from "./JoinForm";

export function JoinSection() {
  return (
    <Section id={SECTION_IDS.join} labelledBy="join-heading" tone="navy" glow="bottomLeft" className="py-[clamp(80px,10vw,140px)]">
      <div className="grid items-start gap-split min-[861px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <div>
          <h2 id="join-heading" className="text-[clamp(2.5rem,5vw,4.25rem)]">
            Be one of the first {FOUNDING_OFFER.spots} gyms.
          </h2>
          <ul className="m-0 mt-8 list-none p-0">
            {FOUNDING_PERKS.map((perk) => (
              <li key={perk} className="border-t border-on-navy-rule py-3.5 text-lg">
                {perk}
              </li>
            ))}
          </ul>
        </div>
        <ChiselCard tone="navy" className="p-[clamp(22px,3vw,36px)]">
          <JoinForm />
        </ChiselCard>
      </div>
    </Section>
  );
}
