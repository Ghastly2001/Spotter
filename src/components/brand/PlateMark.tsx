import { cn } from "@/lib/utils";

export type PlateMarkSize = "sm" | "md" | "display";
export type PlateMarkProps = Readonly<{ size?: PlateMarkSize }>;

/** Spotter's mark: a weight plate seen face-on. */
export function PlateMark({ size = "md" }: PlateMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block flex-none rounded-full bg-[radial-gradient(circle,var(--ink)_0_26%,var(--marker)_27%_100%)]",
        size === "display" ? "size-[0.78em] shadow-[inset_0_0_0_0.035em_var(--ink)]" : "shadow-[inset_0_0_0_2px_var(--ink)]",
        size === "md" && "size-6",
        size === "sm" && "size-4",
      )}
    />
  );
}
