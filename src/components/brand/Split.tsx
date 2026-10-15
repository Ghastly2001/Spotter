import type { ReactNode } from "react";

export type SplitProps = Readonly<{ children: ReactNode }>;

/** Asymmetric 4/7 layout: a sticky heading column beside the main content. */
function SplitRoot({ children }: SplitProps) {
  return (
    <div className="grid items-start gap-split min-[861px]:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">{children}</div>
  );
}

function SplitAside({ children }: SplitProps) {
  return (
    <div className="grid gap-5 min-[861px]:sticky min-[861px]:top-[calc(env(safe-area-inset-top,0px)+var(--header-h)+40px)]">
      {children}
    </div>
  );
}

function SplitMain({ children }: SplitProps) {
  return <div className="min-w-0">{children}</div>;
}

export const Split = Object.assign(SplitRoot, { Aside: SplitAside, Main: SplitMain });
