import { Section } from "@/components/brand/Section";
import { SECTION_IDS } from "@/content/navigation";
import { LeakCalculator } from "./LeakCalculator";

export function LeakSection() {
  return (
    <Section id={SECTION_IDS.leak} labelledBy="leak-heading" tone="navy" glow="right" className="py-[clamp(80px,9vw,128px)]">
      <LeakCalculator />
    </Section>
  );
}
