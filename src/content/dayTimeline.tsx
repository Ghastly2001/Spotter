import type { ReactNode } from "react";
import { Highlight } from "@/components/brand/Highlight";

export type TimelineMoment = Readonly<{
  time: string;
  title: string;
  body: ReactNode;
  /** Late-night moments are marked: they are when owners are not around. */
  afterHours?: true;
}>;

export const DAY_AT_THE_GYM: ReadonlyArray<TimelineMoment> = [
  {
    time: "6:02 am",
    title: "Aarav’s plan ran out yesterday.",
    body: (
      <>
        He scans the QR code at the door. The tablet shows “Renewal due” and his phone gets a UPI link before he
        finishes warming up. <Highlight>Paid at 6:09.</Highlight>
      </>
    ),
  },
  {
    time: "10:30 am",
    title: "Your morning summary lands on WhatsApp.",
    body: "Three renewals collected overnight by AutoPay. Seven members slipping. Two trial classes today, both confirmed.",
  },
  {
    time: "2:15 pm",
    title: "Imran hasn’t been in for 12 days.",
    body: "Spotter sends the check-in message you approved last month. He replies that he hurt his knee. Spotter suggests a two-week freeze, and you approve it with one tap.",
  },
  {
    time: "7:48 pm",
    title: "Peak hour. 64 people inside.",
    body: "Vikram logs his fourth PT session of the evening. His October commission updates on its own.",
  },
  {
    time: "11:40 pm",
    title: "A lead asks “fees kitni hai?”",
    body: (
      <>
        Priya messaged after seeing your Instagram ad. Spotter answers with your plans and batch timings, books her a
        free trial for Saturday morning, and adds her to your leads. <Highlight>You’re asleep.</Highlight>
      </>
    ),
    afterHours: true,
  },
];
