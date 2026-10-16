"use client";

import { useEffect, useState } from "react";

/* A section counts as current once its heading passes the top third of the screen. */
const READING_BAND = "-25% 0px -65% 0px";

/** Returns the id of the section the reader is currently in. */
export function useActiveSection(ids: ReadonlyArray<string>): string | undefined {
  const [activeId, setActiveId] = useState<string | undefined>(ids[0]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: READING_BAND },
    );
    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
