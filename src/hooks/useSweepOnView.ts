"use client";

import { type RefObject, useEffect } from "react";
import { prefersReducedMotion, supportsInViewTracking } from "@/lib/motion";

const REVEAL_MARGIN = "0px 0px -18% 0px";

/**
 * Elements render fully highlighted (complete without JavaScript). Once mounted, the
 * pending class is added and removed again when the element scrolls into view, replaying the sweep.
 */
export function useSweepOnView(ref: RefObject<HTMLElement | null>, pendingClassName: string, delayMs: number) {
  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion() || !supportsInViewTracking()) return;

    let timer: number | undefined;
    element.classList.add(pendingClassName);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        timer = window.setTimeout(() => element.classList.remove(pendingClassName), delayMs);
      },
      { rootMargin: REVEAL_MARGIN },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      element.classList.remove(pendingClassName);
    };
  }, [ref, pendingClassName, delayMs]);
}
