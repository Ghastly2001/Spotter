import { Section } from "@/components/brand/Section";
import { SectionIntro } from "@/components/brand/Typography";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { COMPARISON_COLUMNS, COMPARISON_ROWS } from "@/content/pricing";

const CELL = "w-[26%] px-5 py-[18px] align-top text-base whitespace-normal text-ink-2";
const SPOTTER_CELL = "bg-wash font-medium text-ink";
const HEAD = "h-auto px-5 py-[18px] align-top font-display text-xl leading-tight font-bold whitespace-normal text-ink";

export function Comparison() {
  return (
    <Section labelledBy="comparison-heading">
      <SectionIntro>
        <h2 id="comparison-heading">What changes when you switch.</h2>
      </SectionIntro>
      <div className="border-t-2 border-ink">
        <Table className="min-w-[760px]">
          <TableHeader>
            <TableRow className="border-rule hover:bg-transparent">
              <TableHead className={HEAD}>
                <span className="sr-only">Topic</span>
              </TableHead>
              <TableHead className={HEAD}>{COMPARISON_COLUMNS.register}</TableHead>
              <TableHead className={HEAD}>{COMPARISON_COLUMNS.typicalSoftware}</TableHead>
              <TableHead className={`${HEAD} bg-marker text-marker-ink`}>{COMPARISON_COLUMNS.spotter}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {COMPARISON_ROWS.map((row) => (
              <TableRow key={row.topic} className="border-rule hover:bg-transparent">
                <TableHead scope="row" className="h-auto w-[22%] px-5 py-[18px] align-top text-base font-semibold whitespace-normal text-ink">
                  {row.topic}
                </TableHead>
                <TableCell className={CELL}>{row.register}</TableCell>
                <TableCell className={CELL}>{row.typicalSoftware}</TableCell>
                <TableCell className={`${CELL} ${SPOTTER_CELL}`}>{row.spotter}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Section>
  );
}
