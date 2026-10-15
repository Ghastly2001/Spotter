import type { ReactNode } from "react";

export type TypographyProps = Readonly<{ children: ReactNode }>;

export function Lede({ children }: TypographyProps) {
  return <p className="max-w-[56ch] text-[clamp(1.125rem,1.4vw,1.3rem)] leading-[1.55] text-ink-2">{children}</p>;
}

/** Heading block above a full-width section body. */
export function SectionIntro({ children }: TypographyProps) {
  return <div className="mb-[clamp(40px,5vw,72px)] grid max-w-[780px] gap-5">{children}</div>;
}

export type TextLinkProps = TypographyProps & Readonly<{ href: string }>;

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <a
      href={href}
      className="font-semibold underline decoration-2 underline-offset-[6px] transition-colors hover:decoration-marker-press"
    >
      {children}
    </a>
  );
}
