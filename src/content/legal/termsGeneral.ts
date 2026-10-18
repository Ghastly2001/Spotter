import { BUSINESS, PRIVACY_HREF } from "./business";
import { type LegalSection, link, list, paragraph } from "./types";

export const TERMS_GENERAL_SECTIONS: ReadonlyArray<LegalSection> = [
  {
    id: "third-parties",
    title: "Other companies’ services",
    blocks: [
      paragraph(
        "WhatsApp, UPI and other names we mention belong to their owners, and their own terms apply when you use them. We are not responsible for websites or services run by others, even when we link to them.",
      ),
    ],
  },
  {
    id: "disclaimer",
    title: "No guarantees",
    blocks: [
      paragraph(
        "We work to keep this website accurate and available, but it is provided “as is”. We do not guarantee that it will always be available, error-free or up to date.",
      ),
    ],
  },
  {
    id: "liability",
    title: "Limits on our liability",
    blocks: [
      paragraph(
        "As far as the law allows, we are not liable for indirect or consequential losses, such as lost profits or lost data, that arise from using this website or the founding list. Our total liability for these is limited to ₹1,000.",
      ),
      paragraph("Nothing in these terms limits any liability that cannot be limited under Indian law."),
    ],
  },
  {
    id: "indemnity",
    title: "If you break these terms",
    blocks: [
      paragraph(
        "If your breach of these terms leads to a claim against us, you agree to cover our reasonable costs of dealing with it.",
      ),
    ],
  },
  {
    id: "privacy",
    title: "Your privacy",
    blocks: [
      paragraph("How we handle your personal data is explained in our ", link("Privacy Policy", PRIVACY_HREF), "."),
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    blocks: [
      paragraph(
        "We may update these terms. When we do, we change the date at the top of this page. If you keep using the website after that, the new terms apply.",
      ),
    ],
  },
  {
    id: "law-and-disputes",
    title: "Governing law and disputes",
    blocks: [
      paragraph(
        `These terms are governed by the laws of India. If you have a complaint, write to us first and we will try to resolve it within 30 days. If we cannot, the courts in ${BUSINESS.courtsCity} have exclusive jurisdiction.`,
      ),
    ],
  },
  {
    id: "contact",
    title: "Contact",
    blocks: [list([`Email: ${BUSINESS.email}`], [`Address: ${BUSINESS.legalName}, ${BUSINESS.address}`])],
  },
];
