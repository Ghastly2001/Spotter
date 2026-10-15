export type ImportStep = Readonly<{ title: string; body: string }>;

export const IMPORT_STEPS: ReadonlyArray<ImportStep> = [
  { title: "Send it on WhatsApp.", body: "Register pages, an Excel sheet, or an export from your current software." },
  { title: "Check what we found.", body: "Spotter lists every member it read. Anything unclear is marked for you to fix." },
  {
    title: "Go live.",
    body: "Members get a welcome message from your gym, and your morning summary starts the next day.",
  },
];

export type HandwrittenRow = Readonly<{ serial: string; name: string; plan: string; fees: string; date: string; lang?: "hi" }>;

export const REGISTER_HEADINGS = { serial: "Sr.", name: "Name", plan: "Plan", fees: "Fees", date: "Date" } as const;

export const HANDWRITTEN_ROWS: ReadonlyArray<HandwrittenRow> = [
  { serial: "112", name: "Aarav Mehta", plan: "1 month", fees: "1500", date: "2/10" },
  { serial: "113", name: "Sneha K.", plan: "3 mahine", fees: "4000", date: "5/9" },
  { serial: "114", name: "इमरान शेख", plan: "1 month", fees: "1500", date: "28/9", lang: "hi" },
  { serial: "115", name: "Kavya Reddy", plan: "6 month", fees: "5500", date: "1/10" },
];

export const HANDWRITTEN_NOTE = { marked: "baki 2000", rest: "15/10 tak" } as const;

export type ParsedStatus = "paid" | "check" | "due";

export type ParsedMember = Readonly<{ name: string; status: ParsedStatus; statusLabel: string; detail: string }>;

export const PARSED_MEMBERS: ReadonlyArray<ParsedMember> = [
  { name: "Aarav Mehta", status: "paid", statusLabel: "Paid", detail: "1 month, ends 1 Nov" },
  { name: "Sneha K.", status: "check", statusLabel: "Check name", detail: "3 months, ends 4 Dec" },
  { name: "Imran Shaikh", status: "paid", statusLabel: "Paid", detail: "Read from Hindi. 1 month, ends 27 Oct" },
  { name: "Kavya Reddy", status: "due", statusLabel: "₹2,000 due", detail: "6 months. Promised by 15 Oct" },
];
