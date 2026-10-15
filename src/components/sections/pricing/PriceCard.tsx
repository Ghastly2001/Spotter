"use client";

import { useState } from "react";
import { ChiselCard } from "@/components/brand/ChiselCard";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { JOIN_HREF } from "@/content/navigation";
import { type BillingPeriod, MONTHS_IN_YEAR, PRICES } from "@/content/pricing";
import { formatRupees } from "@/lib/format";

const TOGGLE_ITEM =
  "h-auto rounded-lg px-3.5 pt-[11px] pb-[9px] text-[0.9375rem] leading-none font-semibold text-ink-2 hover:bg-transparent hover:text-ink data-[state=on]:bg-panel data-[state=on]:text-ink data-[state=on]:shadow-[0_1px_3px_var(--shadow)]";

function isBillingPeriod(value: string): value is BillingPeriod {
  return value === "monthly" || value === "yearly";
}

export function PriceCard() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const yearlyPerMonth = PRICES.yearly / MONTHS_IN_YEAR;

  return (
    <ChiselCard tone="panel" shadow="soft" className="grid gap-[22px] p-[clamp(22px,3vw,36px)]">
      <ToggleGroup
        type="single"
        value={period}
        onValueChange={(value) => {
          if (isBillingPeriod(value)) setPeriod(value);
        }}
        aria-label="Billing period"
        spacing={0}
        className="flex-wrap justify-self-start rounded-[10px] bg-wash p-1 shadow-[inset_0_0_0_1px_var(--rule)]"
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
        <p className="mt-2 text-ink-2">
          {period === "monthly"
            ? "per gym, per month. Stop any time."
            : `per gym, per year. Works out to ${formatRupees(yearlyPerMonth)} a month.`}
        </p>
      </div>

      <ChiselCard tone="marker" cut="md" className="px-[18px] py-4">
        <b className="mb-0.5 block font-display text-[1.3rem] leading-tight font-bold">
          Founding 100: {formatRupees(PRICES.founding)} a month
        </b>
        Locked for as long as you stay, and we set up your gym for you.
      </ChiselCard>

      <Button asChild variant="ink" size="cta">
        <a href={JOIN_HREF}>Join the founding 100</a>
      </Button>
    </ChiselCard>
  );
}
