import type { LegalMetaItem } from "./types";

/**
 * Details of the business behind Spotter, used across the legal pages.
 * TODO before launch: replace every bracketed value with the real details.
 */
export const BUSINESS = {
  legalName: "[Registered business name]",
  address: "[Registered address], India",
  email: "[privacy@your-domain.in]",
  grievanceOfficer: "[Grievance officer’s full name]",
  courtsCity: "[City]",
} as const;

export const PRIVACY_HREF = "/privacy";
export const TERMS_HREF = "/terms";

export const LEGAL_META: ReadonlyArray<LegalMetaItem> = [
  { label: "Last updated", value: "16 October 2026" },
  { label: "Version", value: "1.0" },
  { label: "Covers", value: "This website and the founding list" },
];
