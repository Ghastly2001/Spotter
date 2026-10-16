import { Fragment } from "react";
import { TextLink } from "@/components/brand/Typography";
import type { Inline, LegalBlock } from "@/content/legal/types";

export type InlineTextProps = Readonly<{ text: ReadonlyArray<Inline> }>;

export function InlineText({ text }: InlineTextProps) {
  return text.map((run, index) => (
    <Fragment key={index}>{typeof run === "string" ? run : <TextLink href={run.href}>{run.text}</TextLink>}</Fragment>
  ));
}

export type LegalBlocksProps = Readonly<{ blocks: ReadonlyArray<LegalBlock> }>;

export function LegalBlocks({ blocks }: LegalBlocksProps) {
  return blocks.map((block, index) =>
    block.kind === "paragraph" ? (
      <p key={index} className="m-0">
        <InlineText text={block.text} />
      </p>
    ) : (
      <LegalList key={index} items={block.items} />
    ),
  );
}

export type LegalListProps = Readonly<{ items: ReadonlyArray<ReadonlyArray<Inline>> }>;

export function LegalList({ items }: LegalListProps) {
  return (
    <ul className="m-0 grid list-none gap-2.5 p-0">
      {items.map((item, index) => (
        <li key={index} className="grid grid-cols-[1.25rem_1fr]">
          <span aria-hidden className="text-ink-3">
            –
          </span>
          <span>
            <InlineText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}
