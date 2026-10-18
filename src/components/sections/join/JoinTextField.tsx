import type { ComponentProps, ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { JoinField } from "@/lib/joinRequest";
import { cn } from "@/lib/utils";

export type JoinTextFieldProps = Readonly<{
  name: JoinField;
  label: string;
  defaultValue: string;
  errorId?: string;
  prefix?: ReactNode;
  className?: string;
}> &
  Pick<ComponentProps<"input">, "autoComplete" | "inputMode" | "maxLength">;

export const JOIN_FIELD =
  "rounded-lg border border-on-navy-rule bg-navy text-on-navy transition-colors hover:border-on-navy-muted focus-within:border-marker focus-within:ring-3 focus-within:ring-marker/25 dark:bg-navy dark:hover:bg-navy";

export const JOIN_INPUT = `h-[50px] px-3.5 text-[1.0625rem] font-medium shadow-none md:text-[1.0625rem] ${JOIN_FIELD}`;

const BARE_INPUT =
  "h-[50px] min-w-0 flex-1 rounded-none border-0 bg-transparent pl-3 text-[1.0625rem] font-medium text-on-navy shadow-none ring-0 placeholder:text-on-navy-muted focus-visible:ring-0 md:text-[1.0625rem] dark:bg-transparent";

export function JoinTextField({ name, label, defaultValue, errorId, prefix, className, ...inputProps }: JoinTextFieldProps) {
  const id = `join-${name}`;
  const input = (
    <Input
      id={id}
      name={name}
      defaultValue={defaultValue}
      aria-invalid={errorId ? true : undefined}
      aria-describedby={errorId}
      className={prefix ? BARE_INPUT : cn(JOIN_INPUT, "placeholder:text-on-navy-muted")}
      {...inputProps}
    />
  );

  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1.5 text-[0.9375rem] font-semibold">
        {label}
      </Label>
      {prefix ? (
        <div className={cn("flex items-stretch", JOIN_FIELD)}>
          <span className="grid place-items-center border-r border-on-navy-rule px-3.5 font-semibold text-on-navy-muted">{prefix}</span>
          {input}
        </div>
      ) : (
        input
      )}
    </div>
  );
}
