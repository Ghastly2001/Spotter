"use client";

import { type ReactNode, useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export type TimelineListProps = Readonly<{ children: ReactNode }>;

/** An ordered list with a rail that fills, and markers that light up, as the reader scrolls past. */
export function TimelineList({ children }: TimelineListProps) {
  const ref = useRef<HTMLOListElement>(null);
  useScrollProgress(ref);

  return (
    <ol
      ref={ref}
      className="relative m-0 list-none py-0 pr-0 pl-9 before:absolute before:top-0 before:bottom-0 before:left-[7px] before:w-0.5 before:rounded-[1px] before:bg-rule before:content-[''] after:absolute after:top-0 after:left-[7px] after:h-[var(--progress,0%)] after:w-0.5 after:rounded-[1px] after:bg-ink after:content-['']"
    >
      {children}
    </ol>
  );
}
