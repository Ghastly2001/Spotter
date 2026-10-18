"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { usePastHero } from "@/hooks/usePastHero";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD_PX = 24;
const HEADER_HEIGHT_PX = 68;

export type HeaderShellProps = Readonly<{ children: ReactNode }>;

/** Home: clear at the top, dark glass while scrolling over the hero, paper frost below it. Other pages: paper frost. */
export function HeaderShell({ children }: HeaderShellProps) {
  const pathname = usePathname();
  const scrolled = useScrolled(SCROLL_THRESHOLD_PX);
  const pastHero = usePastHero(HEADER_HEIGHT_PX, pathname);
  const onHome = pathname === "/";
  const overHero = onHome && !scrolled;
  const glassOverHero = onHome && scrolled && !pastHero;

  return (
    <header
      className={cn(
        "sticky top-[env(safe-area-inset-top,0px)] z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-[-1px] after:h-px after:bg-gradient-to-r after:from-transparent after:via-marker/60 after:to-transparent after:transition-opacity after:duration-300 after:content-['']",
        overHero && "on-media border-transparent bg-transparent after:opacity-0",
        glassOverHero && "on-media border-on-navy-rule bg-navy/40 backdrop-blur-xl backdrop-saturate-150 after:opacity-0",
        !overHero && !glassOverHero && "border-rule/70 bg-paper/80 backdrop-blur-xl backdrop-saturate-150",
      )}
    >
      {children}
    </header>
  );
}
