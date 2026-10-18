"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { cn } from "@/lib/utils";

/* The theme is only known in the browser, so both states are rendered and CSS shows the right one. */
function ThemeIcon() {
  return (
    <>
      <MoonIcon aria-hidden className="dark:hidden" />
      <SunIcon aria-hidden className="hidden dark:block" />
    </>
  );
}

function ThemeLabel({ className }: Readonly<{ className?: string }>) {
  return (
    <>
      <span className={cn("dark:hidden", className)}>Switch to dark mode</span>
      <span className={cn("hidden dark:inline", className)}>Switch to light mode</span>
    </>
  );
}

export type ThemeToggleProps = Readonly<Pick<ComponentProps<"button">, "className">>;

/** Small icon-only button. */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const toggleTheme = useThemeToggle();
  return (
    <Button variant="ghost" size="icon-sm" onClick={toggleTheme} className={cn("text-ink-2 hover:text-ink", className)}>
      <ThemeIcon />
      <ThemeLabel className="sr-only" />
    </Button>
  );
}
