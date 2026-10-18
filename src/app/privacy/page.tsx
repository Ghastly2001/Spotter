import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { PRIVACY_POLICY } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy · Spotter",
  description: "What Spotter collects when you visit or join the founding list, why, and how to see, correct or delete it.",
};

export default function PrivacyPage() {
  return <LegalPage legalDocument={PRIVACY_POLICY} />;
}
