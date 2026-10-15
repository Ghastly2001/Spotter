export type AttendanceDay = "visited" | "skipped" | "missed" | "future";

export type AttendancePattern = Readonly<{
  today: Date;
  weeks: number;
  usualWeekdays: ReadonlyArray<number>;
  quietDays: number;
  skippedDayIndexes: ReadonlySet<number>;
}>;

const DAYS_IN_WEEK = 7;
const MS_PER_DAY = 86_400_000;

function mondayOfWeek(date: Date): Date {
  const monday = new Date(date);
  const daysSinceMonday = (date.getDay() + DAYS_IN_WEEK - 1) % DAYS_IN_WEEK;
  monday.setDate(date.getDate() - daysSinceMonday);
  return monday;
}

/** Days in column order (week by week, Monday to Sunday) for a heatmap of one member's visits. */
export function buildAttendanceGrid(pattern: AttendancePattern): ReadonlyArray<AttendanceDay> {
  const firstMonday = mondayOfWeek(pattern.today);
  firstMonday.setDate(firstMonday.getDate() - (pattern.weeks - 1) * DAYS_IN_WEEK);

  return Array.from({ length: pattern.weeks * DAYS_IN_WEEK }, (_, dayIndex) => {
    const date = new Date(firstMonday);
    date.setDate(firstMonday.getDate() + dayIndex);
    const daysAgo = Math.round((pattern.today.getTime() - date.getTime()) / MS_PER_DAY);
    const weekday = dayIndex % DAYS_IN_WEEK;

    if (daysAgo < 0) return "future";
    if (!pattern.usualWeekdays.includes(weekday)) return "skipped";
    if (daysAgo <= pattern.quietDays) return "missed";
    return pattern.skippedDayIndexes.has(dayIndex) ? "skipped" : "visited";
  });
}
