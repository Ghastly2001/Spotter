"use client";

import type { ReactNode } from "react";
import { Slider } from "@/components/ui/slider";
import type { SliderRange } from "@/lib/leakEstimate";

export type RangeFieldProps = Readonly<{
  id: string;
  label: string;
  range: SliderRange;
  value: number;
  displayValue: string;
  onValueChange: (value: number) => void;
  hint?: ReactNode;
}>;

export function RangeField({ id, label, range, value, displayValue, onValueChange, hint }: RangeFieldProps) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <span id={`${id}-label`} className="font-semibold">
          {label}
        </span>
        <output htmlFor={id} className="font-numeral text-[1.85rem] leading-none">
          {displayValue}
        </output>
      </div>
      <Slider
        thumbProps={{ id, "aria-labelledby": `${id}-label`, "aria-valuetext": displayValue }}
        min={range.min}
        max={range.max}
        step={range.step}
        value={[value]}
        onValueChange={([next]) => {
          if (next !== undefined) onValueChange(next);
        }}
        className="py-2"
      />
      {hint && <p className="mt-2 text-[0.9375rem] text-on-navy-muted">{hint}</p>}
    </div>
  );
}
