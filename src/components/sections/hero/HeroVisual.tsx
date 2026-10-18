import { CheckCheckIcon } from "lucide-react";
import { type ChatMessage, WIN_BACK_CHAT } from "@/content/chats";
import { EXAMPLE_GYM } from "@/content/exampleGym";
import { cn } from "@/lib/utils";

type SpokenMessage = Exclude<ChatMessage, { kind: "notice" }>;

const BUBBLE = "clip-chisel max-w-[90%] px-3.5 pt-2.5 pb-2 text-[0.9375rem] leading-snug [--cut:var(--cut-sm)]";

/** The win-back nudge as a glass card, so the footage stays visible around and through it. */
export function HeroVisual() {
  const messages = WIN_BACK_CHAT.messages.filter((message): message is SpokenMessage => message.kind !== "notice");

  return (
    <div
      role="img"
      aria-label={WIN_BACK_CHAT.label}
      className="glass grid w-[min(320px,100%)] justify-self-end gap-2.5 p-4 text-on-navy [--cut:var(--cut-lg)]"
    >
      <div className="mb-1 flex items-center gap-2.5 border-b border-on-navy-rule pb-3">
        <span className="grid size-9 flex-none place-items-center rounded-full bg-marker text-xs font-bold text-marker-ink">
          {EXAMPLE_GYM.initials}
        </span>
        <div className="min-w-0 leading-tight">
          <b className="block truncate text-[0.9375rem] font-semibold">{EXAMPLE_GYM.name}</b>
          <small className="text-xs text-on-navy-muted">WhatsApp · sent by Spotter</small>
        </div>
      </div>
      {messages.map((message) => (
        <p
          key={message.text}
          className={cn(
            BUBBLE,
            message.kind === "gym"
              ? "justify-self-end bg-marker text-marker-ink"
              : "justify-self-start bg-on-navy/15 text-on-navy",
          )}
        >
          {message.text}
          <span className="mt-1 flex items-center justify-end gap-1 text-[0.6875rem] opacity-70">
            {message.time}
            {message.kind === "gym" && <CheckCheckIcon aria-hidden className="size-3.5" />}
          </span>
        </p>
      ))}
    </div>
  );
}
