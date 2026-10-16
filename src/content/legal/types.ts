/** A run of text, or a run that links somewhere. */
export type Inline = string | Readonly<{ text: string; href: string }>;

export type LegalBlock =
  | Readonly<{ kind: "paragraph"; text: ReadonlyArray<Inline> }>
  | Readonly<{ kind: "list"; items: ReadonlyArray<ReadonlyArray<Inline>> }>;

export type LegalSection = Readonly<{ id: string; title: string; blocks: ReadonlyArray<LegalBlock> }>;

export type LegalMetaItem = Readonly<{ label: string; value: string }>;

export type LegalDocument = Readonly<{
  title: string;
  /** The oversized word set behind the title. */
  backdropWord: string;
  summary: string;
  meta: ReadonlyArray<LegalMetaItem>;
  shortVersion: ReadonlyArray<ReadonlyArray<Inline>>;
  sections: ReadonlyArray<LegalSection>;
}>;

export const paragraph = (...text: ReadonlyArray<Inline>): LegalBlock => ({ kind: "paragraph", text });
export const list = (...items: ReadonlyArray<ReadonlyArray<Inline>>): LegalBlock => ({ kind: "list", items });
export const link = (text: string, href: string): Inline => ({ text, href });
