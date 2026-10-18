export type Faq = Readonly<{ id: string; question: string; answer: string }>;

export const FAQS: ReadonlyArray<Faq> = [
  {
    id: "start",
    question: "When can my gym start?",
    answer:
      "We’re bringing on founding gyms in small batches so each one gets set up properly. Join the list and we’ll message you on WhatsApp with your start date.",
  },
  {
    id: "app",
    question: "Do my members need to download an app?",
    answer:
      "No. Check-in works with a QR code, and reminders, receipts and renewals happen on WhatsApp and UPI. The member app is there for people who want it.",
  },
  {
    id: "consent",
    question: "Will Spotter message my members without asking me?",
    answer:
      "Only with wording you’ve approved. You choose which messages go out on their own and which wait for your OK. Anything sensitive, like a complaint or a refund request, comes to you.",
  },
  {
    id: "whatsapp-cost",
    question: "What does WhatsApp cost me?",
    answer:
      "Meta charges a small fee per message to business accounts. We pass it on at cost with no markup, and show it line by line on your bill.",
  },
  {
    id: "biometric",
    question: "I already have a biometric machine.",
    answer: "Keep it. Spotter connects to the machines most Indian gyms use, so attendance flows in on its own.",
  },
  {
    id: "data",
    question: "Who owns my data?",
    answer:
      "You do. It’s stored on servers in India, and you can export everything to Excel whenever you like, including the day you leave.",
  },
  { id: "contract", question: "Is there a contract?", answer: "No. Pay monthly and stop when you want. The yearly plan is optional." },
];

export const FOUNDING_PERKS: ReadonlyArray<string> = [
  "Your first month is free.",
  "Then ₹999 a month, locked for as long as you stay.",
  "We import your register and set everything up, free.",
  "A direct WhatsApp line to the people building Spotter.",
];

export const GYM_SIZES: ReadonlyArray<string> = ["Under 100", "100 to 300", "300 to 700", "More than 700"];
export const DEFAULT_GYM_SIZE = "100 to 300";
