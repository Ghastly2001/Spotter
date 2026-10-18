"use client";

import { useEffect, useState } from "react";

/** True once the page has scrolled more than `threshold()` pixels. Re-measured on every scroll and resize. */
export function useScrolled(threshold: () => number): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold());
    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [threshold]);

  return scrolled;
}
