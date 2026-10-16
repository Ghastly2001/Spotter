"use client";

import { useCallback, useEffect } from "react";
import { DARK_SCHEME_QUERY, isTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function readSavedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(saved) ? saved : null;
  } catch {
    return null;
  }
}

function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage blocked (private mode): the choice still applies for this visit.
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

/**
 * Returns a function that flips between light and dark and remembers the choice.
 * Until the visitor picks one, the page keeps following the device setting.
 */
export function useThemeToggle() {
  useEffect(() => {
    const query = window.matchMedia(DARK_SCHEME_QUERY);
    const followDevice = () => {
      if (readSavedTheme() === null) applyTheme(query.matches ? "dark" : "light");
    };
    query.addEventListener("change", followDevice);
    return () => query.removeEventListener("change", followDevice);
  }, []);

  return useCallback(() => {
    const next: Theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    saveTheme(next);
  }, []);
}
