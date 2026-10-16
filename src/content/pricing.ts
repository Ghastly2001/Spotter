export type BillingPeriod = "monthly" | "yearly";

export const PRICES = {
  monthly: 1499,
  yearly: 14990,
  founding: 999,
  extraBranch: 999,
} as const;

export const MONTHS_IN_YEAR = 12;

/** The founding offer: free setup and a free first month, then PRICES.founding for as long as they stay. */
export const FOUNDING_OFFER = {
  spots: 20,
} as const;

export const FOUNDING_NAME = `Founding ${FOUNDING_OFFER.spots}`;

export const INCLUDED_FEATURES: ReadonlyArray<string> = [
  "Unlimited members",
  "Unlimited staff logins",
  "WhatsApp front desk",
  "Slipping-member alerts",
  "UPI AutoPay renewals",
  "QR and tablet check-in",
  "PT and commissions",
  "GST invoices",
  "Member app",
  "Register import, done by us",
];

export type PricingExtra = Readonly<{ name: string; detail: string }>;

export const PRICING_EXTRAS: ReadonlyArray<PricingExtra> = [
  { name: "Another branch", detail: "₹999 a month per branch." },
  {
    name: "WhatsApp message fees",
    detail:
      "Meta charges these per message. We pass them on at cost and list them on your bill. For a 300-member gym, expect roughly ₹200 to ₹500 a month.",
  },
  { name: "Biometric machine", detail: "Connecting one you already own is free." },
];

export type ComparisonRow = Readonly<{ topic: string; register: string; typicalSoftware: string; spotter: string }>;

export const COMPARISON_COLUMNS = {
  register: "Register and WhatsApp",
  typicalSoftware: "Typical gym software",
  spotter: "Spotter",
} as const;

export const COMPARISON_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    topic: "Who notices a member slipping",
    register: "You, if you happen to remember",
    typicalSoftware: "A report, if you open it",
    spotter: "Spotter, the same week, with a message ready",
  },
  { topic: "Renewals", register: "You chase each one", typicalSoftware: "Reminder SMS", spotter: "UPI AutoPay. Reminders only when a payment fails" },
  { topic: "A lead messages at 11 pm", register: "Seen next morning", typicalSoftware: "Seen next morning", spotter: "Answered in a minute, trial booked" },
  {
    topic: "Check-in",
    register: "Signature in the register",
    typicalSoftware: "Biometric machine, ₹12,000 or more",
    spotter: "QR code or an old tablet. Machine optional",
  },
  { topic: "Pricing", register: "Free, but you lose members", typicalSoftware: "Tiers, member caps, per-login fees", spotter: "One plan per gym" },
  { topic: "Getting started", register: "Nothing to set up", typicalSoftware: "You type in every member", spotter: "Send a photo of your register" },
];
