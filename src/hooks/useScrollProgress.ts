"use client";

import { type RefObject, useEffect } from "react";

const READING_LINE = 0.55;
const MARKER_OFFSET_PX = 40;

/**
 * Tracks how far the reading line (just below mid-screen) has travelled through a list.
 * Writes `--progress` on the list and `data-reached` on each child the line has passed.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const items = Array.from(list.children).filter((child): child is HTMLElement => child instanceof HTMLElement);

    const update = () => {
      const readingLine = window.innerHeight * READING_LINE;
      const bounds = list.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (readingLine - bounds.top) / bounds.height));
      list.style.setProperty("--progress", `${(progress * 100).toFixed(1)}%`);
      for (const item of items) {
        item.dataset.reached = String(item.getBoundingClientRect().top + MARKER_OFFSET_PX < readingLine);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref]);
}
