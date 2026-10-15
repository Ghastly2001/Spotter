"use server";

import { type JoinFormState, readJoinValues, validateJoinRequest } from "@/lib/joinRequest";
import { saveFoundingGym } from "@/services/foundingList";

export async function joinFoundingList(previous: JoinFormState, formData: FormData): Promise<JoinFormState> {
  const attempt = previous.attempt + 1;
  const values = readJoinValues(formData);
  const validation = validateJoinRequest(values);

  if (!validation.ok) {
    return { status: "invalid", attempt, values, field: validation.field, message: validation.message };
  }

  try {
    await saveFoundingGym(validation.request);
  } catch (error) {
    console.error("[founding-list] could not save request", error);
    return {
      status: "failed",
      attempt,
      values,
      message: "We couldn’t save your spot just now. Please try again in a minute.",
    };
  }

  return { status: "joined", attempt, request: validation.request };
}
