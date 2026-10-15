import { Panel } from "@/components/brand/Panel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OCTOBER_PT, PT_RATE_PER_SESSION } from "@/content/operations";
import { formatRupees } from "@/lib/format";

const HEAD = "h-auto px-3 pt-3.5 pb-2.5 text-xs font-medium text-ink-3 sm:px-[18px]";
const CELL = "px-3 py-3 text-[0.9375rem] tabular-nums sm:px-[18px]";

export function TrainerCommissionTable() {
  const summary = OCTOBER_PT.map((month) => `${month.trainer} ${month.sessions} sessions`).join(", ");

  return (
    <Panel label={`Trainer commissions for October: ${summary}`} className="overflow-hidden">
      {OCTOBER_PT.length === 0 ? (
        <p className="p-[18px] text-ink-2">No PT sessions logged this month yet.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="border-rule hover:bg-transparent">
              <TableHead className={HEAD}>Trainer</TableHead>
              <TableHead className={`${HEAD} text-right`}>Sessions</TableHead>
              <TableHead className={`${HEAD} text-right`}>Clients</TableHead>
              <TableHead className={`${HEAD} text-right`}>Commission</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {OCTOBER_PT.map((month) => (
              <TableRow key={month.trainer} className="border-rule hover:bg-transparent">
                <TableCell className={`${CELL} font-semibold`}>{month.trainer}</TableCell>
                <TableCell className={`${CELL} text-right`}>{month.sessions}</TableCell>
                <TableCell className={`${CELL} text-right`}>{month.clients}</TableCell>
                <TableCell className={`${CELL} text-right`}>{formatRupees(month.sessions * PT_RATE_PER_SESSION)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <p className="border-t border-rule bg-wash px-[18px] py-3 text-[0.8125rem] text-ink-2">
        October so far. {formatRupees(PT_RATE_PER_SESSION)} per session, a rate you set per trainer.
      </p>
    </Panel>
  );
}
