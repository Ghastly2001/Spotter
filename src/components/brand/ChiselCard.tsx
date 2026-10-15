import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ChiselTone = "panel" | "navy" | "marker";
export type ChiselCut = "md" | "lg";
export type ChiselShadow = "none" | "soft";

export type ChiselCardProps = Readonly<{
  children: ReactNode;
  tone: ChiselTone;
  cut?: ChiselCut;
  shadow?: ChiselShadow;
  className?: string;
}>;

const toneClassNames: Readonly<Record<ChiselTone, string>> = {
  panel: "[--chisel-bg:var(--panel)] [--chisel-border:var(--rule)]",
  navy: "[--chisel-bg:var(--navy-2)] [--chisel-border:var(--on-navy-rule)] text-on-navy",
  marker: "[--chisel-bg:var(--marker)] [--chisel-border:var(--marker)] text-marker-ink",
};

const cutClassNames: Readonly<Record<ChiselCut, string>> = {
  md: "[--cut:var(--cut-md)]",
  lg: "[--cut:var(--cut-lg)]",
};

/** Offer boxes only (pricing, founding offer, win-back, sign-up). Product mockups stay rounded. */
export function ChiselCard({ children, tone, cut = "lg", shadow = "none", className }: ChiselCardProps) {
  return (
    <div
      className={cn(
        "chisel-card",
        toneClassNames[tone],
        cutClassNames[cut],
        shadow === "soft" && "drop-shadow-[0_20px_28px_var(--shadow)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
