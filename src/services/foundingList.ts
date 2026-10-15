import "server-only";
import type { JoinRequest } from "@/lib/joinRequest";

export class FoundingListUnavailableError extends Error {
  override name = "FoundingListUnavailableError";
}

/**
 * Stores a founding-gym request. Until a database exists, requests are posted to
 * FOUNDING_LIST_WEBHOOK_URL (a Google Sheet script, Zapier, Slack…). Without it,
 * development logs the request and production refuses, so no sign-up is silently lost.
 */
export async function saveFoundingGym(request: JoinRequest): Promise<void> {
  const webhookUrl = process.env.FOUNDING_LIST_WEBHOOK_URL;

  if (!webhookUrl) {
    if (process.env.NODE_ENV === "production") {
      throw new FoundingListUnavailableError("FOUNDING_LIST_WEBHOOK_URL is not set");
    }
    console.info("[founding-list] FOUNDING_LIST_WEBHOOK_URL not set; request not stored:", request);
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...request, submittedAt: new Date().toISOString() }),
  });

  if (!response.ok) {
    throw new FoundingListUnavailableError(`Webhook responded with ${response.status}`);
  }
}
