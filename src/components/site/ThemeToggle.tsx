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

/** Icon button for the header. */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const toggleTheme = useThemeToggle();
  return (
    <Button variant="outline" size="icon-lg" onClick={toggleTheme} className={cn("size-11 border-rule", className)}>
      <ThemeIcon />
      <ThemeLabel className="sr-only" />
    </Button>
  );
}

/** Full-width row with a visible label, for the mobile menu. */
export function ThemeToggleRow({ className }: ThemeToggleProps) {
  const toggleTheme = useThemeToggle();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn("flex w-full items-center gap-3 py-4 text-left text-lg font-semibold [&_svg]:size-5", className)}
    >
      <ThemeIcon />
      <ThemeLabel />
    </button>
  );
}
