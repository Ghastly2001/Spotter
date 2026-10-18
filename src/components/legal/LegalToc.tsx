"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export type LegalTocItem = Readonly<{ id: string; title: string }>;
export type LegalTocProps = Readonly<{ items: ReadonlyArray<LegalTocItem>; ids: ReadonlyArray<string> }>;

/** Sticky contents list for wide screens. The section being read gets the highlighter. */
export function LegalToc({ items, ids }: LegalTocProps) {
  const activeId = useActiveSection(ids);

  return (
    <nav aria-label="On this page" className="sticky top-[calc(var(--header-h)+32px)]">
      <p className="mb-3 text-xs font-semibold tracking-[0.08em] text-ink-3 uppercase">On this page</p>
      <ol className="m-0 grid list-none gap-0.5 p-0">
        {items.map((item, index) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "grid grid-cols-[1.75rem_1fr] px-2.5 py-1.5 text-[0.9375rem] leading-snug no-underline [--cut:var(--cut-sm)]",
                  isActive ? "clip-chisel bg-marker font-semibold text-marker-ink" : "text-ink-2 hover:text-ink",
                )}
              >
                <span className="font-numeral">{index + 1}.</span>
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
