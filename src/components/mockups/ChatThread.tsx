import type { ChatThread as ChatThreadData } from "@/content/chats";
import { EXAMPLE_GYM } from "@/content/exampleGym";
import { type ChatSize, WhatsAppChat } from "./WhatsAppChat";

export type ChatThreadProps = Readonly<{ thread: ChatThreadData; size?: ChatSize; className?: string }>;

/** Renders a scripted conversation between the example gym and a member. */
export function ChatThread({ thread, size, className }: ChatThreadProps) {
  return (
    <WhatsAppChat label={thread.label} size={size} className={className}>
      <WhatsAppChat.Header initials={EXAMPLE_GYM.initials} name={EXAMPLE_GYM.name} subtitle={thread.subtitle} />
      <WhatsAppChat.Messages>
        {thread.messages.map((message) =>
          message.kind === "notice" ? (
            <WhatsAppChat.Notice key={message.text}>{message.text}</WhatsAppChat.Notice>
          ) : (
            <WhatsAppChat.Bubble key={message.text} from={message.kind} time={message.time}>
              {message.text}
            </WhatsAppChat.Bubble>
          ),
        )}
      </WhatsAppChat.Messages>
    </WhatsAppChat>
  );
}
