import { Section } from "@/components/brand/Section";
import { Split } from "@/components/brand/Split";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/content/faqAndJoin";
import { SECTION_IDS } from "@/content/navigation";

export function Faq() {
  return (
    <Section id={SECTION_IDS.faq} labelledBy="faq-heading" className="border-t border-rule">
      <Split>
        <Split.Aside>
          <h2 id="faq-heading">Questions owners ask us.</h2>
        </Split.Aside>
        <Split.Main>
          <Accordion type="multiple" className="border-y border-rule">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-rule">
                <AccordionTrigger className="items-center rounded-none py-[22px] font-display text-[1.35rem] leading-tight font-bold tracking-[-0.02em] hover:no-underline focus-visible:ring-0 **:data-[slot=accordion-trigger-icon]:size-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-[62ch] pb-6 text-[1.0625rem] text-ink-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Split.Main>
      </Split>
    </Section>
  );
}
