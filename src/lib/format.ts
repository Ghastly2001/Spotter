const rupeeFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const countFormatter = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 1 });

/** ₹9,36,000 — Indian digit grouping (lakh and crore). */
export function formatRupees(amount: number): string {
  return rupeeFormatter.format(Math.round(amount));
}

/** 1,500 or 10.4 — at most one decimal. */
export function formatCount(value: number): string {
  return countFormatter.format(value);
}

/** 98220 41375 */
export function formatIndianMobile(tenDigits: string): string {
  return `${tenDigits.slice(0, 5)} ${tenDigits.slice(5)}`;
}
