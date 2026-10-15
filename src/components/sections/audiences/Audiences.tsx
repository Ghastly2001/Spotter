import { Section } from "@/components/brand/Section";
import { SectionIntro } from "@/components/brand/Typography";
import { AUDIENCES } from "@/content/features";

export function Audiences() {
  return (
    <Section labelledBy="audiences-heading">
      <SectionIntro>
        <h2 id="audiences-heading">Built for more than weight rooms.</h2>
      </SectionIntro>
      <dl className="m-0 grid gap-x-[clamp(24px,4vw,56px)] min-[561px]:grid-cols-2 min-[901px]:grid-cols-3">
        {AUDIENCES.map((audience) => (
          <div key={audience.name} className="border-t-2 border-ink pt-[22px] pb-[30px]">
            <dt className="mb-2.5 font-display text-[clamp(1.5rem,2.2vw,1.9rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
              {audience.name}
            </dt>
            <dd className="m-0 max-w-[34ch] text-ink-2">{audience.needs}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
