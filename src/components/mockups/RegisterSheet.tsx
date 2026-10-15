import { HANDWRITTEN_NOTE, HANDWRITTEN_ROWS, REGISTER_HEADINGS } from "@/content/registerImport";
import { cn } from "@/lib/utils";

const ROW = "grid grid-cols-[34px_minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,0.8fr)] gap-x-2.5 whitespace-nowrap sm:grid-cols-[44px_minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,0.8fr)_minmax(0,0.7fr)] [&>span]:overflow-hidden [&>span:first-child]:pr-1.5 [&>span:first-child]:text-right";
const DATE_COLUMN = "hidden sm:block";
const RULED_PAPER =
  "bg-sheet [background-image:linear-gradient(90deg,transparent_46px,var(--sheet-margin)_46px_48px,transparent_48px),repeating-linear-gradient(180deg,transparent_0_39px,var(--sheet-rule)_39px_40px)] sm:[background-image:linear-gradient(90deg,transparent_58px,var(--sheet-margin)_58px_60px,transparent_60px),repeating-linear-gradient(180deg,transparent_0_39px,var(--sheet-rule)_39px_40px)] [background-position:0_18px]";

/** A photographed paper register: ruled lines, red margin, ballpoint-blue handwriting. */
export function RegisterSheet() {
  return (
    <div
      role="img"
      aria-label="Photo of a handwritten gym register with four members; one name is written in Hindi and one member has ₹2,000 pending"
      className={cn(
        RULED_PAPER,
        "w-full -rotate-1 rounded-[4px] pt-[18px] pr-[18px] pb-[22px] pl-3.5 font-hand text-base leading-[40px] text-sheet-ink shadow-[0_26px_50px_-28px_var(--shadow),0_1px_3px_var(--shadow)] sm:w-[90%] sm:-rotate-[1.6deg] sm:text-lg",
      )}
    >
      <div className={cn(ROW, "font-bold")}>
        <span>{REGISTER_HEADINGS.serial}</span>
        <span>{REGISTER_HEADINGS.name}</span>
        <span>{REGISTER_HEADINGS.plan}</span>
        <span>{REGISTER_HEADINGS.fees}</span>
        <span className={DATE_COLUMN}>{REGISTER_HEADINGS.date}</span>
      </div>
      {HANDWRITTEN_ROWS.map((row) => (
        <div key={row.serial} className={ROW}>
          <span>{row.serial}</span>
          <span lang={row.lang}>{row.name}</span>
          <span>{row.plan}</span>
          <span>{row.fees}</span>
          <span className={DATE_COLUMN}>{row.date}</span>
        </div>
      ))}
      <div className={ROW}>
        <span />
        <span className="col-[2/-1] -rotate-1">
          <mark className="bg-[linear-gradient(transparent_22%,var(--marker)_22%_80%,transparent_80%)] px-1 text-inherit">
            {HANDWRITTEN_NOTE.marked}
          </mark>{" "}
          {HANDWRITTEN_NOTE.rest}
        </span>
      </div>
    </div>
  );
}
