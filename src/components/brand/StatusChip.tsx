import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cssVars } from "@/lib/cssVars";

export type StatusTone = "marker" | "loss" | "calm";

export type StatusChipProps = Readonly<{
  children: ReactNode;
  tone: StatusTone;
  /** Only for `marker`: when the highlighter swipe starts after page load. */
  swipeDelayMs?: number;
}>;

const toneClassNames: Readonly<Record<StatusTone, string>> = {
  marker: "chip-swipe text-marker-ink",
  loss: "text-loss shadow-[inset_0_0_0_1px_currentColor]",
  calm: "bg-wash text-ink-2",
};

export function StatusChip({ children, tone, swipeDelayMs }: StatusChipProps) {
  return (
    <b
      className={cn(
        "inline-block rounded-[4px] px-2 pt-[3px] pb-[2px] text-[0.8125rem] leading-[1.3] font-semibold",
        toneClassNames[tone],
      )}
      style={swipeDelayMs === undefined ? undefined : cssVars({ "--swipe-delay": `${swipeDelayMs}ms` })}
    >
      {children}
    </b>
  );
}
