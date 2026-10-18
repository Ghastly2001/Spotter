import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { TERMS_OF_USE } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Use · Spotter",
  description: "The rules for using the Spotter website and joining the founding list.",
};

export default function TermsPage() {
  return <LegalPage legalDocument={TERMS_OF_USE} />;
}
