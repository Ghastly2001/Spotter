import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerProps = Readonly<{ children: ReactNode; className?: string }>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-page pr-[max(var(--gutter-x),env(safe-area-inset-right,0px))] pl-[max(var(--gutter-x),env(safe-area-inset-left,0px))]",
        className,
      )}
    >
      {children}
    </div>
  );
}
