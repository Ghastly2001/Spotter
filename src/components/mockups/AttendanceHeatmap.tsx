import { type AttendanceDay, type AttendancePattern, buildAttendanceGrid } from "@/lib/attendance";
import { cn } from "@/lib/utils";

export type AttendanceHeatmapProps = Readonly<{ pattern: AttendancePattern }>;

const dayClassNames: Readonly<Record<AttendanceDay, string>> = {
  visited: "bg-ink-2",
  skipped: "bg-wash shadow-[inset_0_0_0_1px_var(--rule)]",
  missed: "shadow-[inset_0_0_0_1.5px_var(--loss)]",
  future: "invisible",
};

/** Columns are weeks, rows are Monday to Sunday. */
export function AttendanceHeatmap({ pattern }: AttendanceHeatmapProps) {
  const days = buildAttendanceGrid(pattern);

  return (
    <div>
      <p className="mb-2 text-xs text-ink-3">
        Last {pattern.weeks} weeks. Each square is a day, filled when he came in.
      </p>
      <div className="grid max-w-[220px] grid-flow-col grid-rows-7 gap-[3px]" aria-hidden="true">
        {days.map((day, dayIndex) => (
          <i key={dayIndex} className={cn("aspect-square rounded-[3px]", dayClassNames[day])} />
        ))}
      </div>
    </div>
  );
}
