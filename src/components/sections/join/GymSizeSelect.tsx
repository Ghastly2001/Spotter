"use client";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DEFAULT_GYM_SIZE, GYM_SIZES } from "@/content/faqAndJoin";
import { JOIN_INPUT } from "./JoinTextField";

export type GymSizeSelectProps = Readonly<{ defaultValue: string }>;

export function GymSizeSelect({ defaultValue }: GymSizeSelectProps) {
  return (
    <div>
      <Label htmlFor="join-size" className="mb-1.5 text-[0.9375rem] font-semibold">
        Active members
      </Label>
      <Select name="size" defaultValue={defaultValue || DEFAULT_GYM_SIZE}>
        <SelectTrigger id="join-size" className={`${JOIN_INPUT} w-full data-[size=default]:h-[50px]`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {GYM_SIZES.map((size) => (
            <SelectItem key={size} value={size}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
