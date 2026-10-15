import { formatCount, formatRupees } from "./format";

export type LeakInputs = Readonly<{
  activeMembers: number;
  monthlyFee: number;
  monthlyChurnPercent: number;
}>;

export type LeakEstimate = Readonly<{
  membersLostPerMonth: number;
  membersLostPerYear: number;
  feesLostPerYear: number;
  feesWonBackPerYear: number;
}>;

export type SliderRange = Readonly<{ min: number; max: number; step: number; initial: number }>;

export const LEAK_SLIDERS = {
  activeMembers: { min: 50, max: 1500, step: 10, initial: 250 },
  monthlyFee: { min: 500, max: 5000, step: 100, initial: 1200 },
  monthlyChurnPercent: { min: 1, max: 10, step: 0.5, initial: 4 },
} as const satisfies Record<keyof LeakInputs, SliderRange>;

const MONTHS_IN_YEAR = 12;
export const WIN_BACK_SHARE = 1 / 5;

/** Someone who left 12 months ago missed 12 months of fees, 11 months ago missed 11, … down to 1. */
export const MISSED_FEE_MONTHS_PER_YEAR = Array.from({ length: MONTHS_IN_YEAR }, (_, index) => index + 1).reduce(
  (total, months) => total + months,
  0,
);

export function estimateLeak({ activeMembers, monthlyFee, monthlyChurnPercent }: LeakInputs): LeakEstimate {
  const membersLostPerMonth = (activeMembers * monthlyChurnPercent) / 100;
  const feesLostPerYear = membersLostPerMonth * monthlyFee * MISSED_FEE_MONTHS_PER_YEAR;

  return {
    membersLostPerMonth,
    membersLostPerYear: Math.round(membersLostPerMonth * MONTHS_IN_YEAR),
    feesLostPerYear,
    feesWonBackPerYear: feesLostPerYear * WIN_BACK_SHARE,
  };
}

export function explainLeak(inputs: LeakInputs, estimate: LeakEstimate): string {
  const perMonth = formatCount(estimate.membersLostPerMonth);
  return (
    `About ${perMonth} members (${formatCount(inputs.monthlyChurnPercent)}% of ${formatCount(inputs.activeMembers)}) stop renewing every month. ` +
    `The ones who left 12 months ago would have paid you 12 more months of fees by now, the ones who left 11 months ago 11 more, and so on down to 1. ` +
    `Those add up to ${MISSED_FEE_MONTHS_PER_YEAR} months, so ${perMonth} × ${formatRupees(inputs.monthlyFee)} × ${MISSED_FEE_MONTHS_PER_YEAR} = ${formatRupees(estimate.feesLostPerYear)}. ` +
    `It assumes none of them came back on their own.`
  );
}
