import { Section } from "@/components/brand/Section";
import { Split } from "@/components/brand/Split";
import { Lede } from "@/components/brand/Typography";
import { EVERYDAY_FEATURES } from "@/content/features";

export function EverydayFeatures() {
  return (
    <Section labelledBy="everyday-heading">
      <Split>
        <Split.Aside>
          <h2 id="everyday-heading">And the everyday work, done properly.</h2>
          <Lede>The basics every gym needs, built for how Indian gyms actually run.</Lede>
        </Split.Aside>
        <Split.Main>
          <dl className="m-0 grid gap-x-[clamp(32px,5vw,64px)] min-[701px]:grid-cols-2">
            {EVERYDAY_FEATURES.map((feature) => (
              <div key={feature.title} className="border-t border-rule py-[22px]">
                <dt className="mb-1 font-display text-[1.3rem] leading-tight font-bold tracking-[-0.02em]">
                  {feature.title}
                </dt>
                <dd className="m-0 text-ink-2">{feature.body}</dd>
              </div>
            ))}
          </dl>
        </Split.Main>
      </Split>
    </Section>
  );
}
