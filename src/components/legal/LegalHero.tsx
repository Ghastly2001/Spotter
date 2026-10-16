import { Container } from "@/components/brand/Container";
import type { LegalMetaItem } from "@/content/legal/types";

export type LegalHeroProps = Readonly<{
  title: string;
  backdropWord: string;
  summary: string;
  meta: ReadonlyArray<LegalMetaItem>;
}>;

/** Navy title band with the document's name set huge and faint behind the heading. */
export function LegalHero({ title, backdropWord, summary, meta }: LegalHeroProps) {
  return (
    <header className="grain glow-bottom-left bg-navy text-on-navy">
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-0.04em] bottom-[-0.22em] font-numeral text-[clamp(7rem,24vw,22rem)] leading-none tracking-[-0.04em] whitespace-nowrap text-on-navy/[0.05] select-none"
      >
        {backdropWord}
      </span>
      <Container className="relative grid gap-8 pt-[clamp(56px,8vw,112px)] pb-[clamp(48px,6vw,80px)]">
        <div className="grid max-w-[46rem] gap-5">
          <p className="m-0 text-sm font-semibold tracking-[0.08em] text-on-navy-muted uppercase">Legal</p>
          <h1 className="m-0 text-[clamp(2.75rem,6vw,4.75rem)]">{title}</h1>
          <p className="m-0 max-w-[56ch] text-lg text-on-navy-muted">{summary}</p>
        </div>
        <dl className="m-0 flex flex-wrap gap-x-12 gap-y-4 border-t border-on-navy-rule pt-6">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs tracking-[0.08em] text-on-navy-muted uppercase">{item.label}</dt>
              <dd className="m-0 mt-1 font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </header>
  );
}
