export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "spotter-theme";
export const DARK_SCHEME_QUERY = "(prefers-color-scheme: dark)";

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

/**
 * Runs in <head> before the first paint: a saved choice wins, otherwise the device setting.
 * Sets `data-theme` on <html>, which the colour tokens in globals.css key off.
 */
export const THEME_INIT_SCRIPT = `(function(){var t=null;try{t=localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia("${DARK_SCHEME_QUERY}").matches?"dark":"light";document.documentElement.dataset.theme=t})()`;
