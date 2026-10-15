import type { StatusTone } from "@/components/brand/StatusChip";

/** Example gym used across every product mockup. Names and numbers are illustrative. */
export const EXAMPLE_GYM = {
  name: "Ironline Fitness",
  area: "Kothrud",
  initials: "IF",
  today: new Date(2026, 9, 15),
  todayLabel: "Thu, 15 Oct",
} as const;

export const MAX_WEEKLY_VISITS = 6;
export const LOW_WEEKLY_VISITS = 1;

export type SlippingMember = Readonly<{
  name: string;
  weeklyVisits: ReadonlyArray<number>;
  lastVisit: string;
  planEnds: string;
  action: Readonly<{ label: string; tone: StatusTone; swipeDelayMs?: number }>;
}>;

export const SLIPPING_MEMBERS: ReadonlyArray<SlippingMember> = [
  {
    name: "Sneha Kulkarni",
    weeklyVisits: [4, 4, 3, 2, 1, 0],
    lastVisit: "9 days ago",
    planEnds: "21 Oct",
    action: { label: "Nudge sent", tone: "marker", swipeDelayMs: 350 },
  },
  {
    name: "Imran Shaikh",
    weeklyVisits: [3, 3, 3, 3, 1, 0],
    lastVisit: "13 days ago",
    planEnds: "2 Nov",
    action: { label: "Replied: knee injury", tone: "calm" },
  },
  {
    name: "Gurpreet Bedi",
    weeklyVisits: [5, 5, 4, 4, 3, 2],
    lastVisit: "2 days ago",
    planEnds: "18 Oct",
    action: { label: "AutoPay failed", tone: "loss" },
  },
  {
    name: "Kavya Reddy",
    weeklyVisits: [3, 3, 2, 2, 1, 1],
    lastVisit: "6 days ago",
    planEnds: "30 Oct",
    action: { label: "Call suggested", tone: "marker", swipeDelayMs: 600 },
  },
  {
    name: "Manoj Yadav",
    weeklyVisits: [6, 5, 5, 4, 3, 3],
    lastVisit: "Yesterday",
    planEnds: "12 Nov",
    action: { label: "Watching", tone: "calm" },
  },
];

export const SLIPPING_SUMMARY = { totalSlipping: 7, renewalsAtRisk: 8400 } as const;
