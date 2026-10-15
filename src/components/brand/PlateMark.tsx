import { cn } from "@/lib/utils";

export type PlateMarkSize = "sm" | "md";
export type PlateMarkProps = Readonly<{ size?: PlateMarkSize }>;

/** Spotter's mark: a weight plate seen face-on. */
export function PlateMark({ size = "md" }: PlateMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block flex-none rounded-full bg-[radial-gradient(circle,var(--ink)_0_26%,var(--marker)_27%_100%)] shadow-[inset_0_0_0_2px_var(--ink)]",
        size === "md" ? "size-6" : "size-4",
      )}
    />
  );
}
