import type { CSSProperties } from "react";

export type CssVariables = Readonly<Record<`--${string}`, string | number>>;

/** Typed inline style for CSS custom properties, e.g. `cssVars({ "--v": 4 })`. */
export function cssVars(variables: CssVariables): CSSProperties {
  return variables as CSSProperties;
}
