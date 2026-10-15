export type FeaturePoint = Readonly<{ title: string; body: string }>;

export const FRONT_DESK_POINTS: ReadonlyArray<FeaturePoint> = [
  { title: "Talks the way your members do.", body: "Hindi, English, Marathi or Hinglish, matched to how they wrote in." },
  { title: "Books into real slots.", body: "Trials go into your actual batches, so nobody turns up to a full class." },
  { title: "Knows when to hand over.", body: "Complaints, refunds and anything unusual come straight to you." },
];

export const SLIPPING_POINTS: ReadonlyArray<FeaturePoint> = [
  {
    title: "Signals, not guesses.",
    body: "Fewer visits than usual, missed PT sessions, a failed payment, a plan about to end.",
  },
  { title: "Messages in your voice.", body: "You approve the wording once. Spotter sends it at the right moment." },
  {
    title: "A call list for your team.",
    body: "Some members need a person, not a message. Your front desk sees who to call today.",
  },
];

export const AUTOPAY_POINTS: ReadonlyArray<FeaturePoint> = [
  { title: "No more chasing at the counter.", body: "Your staff stop asking for fees in front of other members." },
  {
    title: "Failed payments get a second try.",
    body: "Spotter retries, messages the member, and tells you only if it still fails.",
  },
  { title: "Cash still works.", body: "Members who want to pay at the desk can. It all lands in the same ledger." },
];

export type EverydayFeature = Readonly<{ title: string; body: string }>;

export const EVERYDAY_FEATURES: ReadonlyArray<EverydayFeature> = [
  { title: "Plans and memberships", body: "Monthly, quarterly, couple and family plans. Freeze, extend or transfer in two taps." },
  { title: "GST invoices", body: "Numbered invoices with your GSTIN, sent on WhatsApp the moment someone pays." },
  { title: "Daily cash book", body: "Cash, UPI and card in one place, closed at the end of each day." },
  { title: "Reports your CA can use", body: "Sales and GST summaries exported to Excel at month end." },
  { title: "Batches and classes", body: "Capacity per batch, waitlists, and trainer schedules." },
  { title: "Staff and roles", body: "The front desk sees what it needs. Only you see the money." },
  { title: "More than one branch", body: "Members can train at any branch. You see every branch on one screen." },
  { title: "Member app", body: "Optional for members. Everything important also works on WhatsApp." },
];

export type Audience = Readonly<{ name: string; needs: string }>;

export const AUDIENCES: ReadonlyArray<Audience> = [
  { name: "Gyms", needs: "Renewals, PT packages, and knowing how crowded peak hour is." },
  { name: "Yoga studios", needs: "Batch timings, monthly packs, and drop-in trial classes." },
  { name: "Martial arts and MMA", needs: "Batches by age and belt, with updates sent to parents." },
  { name: "Dance and Zumba", needs: "Batch capacity, drop-in passes, and showcase fees." },
  { name: "Swimming", needs: "Seasonal plans, lane slots, and the summer-camp rush." },
  { name: "Badminton and pickleball", needs: "Court bookings and coaching packages in one place." },
];
