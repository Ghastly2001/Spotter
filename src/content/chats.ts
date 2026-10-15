export type ChatMessage =
  | Readonly<{ kind: "member" | "gym"; text: string; time: string }>
  | Readonly<{ kind: "notice"; text: string }>;

export type ChatThread = Readonly<{ subtitle: string; label: string; messages: ReadonlyArray<ChatMessage> }>;

export const WIN_BACK_CHAT: ChatThread = {
  subtitle: "Business account",
  label: "WhatsApp chat: the gym checks in with Sneha, and she replies that she will come back tomorrow",
  messages: [
    {
      kind: "gym",
      text: "Hi Sneha, we haven’t seen you since the 6th. All okay? Your 7 am batch still has your spot.",
      time: "6:30 pm",
    },
    { kind: "member", text: "Haan, office mein deadline thi. Kal se pakka aati hoon", time: "6:41 pm" },
  ],
};

export const LATE_NIGHT_LEAD_CHAT: ChatThread = {
  subtitle: "Replies by Spotter",
  label: "WhatsApp chat at 11:38 pm: a lead asks about fees and the ladies batch, and Spotter books her a free trial",
  messages: [
    { kind: "member", text: "Hi, fees kitni hai? Ladies batch hai kya?", time: "11:38 pm" },
    {
      kind: "gym",
      text: "Hi Priya! Monthly is ₹1,500 and 3 months is ₹4,000. The ladies batch runs 10 to 11 am and 5 to 6 pm, Monday to Saturday. Want to try a free class first?",
      time: "11:38 pm",
    },
    { kind: "member", text: "Saturday morning ho jayega?", time: "11:39 pm" },
    {
      kind: "gym",
      text: "Booked. Saturday 17 Oct, 10 am, ladies batch. Ask for Neha at the desk. We’re next to the Kothrud Depot bus stop.",
      time: "11:40 pm",
    },
    { kind: "notice", text: "Lead added to your pipeline. Trial on Sat, 17 Oct at 10:00 am." },
  ],
};
