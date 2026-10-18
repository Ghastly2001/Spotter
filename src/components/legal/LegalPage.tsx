import { Container } from "@/components/brand/Container";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import type { LegalDocument } from "@/content/legal/types";
import { LegalHero } from "./LegalHero";
import { LegalBlocks, LegalList } from "./LegalText";
import { LegalToc } from "./LegalToc";
import { LegalTocCompact } from "./LegalTocCompact";

export type LegalPageProps = Readonly<{ legalDocument: LegalDocument }>;

export function LegalPage({ legalDocument }: LegalPageProps) {
  const { sections } = legalDocument;
  const tocItems = sections.map(({ id, title }) => ({ id, title }));
  const sectionIds = sections.map(({ id }) => id);

  return (
    <>
      <SiteHeader />
      <main id="top">
        <LegalHero
          title={legalDocument.title}
          backdropWord={legalDocument.backdropWord}
          summary={legalDocument.summary}
          meta={legalDocument.meta}
        />
        <Container className="grid gap-10 py-[clamp(48px,6vw,96px)] min-[961px]:grid-cols-[16rem_minmax(0,1fr)] min-[961px]:gap-[clamp(48px,6vw,112px)]">
          <aside className="hidden min-[961px]:block">
            <LegalToc items={tocItems} ids={sectionIds} />
          </aside>
          <article className="grid max-w-[68ch] min-w-0 gap-12 text-ink-2">
            <section aria-labelledby="short-version" className="grid gap-4 clip-chisel bg-wash [--cut:var(--cut-lg)] p-[clamp(20px,3vw,32px)] text-ink">
              <h2 id="short-version" className="m-0 text-[1.375rem]">
                The short version
              </h2>
              <LegalList items={legalDocument.shortVersion} />
            </section>
            <div className="min-[961px]:hidden">
              <LegalTocCompact items={tocItems} />
            </div>
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="grid gap-4">
                <h2 id={`${section.id}-heading`} className="m-0 grid grid-cols-[2.25rem_1fr] text-[clamp(1.5rem,2.4vw,1.875rem)] text-ink">
                  <span className="font-numeral text-ink-3">{index + 1}.</span>
                  {section.title}
                </h2>
                <div className="grid gap-4 pl-9">
                  <LegalBlocks blocks={section.blocks} />
                </div>
              </section>
            ))}
          </article>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
