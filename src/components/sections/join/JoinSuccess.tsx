import { ChiselCard } from "@/components/brand/ChiselCard";
import { formatIndianMobile } from "@/lib/format";
import type { JoinRequest } from "@/lib/joinRequest";

export type JoinSuccessProps = Readonly<{ request: JoinRequest }>;

export function JoinSuccess({ request }: JoinSuccessProps) {
  const firstName = request.name.split(/\s+/)[0] ?? request.name;

  return (
    <ChiselCard tone="marker" className="grid gap-2.5 p-7 [overflow-wrap:anywhere]" >
      <h3 className="text-[1.75rem]" tabIndex={-1}>
        Thanks, {firstName}.
      </h3>
      <p>
        {request.gym} in {request.city} is on the founding list. We’ll message you on WhatsApp at +91{" "}
        {formatIndianMobile(request.phone)} with your start date.
      </p>
    </ChiselCard>
  );
}
