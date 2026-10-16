import type { LegalTocItem } from "./LegalToc";

export type LegalTocCompactProps = Readonly<{ items: ReadonlyArray<LegalTocItem> }>;

/** Collapsible contents list for narrow screens. */
export function LegalTocCompact({ items }: LegalTocCompactProps) {
  return (
    <details className="group border-y border-rule">
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-semibold [&::-webkit-details-marker]:hidden">
        On this page
        <span aria-hidden className="text-ink-3 transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <ol className="m-0 grid list-none gap-1 p-0 pb-4">
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="grid grid-cols-[1.75rem_1fr] py-1 text-ink-2 no-underline hover:text-ink">
              <span className="font-numeral">{index + 1}.</span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}
