"use client";

import { useState } from "react";
import { formatCount, formatRupees } from "@/lib/format";
import { estimateLeak, explainLeak, LEAK_SLIDERS, type LeakInputs } from "@/lib/leakEstimate";
import { LeakResult } from "./LeakResult";
import { RangeField } from "./RangeField";

const initialInputs: LeakInputs = {
  activeMembers: LEAK_SLIDERS.activeMembers.initial,
  monthlyFee: LEAK_SLIDERS.monthlyFee.initial,
  monthlyChurnPercent: LEAK_SLIDERS.monthlyChurnPercent.initial,
};

export function LeakCalculator() {
  const [inputs, setInputs] = useState<LeakInputs>(initialInputs);
  const estimate = estimateLeak(inputs);
  const update = (field: keyof LeakInputs) => (value: number) => setInputs((current) => ({ ...current, [field]: value }));

  return (
    <div className="grid items-start gap-split min-[861px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <div>
        <h2 id="leak-heading">How much walked out of your gym this year?</h2>
        <p className="mt-[18px] max-w-[44ch] text-lg">
          Set the three numbers for your gym. Everything is worked out on this page and nothing is sent anywhere.
        </p>
        <div className="mt-11 grid gap-[30px]">
          <RangeField
            id="active-members"
            label="Active members"
            range={LEAK_SLIDERS.activeMembers}
            value={inputs.activeMembers}
            displayValue={formatCount(inputs.activeMembers)}
            onValueChange={update("activeMembers")}
          />
          <RangeField
            id="monthly-fee"
            label="Average monthly fee"
            range={LEAK_SLIDERS.monthlyFee}
            value={inputs.monthlyFee}
            displayValue={formatRupees(inputs.monthlyFee)}
            onValueChange={update("monthlyFee")}
          />
          <RangeField
            id="monthly-churn"
            label="Members who don’t renew each month"
            range={LEAK_SLIDERS.monthlyChurnPercent}
            value={inputs.monthlyChurnPercent}
            displayValue={`${formatCount(inputs.monthlyChurnPercent)}%`}
            onValueChange={update("monthlyChurnPercent")}
            hint="Not sure? 4% is a fair starting guess for most gyms."
          />
        </div>
      </div>
      <LeakResult estimate={estimate} explanation={explainLeak(inputs, estimate)} />
    </div>
  );
}
