"use client";

import { useRef } from "react";
import { ChiselCard } from "@/components/brand/ChiselCard";
import { Highlight } from "@/components/brand/Highlight";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import { JOIN_HREF } from "@/content/navigation";
import { formatRupees } from "@/lib/format";
import type { LeakEstimate } from "@/lib/leakEstimate";

export type LeakResultProps = Readonly<{ estimate: LeakEstimate; explanation: string }>;

const COUNT_TIMING = { firstViewMs: 1200, changeMs: 380 } as const;

export function LeakResult({ estimate, explanation }: LeakResultProps) {
  const totalRef = useRef<HTMLParagraphElement>(null);
  const shownTotal = useCountUp(estimate.feesLostPerYear, totalRef, COUNT_TIMING);

  return (
    <div className="grid min-w-0 gap-[18px] border-t-[3px] border-marker pt-[22px]" aria-live="polite">
      <p className="text-[1.0625rem] font-semibold">Fees that walked out in the last 12 months</p>
      <p
        ref={totalRef}
        className="font-numeral text-[clamp(3.6rem,10vw,7.5rem)] leading-[0.88] tracking-[-0.015em] break-all text-marker"
      >
        {formatRupees(shownTotal)}
      </p>
      <p className="max-w-[36ch] text-xl leading-[1.45]">
        That’s <strong>{estimate.membersLostPerYear} members</strong> who stopped coming.{" "}
        <Highlight>Most of them never told you they were leaving.</Highlight>
      </p>

      <ChiselCard tone="navy" className="mt-2 grid justify-items-start gap-[18px] p-6">
        <p className="max-w-[36ch] text-[1.1875rem] leading-[1.45]">
          Win back just 1 in 5 of them and{" "}
          <strong className="text-marker">{formatRupees(estimate.feesWonBackPerYear)}</strong> a year comes back to you.
        </p>
        <Button asChild variant="marker" size="cta">
          <a href={JOIN_HREF}>Get that back with Spotter</a>
        </Button>
      </ChiselCard>

      <details>
        <summary className="w-max max-w-full cursor-pointer font-semibold underline decoration-2 underline-offset-[5px]">
          How this is worked out
        </summary>
        <p className="mt-2.5 max-w-[62ch] text-[0.9688rem] text-on-navy-muted">{explanation}</p>
      </details>
    </div>
  );
}
