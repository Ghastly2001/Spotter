import { TiltOnScroll } from "@/components/brand/TiltOnScroll";
import { ChatThread } from "@/components/mockups/ChatThread";
import { SlippingMembersPanel } from "@/components/mockups/SlippingMembersPanel";
import { WIN_BACK_CHAT } from "@/content/chats";

/** The member list, with the WhatsApp nudge it sent overlapping its bottom-right corner. */
export function HeroVisual() {
  return (
    <div className="glow-warm relative isolate min-w-0 min-[961px]:pb-[150px]">
      <TiltOnScroll>
        <SlippingMembersPanel />
      </TiltOnScroll>
      <ChatThread
        thread={WIN_BACK_CHAT}
        className="relative z-10 -mt-9 ml-auto w-[min(320px,88%)] min-[961px]:absolute min-[961px]:right-[-8px] min-[961px]:bottom-0 min-[961px]:mt-0 min-[961px]:w-[min(290px,70%)] min-[1301px]:right-[-28px]"
      />
    </div>
  );
}
