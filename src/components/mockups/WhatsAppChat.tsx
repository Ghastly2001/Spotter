import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ChatSize = "md" | "lg";
export type ChatSender = "member" | "gym";

export type WhatsAppChatProps = Readonly<{ children: ReactNode; label: string; size?: ChatSize; className?: string }>;
export type ChatHeaderProps = Readonly<{ initials: string; name: string; subtitle: string }>;
export type ChatBubbleProps = Readonly<{ children: ReactNode; from: ChatSender; time: string }>;
export type ChatSlotProps = Readonly<{ children: ReactNode }>;

function ChatRoot({ children, label, size = "md", className }: WhatsAppChatProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "min-w-0 overflow-hidden rounded-2xl bg-wa-bg text-wa-ink shadow-chat",
        size === "md" ? "text-sm" : "w-full max-w-[440px] text-[0.9375rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ChatHeader({ initials, name, subtitle }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-2.5 bg-wa-head px-3.5 py-2.5 text-wa-head-ink">
      <span className="grid size-[34px] flex-none place-items-center rounded-full bg-marker text-xs font-bold text-marker-ink">
        {initials}
      </span>
      <div>
        <b className="block text-[0.9375rem] leading-tight font-semibold">{name}</b>
        <small className="block text-xs leading-snug text-wa-meta">{subtitle}</small>
      </div>
    </div>
  );
}

function ChatMessages({ children }: ChatSlotProps) {
  return <div className="flex flex-col gap-1.5 px-3 pt-3.5 pb-4">{children}</div>;
}

function ChatBubble({ children, from, time }: ChatBubbleProps) {
  return (
    <p
      className={cn(
        "max-w-[86%] rounded-lg px-[9px] pt-1.5 pb-[5px] leading-[1.42] break-words shadow-bubble",
        from === "member" ? "self-start rounded-tl-[2px] bg-wa-in" : "self-end rounded-tr-[2px] bg-wa-out",
      )}
    >
      {children}
      <time className="mt-px block text-right text-[0.6875rem] text-wa-meta">{time}</time>
    </p>
  );
}

function ChatNotice({ children }: ChatSlotProps) {
  return (
    <p className="max-w-[92%] self-center rounded-md bg-wa-sys px-2.5 py-1.5 text-center text-xs text-wa-sys-ink">
      {children}
    </p>
  );
}

export const WhatsAppChat = Object.assign(ChatRoot, {
  Header: ChatHeader,
  Messages: ChatMessages,
  Bubble: ChatBubble,
  Notice: ChatNotice,
});
