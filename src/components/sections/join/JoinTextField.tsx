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

export const JOIN_INPUT =
  "h-[50px] rounded-lg border-transparent bg-paper px-3.5 text-[1.0625rem] font-medium text-ink shadow-none md:text-[1.0625rem]";

export function JoinTextField({ name, label, defaultValue, errorId, prefix, className, ...inputProps }: JoinTextFieldProps) {
  const id = `join-${name}`;
  const input = (
    <Input
      id={id}
      name={name}
      defaultValue={defaultValue}
      aria-invalid={errorId ? true : undefined}
      aria-describedby={errorId}
      className={cn(JOIN_INPUT, prefix && "min-w-0 flex-1 rounded-l-none pl-1")}
      {...inputProps}
    />
  );

  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1.5 text-[0.9375rem] font-semibold">
        {label}
      </Label>
      {prefix ? (
        <div className="flex items-stretch rounded-lg bg-paper">
          <span className="grid place-items-center pr-1 pl-3.5 font-semibold text-ink-2">{prefix}</span>
          {input}
        </div>
      ) : (
        input
      )}
    </div>
  );
}
