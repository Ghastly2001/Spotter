import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PanelProps = Readonly<{ children: ReactNode; className?: string; label: string }>;

/**
 * A product screen with the brand's chisel cut (top-left and bottom-right).
 * Mockups are pictures for assistive tech, so `label` describes what the screen shows.
 */
export function Panel({ children, className, label }: PanelProps) {
  return (
    <div role="img" aria-label={label} className="min-w-0 drop-shadow-[0_20px_28px_var(--shadow)]">
      <div
        className={cn(
          "chisel-card clip-chisel text-[0.9375rem] text-ink [--chisel-bg:var(--panel)] [--chisel-border:var(--rule)] [--cut:var(--cut-lg)]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
