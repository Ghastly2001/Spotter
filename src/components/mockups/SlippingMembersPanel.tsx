import { Panel } from "@/components/brand/Panel";
import { PlateMark } from "@/components/brand/PlateMark";
import { StatusChip } from "@/components/brand/StatusChip";
import { EXAMPLE_GYM, SLIPPING_MEMBERS, SLIPPING_SUMMARY } from "@/content/exampleGym";
import { formatRupees } from "@/lib/format";
import { WeeklyVisitBars } from "./WeeklyVisitBars";

const ROW_GRID =
  "grid grid-cols-[minmax(0,1.25fr)_48px_minmax(0,1.25fr)] items-center gap-2.5 border-t border-rule px-3.5 py-[11px] sm:grid-cols-[minmax(0,1.45fr)_60px_minmax(0,0.95fr)_minmax(0,0.75fr)_minmax(0,1.3fr)] sm:gap-3 sm:px-[18px]";
const WIDE_ONLY = "hidden sm:block";

export function SlippingMembersPanel() {
  return (
    <Panel
      label="Spotter screen listing members whose visits are falling this week, with the action taken for each"
      className="overflow-hidden"
    >
      <div className="flex items-center justify-between gap-3 border-b border-rule bg-wash px-[18px] py-2.5 text-[0.8125rem] text-ink-3">
        <span className="inline-flex items-center gap-2 font-semibold text-ink-2">
          <PlateMark size="sm" />
          {EXAMPLE_GYM.name}, {EXAMPLE_GYM.area}
        </span>
        <span>{EXAMPLE_GYM.todayLabel}</span>
      </div>

      <div className="flex items-start justify-between gap-4 px-[18px] pt-[18px] pb-3.5">
        <div>
          <h3 className="text-[1.4rem]">Slipping this week</h3>
          <p className="mt-1 text-[0.8125rem] text-ink-3">Visits falling against each member’s own normal</p>
        </div>
        <span className="rounded-lg bg-ink px-[11px] pt-[7px] pb-1 font-display text-2xl leading-none font-bold text-paper tabular-nums">
          {SLIPPING_SUMMARY.totalSlipping}
        </span>
      </div>

      <div className={`${ROW_GRID} py-2 text-xs font-medium text-ink-3`}>
        <span>Member</span>
        <span>6 weeks</span>
        <span className={WIDE_ONLY}>Last visit</span>
        <span className={WIDE_ONLY}>Plan ends</span>
        <span>Spotter did</span>
      </div>

      {SLIPPING_MEMBERS.length === 0 ? (
        <p className="border-t border-rule px-[18px] py-6 text-ink-2">Nobody is slipping this week.</p>
      ) : (
        SLIPPING_MEMBERS.map((member) => (
          <div key={member.name} className={ROW_GRID}>
            <span className="leading-snug font-semibold break-words">{member.name}</span>
            <WeeklyVisitBars visits={member.weeklyVisits} />
            <span className={`${WIDE_ONLY} text-ink-3`}>{member.lastVisit}</span>
            <span className={`${WIDE_ONLY} text-ink-3`}>{member.planEnds}</span>
            <span>
              <StatusChip tone={member.action.tone} swipeDelayMs={member.action.swipeDelayMs}>
                {member.action.label}
              </StatusChip>
            </span>
          </div>
        ))
      )}

      <div className="flex flex-wrap justify-between gap-x-3 gap-y-2 border-t border-rule bg-wash px-[18px] py-3 text-sm text-ink-2">
        <span>
          <strong className="text-loss">{formatRupees(SLIPPING_SUMMARY.renewalsAtRisk)}</strong> in renewals at risk this
          month
        </span>
        <span className="font-semibold text-ink underline underline-offset-4">
          See all {SLIPPING_SUMMARY.totalSlipping}
        </span>
      </div>
    </Panel>
  );
}
