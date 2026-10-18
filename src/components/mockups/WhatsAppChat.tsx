import { CheckCheckIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ChiselCard } from "@/components/brand/ChiselCard";
import { cn } from "@/lib/utils";

export type ChatSize = "md" | "lg";
export type ChatSender = "member" | "gym";

export type WhatsAppChatProps = Readonly<{ children: ReactNode; label: string; size?: ChatSize; className?: string }>;
export type ChatHeaderProps = Readonly<{ initials: string; name: string; subtitle: string }>;
export type ChatBubbleProps = Readonly<{ children: ReactNode; from: ChatSender; time: string }>;
export type ChatSlotProps = Readonly<{ children: ReactNode }>;

const BUBBLE_CUT = "clip-chisel [--cut:var(--cut-sm)]";
const NOTICE_TONE =
  "[--chisel-bg:color-mix(in_oklab,var(--marker)_14%,var(--panel))] [--chisel-border:color-mix(in_oklab,var(--marker)_70%,transparent)]";

/** A product screen in the brand's own colours: it follows the theme like the other mockups, and mint marks what the gym sends. */
function ChatRoot({ children, label, size = "md", className }: WhatsAppChatProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("min-w-0", size === "md" ? "text-sm" : "w-full max-w-[440px] text-[0.9375rem]", className)}
    >
      <ChiselCard tone="panel" cut="lg" shadow="soft" className="overflow-hidden">
        {children}
      </ChiselCard>
    </div>
  );
}

function ChatHeader({ initials, name, subtitle }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-3 border-b border-rule px-4 py-3.5">
      <span className="grid size-10 flex-none place-items-center rounded-full bg-marker text-sm font-bold text-marker-ink">
        {initials}
      </span>
      <div className="min-w-0">
        <b className="block truncate text-base leading-tight font-semibold">{name}</b>
        <small className="flex items-center gap-1.5 text-xs leading-snug text-ink-3">
          <span aria-hidden className="size-1.5 rounded-full bg-marker" />
          {subtitle}
        </small>
      </div>
    </div>
  );
}

function ChatMessages({ children }: ChatSlotProps) {
  return <div className="flex flex-col gap-2 bg-wash px-3.5 pt-4 pb-5">{children}</div>;
}

function ChatBubble({ children, from, time }: ChatBubbleProps) {
  const isGym = from === "gym";
  return (
    <p
      className={cn(
        BUBBLE_CUT,
        "m-0 max-w-[88%] px-3.5 pt-2.5 pb-2 leading-[1.45] break-words",
        isGym ? "self-end bg-marker text-marker-ink" : "self-start bg-panel text-ink",
      )}
    >
      {children}
      <time className="mt-1 flex items-center justify-end gap-1 text-[0.6875rem] opacity-70">
        {time}
        {isGym && <CheckCheckIcon aria-hidden className="size-3.5" />}
      </time>
    </p>
  );
}

function ChatNotice({ children }: ChatSlotProps) {
  return (
    <ChiselCard
      tone="panel"
      cut="md"
      className={cn("mt-1 max-w-[94%] self-center px-3.5 py-2 text-center text-xs text-ink", NOTICE_TONE)}
    >
      {children}
    </ChiselCard>
  );
}

export const WhatsAppChat = Object.assign(ChatRoot, {
  Header: ChatHeader,
  Messages: ChatMessages,
  Bubble: ChatBubble,
  Notice: ChatNotice,
});
