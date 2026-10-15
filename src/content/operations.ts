/** Example operational data shown inside the product mockups. Illustrative, not real members. */

export const AT_RISK_MEMBER = {
  name: "Imran Shaikh",
  since: "Member since March 2025. 3-month plan.",
  usualWeekdays: [0, 2, 4],
  quietDays: 12,
  skippedDayIndexes: new Set([18, 30, 35]),
  heatmapWeeks: 8,
  signals: [
    { label: "Usually", value: "3 visits a week", alarming: false },
    { label: "Last 12 days", value: "0 visits", alarming: true },
    { label: "PT sessions missed", value: "2", alarming: true },
    { label: "Plan ends", value: "2 Nov", alarming: false },
  ],
  reply: { time: "2:31 pm", text: "Twisted my knee playing football. Doctor said 2 weeks rest." },
  suggestedActions: { primary: "Approve 14-day freeze", secondary: "Call him" },
} as const;

export type FailedRenewal = Readonly<{ member: string; amount: number; reason: string }>;

export const OCTOBER_RENEWALS = {
  due: 196,
  collectedByAutoPay: 182,
  paidAtDesk: 12,
  autoPayTotal: 273000,
  needsAttention: [
    { member: "Gurpreet Bedi", amount: 1500, reason: "Insufficient balance. Retrying tomorrow at 8 am." },
    { member: "Ankit Joshi", amount: 4000, reason: "Mandate cancelled by member. Payment link sent on WhatsApp." },
  ] satisfies ReadonlyArray<FailedRenewal>,
} as const;

export type CheckInEvent = Readonly<{ time: string; name: string; outcome: string; needsRenewal?: true }>;

export const MORNING_CHECK_INS: ReadonlyArray<CheckInEvent> = [
  { time: "6:02", name: "Aarav Mehta", outcome: "Link sent", needsRenewal: true },
  { time: "6:04", name: "Priya Nair", outcome: "Checked in" },
  { time: "6:05", name: "Rahul Verma", outcome: "Checked in" },
  { time: "6:07", name: "Neha Joshi", outcome: "Staff shift started" },
];

export const PEOPLE_INSIDE_NOW = 23;

export type TrainerMonth = Readonly<{ trainer: string; sessions: number; clients: number }>;

export const PT_RATE_PER_SESSION = 400;

export const OCTOBER_PT: ReadonlyArray<TrainerMonth> = [
  { trainer: "Vikram Rathore", sessions: 46, clients: 12 },
  { trainer: "Neha Joshi", sessions: 38, clients: 9 },
  { trainer: "Saurabh Patil", sessions: 21, clients: 6 },
];
