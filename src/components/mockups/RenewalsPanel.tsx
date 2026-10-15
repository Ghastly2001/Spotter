import { Panel } from "@/components/brand/Panel";
import { OCTOBER_RENEWALS } from "@/content/operations";
import { cssVars } from "@/lib/cssVars";
import { formatRupees } from "@/lib/format";

export function RenewalsPanel() {
  const renewals = OCTOBER_RENEWALS;
  const pending = renewals.due - renewals.collectedByAutoPay - renewals.paidAtDesk;
  const autoPayShare = (renewals.collectedByAutoPay / renewals.due) * 100;

  return (
    <Panel
      label={`October renewals: ${renewals.collectedByAutoPay} of ${renewals.due} collected automatically, ${formatRupees(renewals.autoPayTotal)}, ${renewals.needsAttention.length} payments need attention`}
      className="grid gap-5 p-[22px]"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-[1.4rem]">October renewals</h3>
        <span className="text-ink-3">{renewals.due} due</span>
      </div>

      <div>
        <p className="font-numeral text-[3.1rem] leading-none">
          {formatRupees(renewals.autoPayTotal)}
        </p>
        <p className="mt-1 text-[0.9375rem] text-ink-2">
          collected automatically from {renewals.collectedByAutoPay} members
        </p>
        <div className="mt-3.5 h-2.5 overflow-hidden rounded-[5px] bg-wash shadow-[inset_0_0_0_1px_var(--rule)]">
          <span
            className="block h-full w-[var(--share)] bg-gain"
            style={cssVars({ "--share": `${autoPayShare.toFixed(1)}%` })}
          />
        </div>
        <div className="mt-2 flex flex-wrap justify-between gap-x-4 gap-y-2 text-sm text-ink-2 tabular-nums">
          <span>AutoPay: {renewals.collectedByAutoPay}</span>
          <span>Paid at desk: {renewals.paidAtDesk}</span>
          <span>Pending: {pending}</span>
        </div>
      </div>

      <div>
        <h4 className="mb-1 font-sans text-[0.8125rem] font-semibold tracking-normal text-ink-3">Needs attention</h4>
        {renewals.needsAttention.length === 0 ? (
          <p className="border-t border-rule py-3 text-ink-2">Every renewal went through.</p>
        ) : (
          renewals.needsAttention.map((renewal) => (
            <div key={renewal.member} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-0.5 border-t border-rule py-3">
              <b className="font-semibold">{renewal.member}</b>
              <span className="text-right font-semibold tabular-nums">{formatRupees(renewal.amount)}</span>
              <small className="col-span-full text-sm text-ink-2">{renewal.reason}</small>
            </div>
          ))
        )}
      </div>
    </Panel>
  );
}
