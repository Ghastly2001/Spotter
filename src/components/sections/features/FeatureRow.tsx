import type { ReactNode } from "react";
import type { FeaturePoint } from "@/content/features";
import { cn } from "@/lib/utils";

export type FeatureMediaSide = "left" | "right";

export type FeatureRowProps = Readonly<{ children: ReactNode; mediaSide: FeatureMediaSide }>;
export type FeatureCopyProps = Readonly<{ title: string; titleId?: string; children: ReactNode; titleSize?: "lg" | "md" }>;
export type FeaturePointsProps = Readonly<{ points: ReadonlyArray<FeaturePoint> }>;

/** Copy beside a product screen. The first child is the copy, the second the screen. */
function FeatureRowRoot({ children, mediaSide }: FeatureRowProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-split min-[901px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]",
        mediaSide === "left" && "min-[901px]:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] min-[901px]:[&>*:first-child]:order-2",
      )}
    >
      {children}
    </div>
  );
}

function FeatureCopy({ title, titleId, children, titleSize = "lg" }: FeatureCopyProps) {
  return (
    <div className="grid min-w-0 content-start gap-[22px]">
      <h2 id={titleId} className={titleSize === "lg" ? "text-[clamp(2.1rem,3.6vw,3.1rem)]" : "text-[clamp(2rem,3vw,2.6rem)]"}>{title}</h2>
      {children}
    </div>
  );
}

function FeatureBody({ children }: Readonly<{ children: ReactNode }>) {
  return <p className="max-w-[52ch] text-lg text-ink-2">{children}</p>;
}

function FeaturePoints({ points }: FeaturePointsProps) {
  return (
    <ul className="m-0 mt-1.5 grid list-none p-0">
      {points.map((point) => (
        <li key={point.title} className="border-t border-rule py-3.5 text-ink-2">
          <b className="block font-semibold text-ink">{point.title}</b>
          {point.body}
        </li>
      ))}
    </ul>
  );
}

export const FeatureRow = Object.assign(FeatureRowRoot, { Copy: FeatureCopy, Body: FeatureBody, Points: FeaturePoints });
