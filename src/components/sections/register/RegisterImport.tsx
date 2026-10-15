import { Section } from "@/components/brand/Section";
import { FeatureRow } from "@/components/sections/features/FeatureRow";
import { ParsedRegisterPanel } from "@/components/mockups/ParsedRegisterPanel";
import { RegisterSheet } from "@/components/mockups/RegisterSheet";
import { IMPORT_STEPS } from "@/content/registerImport";

export function RegisterImport() {
  return (
    <Section labelledBy="register-heading" tone="wash">
      <div className="grid items-center gap-split min-[901px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <FeatureRow.Copy title="Bring your register. We’ll do the typing." titleId="register-heading">
          <FeatureRow.Body>
            Plenty of gyms still run on a notebook, an Excel sheet, or both. Send a photo or the file, and Spotter turns
            it into members, plans and pending dues.
          </FeatureRow.Body>
          <ol className="m-0 mt-2 grid list-none p-0 [counter-reset:step]">
            {IMPORT_STEPS.map((step) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 border-t border-rule py-[18px] [counter-increment:step] before:font-numeral before:text-[2.1rem] before:leading-none before:content-[counter(step)]"
              >
                <div>
                  <b className="block font-semibold">{step.title}</b>
                  <span className="text-ink-2">{step.body}</span>
                </div>
              </li>
            ))}
          </ol>
        </FeatureRow.Copy>

        <div className="relative min-w-0 sm:pb-[210px]">
          <RegisterSheet />
          <ParsedRegisterPanel className="relative z-10 -mt-7 ml-auto w-[min(370px,94%)] sm:absolute sm:right-0 sm:bottom-0 sm:mt-0 sm:w-[min(370px,84%)]" />
        </div>
      </div>
    </Section>
  );
}
