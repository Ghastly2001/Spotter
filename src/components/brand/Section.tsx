import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export type SectionTone = "paper" | "wash" | "navy";
export type SectionGlow = "none" | "right" | "bottomLeft";

export type SectionProps = Readonly<{
  children: ReactNode;
  id?: string;
  labelledBy?: string;
  label?: string;
  tone?: SectionTone;
  glow?: SectionGlow;
  className?: string;
}>;

const toneClassNames: Readonly<Record<SectionTone, string>> = {
  paper: "bg-paper",
  wash: "bg-wash",
  navy: "grain bg-navy text-on-navy [&_:focus-visible]:outline-marker",
};

const glowClassNames: Readonly<Record<SectionGlow, string>> = {
  none: "",
  right: "glow-right",
  bottomLeft: "glow-bottom-left",
};

export function Section({ children, id, labelledBy, label, tone = "paper", glow = "none", className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={label}
      className={cn("py-section", toneClassNames[tone], glowClassNames[glow], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
