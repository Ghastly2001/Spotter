import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PanelProps = Readonly<{ children: ReactNode; className?: string; label: string }>;

/**
 * A product screen. Rounded on purpose: it should read as the real app, not as brand decoration.
 * Mockups are pictures for assistive tech, so `label` describes what the screen shows.
 */
export function Panel({ children, className, label }: PanelProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("min-w-0 rounded-2xl border border-rule bg-panel text-[0.9375rem] shadow-panel", className)}
    >
      {children}
    </div>
  );
}
