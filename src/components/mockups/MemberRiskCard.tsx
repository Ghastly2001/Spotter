import { Panel } from "@/components/brand/Panel";
import { StatusChip } from "@/components/brand/StatusChip";
import { EXAMPLE_GYM } from "@/content/exampleGym";
import { AT_RISK_MEMBER } from "@/content/operations";
import { cn } from "@/lib/utils";
import { AttendanceHeatmap } from "./AttendanceHeatmap";

const heatmapPattern = {
  today: EXAMPLE_GYM.today,
  weeks: AT_RISK_MEMBER.heatmapWeeks,
  usualWeekdays: AT_RISK_MEMBER.usualWeekdays,
  quietDays: AT_RISK_MEMBER.quietDays,
  skippedDayIndexes: AT_RISK_MEMBER.skippedDayIndexes,
};

const MINI_BUTTON = "inline-block rounded-lg px-3.5 pt-[11px] pb-[9px] text-sm leading-none font-semibold";

export function MemberRiskCard() {
  const member = AT_RISK_MEMBER;

  return (
    <Panel
      label="Member card for Imran Shaikh: usually 3 visits a week, none in the last 12 days, replied about a knee injury, with an option to approve a 14-day freeze"
      className="grid gap-5 p-[22px]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl">{member.name}</h3>
          <p className="mt-1 text-[0.8125rem] text-ink-3">{member.since}</p>
        </div>
        <StatusChip tone="loss">High risk</StatusChip>
      </div>

      <AttendanceHeatmap pattern={heatmapPattern} />

      <dl className="m-0 grid grid-cols-2 gap-x-5">
        {member.signals.map((signal) => (
          <div key={signal.label} className="border-t border-rule py-2.5">
            <dt className="text-xs text-ink-3">{signal.label}</dt>
            <dd className={cn("m-0 font-semibold tabular-nums", signal.alarming && "text-loss")}>{signal.value}</dd>
          </div>
        ))}
      </dl>

      <div className="rounded-lg bg-wash px-3.5 py-3">
        <small className="mb-0.5 block text-xs text-ink-3">He replied at {member.reply.time}</small>
        {member.reply.text}
      </div>

      <div className="flex flex-wrap gap-2.5">
        <span className={cn(MINI_BUTTON, "bg-marker text-marker-ink")}>{member.suggestedActions.primary}</span>
        <span className={cn(MINI_BUTTON, "text-ink shadow-[inset_0_0_0_1px_var(--rule)]")}>
          {member.suggestedActions.secondary}
        </span>
      </div>
    </Panel>
  );
}
