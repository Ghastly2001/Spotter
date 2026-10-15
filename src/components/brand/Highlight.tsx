"use client";

import { type ReactNode, useRef } from "react";
import { useSweepOnView } from "@/hooks/useSweepOnView";

export type HighlightProps = Readonly<{ children: ReactNode; delayMs?: number }>;

const DEFAULT_DELAY_MS = 150;

/** The brand's highlighter stroke. Renders highlighted; sweeps in again when scrolled into view. */
export function Highlight({ children, delayMs = DEFAULT_DELAY_MS }: HighlightProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useSweepOnView(ref, "is-pending", delayMs);

  return (
    <span ref={ref} className="marker-sweep">
      {children}
    </span>
  );
}
