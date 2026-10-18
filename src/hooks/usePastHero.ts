"use client";

import { useEffect, useState } from "react";

const HERO_SELECTOR = "[data-hero]";

/** True once the hero has scrolled up under the header. Stays false on pages without a hero. */
export function usePastHero(headerHeight: number, route: string): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(HERO_SELECTOR);
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setPast(!entry.isIntersecting), {
      rootMargin: `-${headerHeight}px 0px 0px 0px`,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [headerHeight, route]);

  return past;
}
