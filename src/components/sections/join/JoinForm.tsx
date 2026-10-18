"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { joinFoundingList } from "@/app/actions/joinFoundingList";
import { Button } from "@/components/ui/button";
import { PRIVACY_HREF, TERMS_HREF } from "@/content/legal/business";
import { EMPTY_JOIN_VALUES, type JoinFormState, MAX_TEXT_LENGTH } from "@/lib/joinRequest";
import { GymSizeSelect } from "./GymSizeSelect";
import { JoinSuccess } from "./JoinSuccess";
import { JoinTextField } from "./JoinTextField";

const initialState: JoinFormState = { status: "idle", attempt: 0, values: EMPTY_JOIN_VALUES };
const ERROR_ID = "join-error";
const PHONE_MAX_LENGTH = 14;

export function JoinForm() {
  const [state, formAction, isPending] = useActionState(joinFoundingList, initialState);
  const invalidField = state.status === "invalid" ? state.field : undefined;

  useEffect(() => {
    if (invalidField) document.getElementById(`join-${invalidField}`)?.focus();
  }, [invalidField, state.attempt]);

  if (state.status === "joined") return <JoinSuccess request={state.request} />;

  const errorFor = (field: typeof invalidField) => (field === invalidField ? ERROR_ID : undefined);
  const errorMessage = state.status === "invalid" || state.status === "failed" ? state.message : "";

  return (
    <form key={state.attempt} action={formAction} noValidate className="grid gap-[18px] min-[521px]:grid-cols-2">
      <JoinTextField name="name" label="Your name" autoComplete="name" maxLength={MAX_TEXT_LENGTH} defaultValue={state.values.name} errorId={errorFor("name")} />
      <JoinTextField name="gym" label="Gym name" autoComplete="organization" maxLength={MAX_TEXT_LENGTH} defaultValue={state.values.gym} errorId={errorFor("gym")} />
      <JoinTextField name="city" label="City" autoComplete="address-level2" maxLength={MAX_TEXT_LENGTH} defaultValue={state.values.city} errorId={errorFor("city")} />
      <GymSizeSelect defaultValue={state.values.size} />
      <JoinTextField
        name="phone"
        label="WhatsApp number"
        prefix="+91"
        inputMode="numeric"
        autoComplete="tel-national"
        maxLength={PHONE_MAX_LENGTH}
        defaultValue={state.values.phone}
        errorId={errorFor("phone")}
        className="min-[521px]:col-span-2"
      />

      <p id={ERROR_ID} role="alert" className="min-h-6 font-semibold text-marker min-[521px]:col-span-2">
        {errorMessage}
      </p>

      <Button type="submit" variant="marker" size="cta" disabled={isPending} className="justify-self-start min-[521px]:col-span-2">
        {isPending ? "Reserving your spot…" : "Reserve my spot"}
      </Button>
      <p className="text-sm text-on-navy-muted min-[521px]:col-span-2">
        We’ll only use your number to talk to you about Spotter. By reserving a spot you agree to our{" "}
        <Link href={TERMS_HREF} className="underline underline-offset-4 hover:text-on-navy">
          Terms
        </Link>{" "}
        and{" "}
        <Link href={PRIVACY_HREF} className="underline underline-offset-4 hover:text-on-navy">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
