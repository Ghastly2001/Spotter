"use client";

import { type ReactNode, useRef } from "react";
import { useScrollTilt } from "@/hooks/useScrollTilt";

export type TiltOnScrollProps = Readonly<{ children: ReactNode }>;

const HERO_TILT = { maxDegrees: 6, settleDistancePx: 420 } as const;

/** Leans its content back slightly at the top of the page and settles it flat as you scroll. */
export function TiltOnScroll({ children }: TiltOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollTilt(ref, HERO_TILT);

  return (
    <div ref={ref} className="origin-bottom [transform:perspective(1600px)_rotateX(var(--tilt,0deg))]">
      {children}
    </div>
  );
}
