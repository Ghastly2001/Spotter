"use client";

import { useState } from "react";
import { ChiselCard } from "@/components/brand/ChiselCard";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { JOIN_HREF } from "@/content/navigation";
import { type BillingPeriod, FOUNDING_NAME, FOUNDING_OFFER, MONTHS_IN_YEAR, PRICES } from "@/content/pricing";
import { formatRupees } from "@/lib/format";

const CARD_GLOW =
  "[--chisel-bg:radial-gradient(70%_55%_at_100%_0%,color-mix(in_oklab,var(--marker)_26%,transparent),transparent),var(--navy-2)]";
const OFFER_BOX =
  "[--chisel-bg:color-mix(in_oklab,var(--marker)_12%,var(--navy-2))] [--chisel-border:color-mix(in_oklab,var(--marker)_60%,transparent)]";
const TOGGLE_ITEM =
  "h-auto rounded-md px-3.5 pt-[11px] pb-[9px] text-[0.9375rem] leading-none font-semibold text-on-navy-muted hover:bg-transparent hover:text-on-navy data-[state=on]:bg-marker data-[state=on]:text-marker-ink";

function isBillingPeriod(value: string): value is BillingPeriod {
  return value === "monthly" || value === "yearly";
}

export function PriceCard() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const yearlyPerMonth = PRICES.yearly / MONTHS_IN_YEAR;

  return (
    <ChiselCard tone="navy" shadow="soft" className={`grid gap-6 p-[clamp(22px,3vw,36px)] ${CARD_GLOW}`}>
      <ToggleGroup
        type="single"
        value={period}
        onValueChange={(value) => {
          if (isBillingPeriod(value)) setPeriod(value);
        }}
        aria-label="Billing period"
        spacing={0}
        className="flex-wrap justify-self-start rounded-lg bg-navy p-1 shadow-[inset_0_0_0_1px_var(--on-navy-rule)]"
      >
        <ToggleGroupItem value="monthly" className={TOGGLE_ITEM}>
          Monthly
        </ToggleGroupItem>
        <ToggleGroupItem value="yearly" className={TOGGLE_ITEM}>
          Yearly, 2 months free
        </ToggleGroupItem>
      </ToggleGroup>

      <div aria-live="polite">
        <p className="font-numeral text-[clamp(4rem,7vw,5.5rem)] leading-[0.9]">
          {formatRupees(period === "monthly" ? PRICES.monthly : PRICES.yearly)}
        </p>
        <p className="mt-2 text-on-navy-muted">
          {period === "monthly"
            ? "per gym, per month. Stop any time."
            : `per gym, per year. Works out to ${formatRupees(yearlyPerMonth)} a month.`}
        </p>
      </div>

      <ChiselCard tone="navy" cut="md" className={`grid gap-2 px-5 py-4 ${OFFER_BOX}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <b className="font-display text-[1.3rem] leading-tight font-bold">{FOUNDING_NAME}</b>
          <span className="clip-chisel bg-marker px-2.5 pt-1 pb-0.5 text-[0.8125rem] font-semibold text-marker-ink [--cut:6px]">
            First month free
          </span>
        </div>
        <p className="m-0 text-on-navy-muted">
          Then <b className="text-marker">{formatRupees(PRICES.founding)}</b> a month, locked for as long as you stay. We set up your gym
          for you.
        </p>
      </ChiselCard>

      <div className="grid gap-3">
        <Button asChild variant="marker" size="cta">
          <a href={JOIN_HREF}>Join the founding {FOUNDING_OFFER.spots}</a>
        </Button>
        <p className="m-0 text-center text-[0.875rem] text-on-navy-muted">Only {FOUNDING_OFFER.spots} spots.</p>
      </div>
    </ChiselCard>
  );
}
