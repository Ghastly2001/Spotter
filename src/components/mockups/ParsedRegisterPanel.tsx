import { Panel } from "@/components/brand/Panel";
import { StatusChip } from "@/components/brand/StatusChip";
import { PARSED_MEMBERS, type ParsedStatus } from "@/content/registerImport";
import { cn } from "@/lib/utils";

const statusClassNames: Readonly<Record<Exclude<ParsedStatus, "check">, string>> = {
  paid: "text-gain",
  due: "text-loss",
};

export type ParsedRegisterPanelProps = Readonly<{ className?: string }>;

export function ParsedRegisterPanel({ className }: ParsedRegisterPanelProps) {
  return (
    <Panel
      label={`Spotter’s reading of the register: ${PARSED_MEMBERS.length} members found, one name needs checking, one member has ₹2,000 due`}
      className={cn("text-sm", className)}
    >
      <div className="flex items-center justify-between gap-3 border-b border-rule px-4 pt-3.5 pb-3">
        <b className="font-semibold">Read from 1 photo</b>
        <StatusChip tone="calm">{PARSED_MEMBERS.length} members</StatusChip>
      </div>
      {PARSED_MEMBERS.length === 0 ? (
        <p className="px-4 py-3 text-ink-2">We couldn’t read any rows. Try a sharper photo.</p>
      ) : (
        PARSED_MEMBERS.map((member) => (
          <div
            key={member.name}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3 border-t border-rule px-4 py-2.5 first-of-type:border-t-0"
          >
            <span className="break-words">{member.name}</span>
            {member.status === "check" ? (
              <StatusChip tone="marker">{member.statusLabel}</StatusChip>
            ) : (
              <span className={cn("text-[0.8125rem] font-semibold", statusClassNames[member.status])}>
                {member.statusLabel}
              </span>
            )}
            <small className="text-xs text-ink-3">{member.detail}</small>
          </div>
        ))
      )}
    </Panel>
  );
}
