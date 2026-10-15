import { Highlight } from "@/components/brand/Highlight";
import { Section } from "@/components/brand/Section";
import { ChatThread } from "@/components/mockups/ChatThread";
import { CheckInKiosk } from "@/components/mockups/CheckInKiosk";
import { MemberRiskCard } from "@/components/mockups/MemberRiskCard";
import { RenewalsPanel } from "@/components/mockups/RenewalsPanel";
import { TrainerCommissionTable } from "@/components/mockups/TrainerCommissionTable";
import { LATE_NIGHT_LEAD_CHAT } from "@/content/chats";
import { AUTOPAY_POINTS, FRONT_DESK_POINTS, SLIPPING_POINTS } from "@/content/features";
import { SECTION_IDS } from "@/content/navigation";
import { FeatureRow } from "./FeatureRow";

const ROW_GAP = "grid gap-[clamp(96px,12vw,160px)]";

export function FeatureDeepDives() {
  return (
    <Section id={SECTION_IDS.features} label="Features" tone="wash">
      <div className={ROW_GAP}>
        <FeatureRow mediaSide="right">
          <FeatureRow.Copy title="A front desk that answers at 11:40 pm.">
            <FeatureRow.Body>
              Most leads message after work, when nobody is at the counter. By morning they’ve asked two other gyms.
              Spotter replies from your gym’s WhatsApp number <Highlight>within a minute</Highlight>, using your real
              plans, prices and batch timings.
            </FeatureRow.Body>
            <FeatureRow.Points points={FRONT_DESK_POINTS} />
          </FeatureRow.Copy>
          <ChatThread thread={LATE_NIGHT_LEAD_CHAT} size="lg" className="min-[901px]:justify-self-end" />
        </FeatureRow>

        <FeatureRow mediaSide="left">
          <FeatureRow.Copy title="See who’s slipping while there’s still time to fix it.">
            <FeatureRow.Body>
              Spotter learns each member’s normal. Someone who trains five days a week and drops to two is a warning,
              even if they still turn up. Every morning you get a short list, with{" "}
              <Highlight>a reason and a next step</Highlight> for each name.
            </FeatureRow.Body>
            <FeatureRow.Points points={SLIPPING_POINTS} />
          </FeatureRow.Copy>
          <MemberRiskCard />
        </FeatureRow>

        <FeatureRow mediaSide="right">
          <FeatureRow.Copy title="Renewals that collect themselves.">
            <FeatureRow.Body>
              Members approve a UPI AutoPay mandate once, in Google Pay, PhonePe or Paytm. On renewal day Spotter
              collects the fee and sends a GST receipt. Members get a heads-up 24 hours before every debit, as RBI rules
              require.
            </FeatureRow.Body>
            <FeatureRow.Points points={AUTOPAY_POINTS} />
          </FeatureRow.Copy>
          <RenewalsPanel />
        </FeatureRow>

        <div className="grid items-start gap-[clamp(48px,5vw,80px)] min-[901px]:grid-cols-2">
          <FeatureRow.Copy title="Check-in without a ₹12,000 machine." titleSize="md">
            <FeatureRow.Body>
              Put a QR code at the door, or turn an old Android tablet into a face check-in kiosk. Members with expired
              plans are stopped politely and sent a payment link. Already have a biometric machine? Keep it. Spotter
              connects to it.
            </FeatureRow.Body>
            <CheckInKiosk />
          </FeatureRow.Copy>
          <FeatureRow.Copy title="PT is your best margin. Track it that way." titleSize="md">
            <FeatureRow.Body>
              Trainers log sessions from their phones. Spotter counts what’s left in each package, warns members when two
              sessions remain, and works out every trainer’s commission for the month.
            </FeatureRow.Body>
            <TrainerCommissionTable />
          </FeatureRow.Copy>
        </div>
      </div>
    </Section>
  );
}
