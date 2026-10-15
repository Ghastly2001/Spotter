"use client";

import { type RefObject, useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export type ScrollTilt = Readonly<{ maxDegrees: number; settleDistancePx: number }>;

/** Writes `--tilt` on the element: `maxDegrees` at the top of the page, 0 once scrolled `settleDistancePx`. */
export function useScrollTilt(ref: RefObject<HTMLElement | null>, { maxDegrees, settleDistancePx }: ScrollTilt) {
  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;

    const update = () => {
      const remaining = Math.max(0, 1 - window.scrollY / settleDistancePx);
      element.style.setProperty("--tilt", `${(remaining * maxDegrees).toFixed(2)}deg`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [ref, maxDegrees, settleDistancePx]);
}
