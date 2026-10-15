import { Panel } from "@/components/brand/Panel";
import { StatusChip } from "@/components/brand/StatusChip";
import { MORNING_CHECK_INS, PEOPLE_INSIDE_NOW } from "@/content/operations";
import { DecorativeQr } from "./DecorativeQr";

export function CheckInKiosk() {
  return (
    <Panel
      label={`Check-in tablet with a QR code and a log of this morning’s check-ins; ${PEOPLE_INSIDE_NOW} people inside now`}
      className="grid items-start gap-5 p-5 min-[481px]:grid-cols-[auto_minmax(0,1fr)]"
    >
      <div className="w-[140px] rounded-lg bg-qr-bg p-3 text-qr-ink shadow-[inset_0_0_0_1px_var(--rule)] min-[481px]:w-[150px]">
        <DecorativeQr />
        <p className="mt-2 text-center text-xs leading-tight font-semibold">Scan to check in</p>
      </div>

      {MORNING_CHECK_INS.length === 0 ? (
        <p className="text-sm text-ink-2">No check-ins yet today.</p>
      ) : (
        <ul className="m-0 list-none p-0 text-sm">
          {MORNING_CHECK_INS.map((checkIn) => (
            <li
              key={`${checkIn.time}-${checkIn.name}`}
              className="grid grid-cols-[2.7rem_minmax(0,1fr)] gap-x-2.5 border-t border-rule py-[9px] first:border-t-0 first:pt-0"
            >
              <time className="text-ink-3 tabular-nums">{checkIn.time}</time>
              <b className="font-semibold">{checkIn.name}</b>
              <small className="col-start-2 text-[0.8125rem] text-ink-2">
                {checkIn.needsRenewal && <StatusChip tone="marker">Renewal due</StatusChip>} {checkIn.outcome}
              </small>
            </li>
          ))}
        </ul>
      )}

      <div className="col-span-full flex justify-between gap-3 border-t border-rule pt-3 text-sm text-ink-2">
        <span>Inside now</span>
        <b className="text-ink tabular-nums">{PEOPLE_INSIDE_NOW}</b>
      </div>
    </Panel>
  );
}
