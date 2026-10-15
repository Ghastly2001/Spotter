import { cn } from "@/lib/utils";
import { cssVars } from "@/lib/cssVars";
import { LOW_WEEKLY_VISITS, MAX_WEEKLY_VISITS } from "@/content/exampleGym";

export type WeeklyVisitBarsProps = Readonly<{ visits: ReadonlyArray<number> }>;

/** One bar per week; weeks at or below the low mark turn red. */
export function WeeklyVisitBars({ visits }: WeeklyVisitBarsProps) {
  return (
    <span className="flex h-[22px] items-end gap-[3px]" aria-hidden="true">
      {visits.map((count, weekIndex) => (
        <i
          key={weekIndex}
          style={cssVars({ "--share": Math.min(count, MAX_WEEKLY_VISITS) / MAX_WEEKLY_VISITS })}
          className={cn(
            "h-[calc(var(--share)*100%)] min-h-[2px] max-w-[7px] flex-1 rounded-[1px]",
            count <= LOW_WEEKLY_VISITS ? "bg-loss" : "bg-ink-3/50",
          )}
        />
      ))}
    </span>
  );
}
