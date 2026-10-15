import { Section } from "@/components/brand/Section";
import { Split } from "@/components/brand/Split";
import { Lede } from "@/components/brand/Typography";
import { DAY_AT_THE_GYM } from "@/content/dayTimeline";
import { SECTION_IDS } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { TimelineList } from "./TimelineList";

const MARKER =
  "before:absolute before:top-[33px] before:left-[-35px] before:z-10 before:size-3.5 before:rounded-full before:bg-paper before:shadow-[inset_0_0_0_2px_var(--rule)] before:transition-[background-color,box-shadow] before:duration-300 before:content-[''] data-[reached=true]:before:bg-marker data-[reached=true]:before:shadow-[inset_0_0_0_2px_var(--ink)]";

export function DayTimeline() {
  return (
    <Section id={SECTION_IDS.how} labelledBy="how-heading">
      <Split>
        <Split.Aside>
          <h2 id="how-heading">One Wednesday at a 300-member gym in Pune.</h2>
          <Lede>What Spotter handles while you train clients, open the shutter, and sleep.</Lede>
        </Split.Aside>
        <Split.Main>
          <TimelineList>
            {DAY_AT_THE_GYM.map((moment) => (
              <li
                key={moment.time}
                className={cn(
                  "relative grid gap-2.5 border-t border-rule py-7 last:border-b min-[561px]:grid-cols-[8.5rem_minmax(0,1fr)] min-[561px]:gap-6",
                  MARKER,
                )}
              >
                <time
                  className={cn(
                    "self-start justify-self-start font-numeral text-[2.1rem] leading-none",
                    moment.afterHours && "rounded-[3px] bg-marker px-1.5 pt-1 text-marker-ink",
                  )}
                >
                  {moment.time}
                </time>
                <div>
                  <h3 className="mb-2">{moment.title}</h3>
                  <p className="max-w-[58ch] text-ink-2">{moment.body}</p>
                </div>
              </li>
            ))}
          </TimelineList>
        </Split.Main>
      </Split>
    </Section>
  );
}
