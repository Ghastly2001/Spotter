import { BUSINESS, LEGAL_META } from "./business";
import { type LegalDocument, list, paragraph } from "./types";
import { TERMS_GENERAL_SECTIONS } from "./termsGeneral";

export const TERMS_OF_USE: LegalDocument = {
  title: "Terms of Use",
  backdropWord: "Terms",
  summary:
    "The rules for using this website and joining the Spotter founding list. Using the Spotter app will be covered by a separate subscription agreement when it launches.",
  meta: LEGAL_META,
  shortVersion: [
    ["Browsing the site and joining the founding list are free."],
    ["Joining the list does not commit you to pay anything. We confirm the price in writing before you are ever charged."],
    ["The gyms, names and numbers in our screenshots are examples."],
  ],
  sections: [
    {
      id: "about",
      title: "About these terms",
      blocks: [
        paragraph(
          `These terms are an agreement between you and ${BUSINESS.legalName} (“Spotter”, “we”, “us”). By using this website or joining the founding list, you accept them. If you do not agree, please do not use the website.`,
        ),
      ],
    },
    {
      id: "eligibility",
      title: "Who can use Spotter",
      blocks: [
        paragraph(
          "You must be 18 or older and able to enter a contract under Indian law. If you join on behalf of a gym or business, you confirm that you are allowed to act for it.",
        ),
      ],
    },
    {
      id: "founding-list",
      title: "The founding list",
      blocks: [
        list(
          ["Reserving a spot is free and creates no obligation for you or for us."],
          ["We will contact you on the WhatsApp number you give us."],
          ["The founding price applies to the first 100 gyms we confirm. We may close the list once it is full."],
          ["One founding spot per gym business. We may decline a sign-up that uses false or someone else’s details."],
          ["We confirm the exact price, what it includes and your start date in writing before you pay anything."],
        ),
      ],
    },
    {
      id: "product-and-pricing",
      title: "Product information and pricing",
      blocks: [
        paragraph(
          "Spotter is still being built. Features described on this website may change, arrive in stages or launch in some cities first.",
        ),
        paragraph(
          "Prices are in Indian rupees. Taxes such as GST, where they apply, are shown on your quote and invoice. Third-party charges, such as WhatsApp’s per-message fees, are shown separately.",
        ),
      ],
    },
    {
      id: "examples",
      title: "Examples and the calculator",
      blocks: [
        paragraph(
          "The gyms, members, chats and numbers shown in our screenshots are illustrative. The revenue calculator gives an estimate from the numbers you enter. It is not a promise of results or financial advice.",
        ),
      ],
    },
    {
      id: "acceptable-use",
      title: "Using the website properly",
      blocks: [
        paragraph("You agree not to:"),
        list(
          ["Break any law while using the website."],
          ["Submit someone else’s details, or pretend to be someone else."],
          ["Try to break into, overload or disrupt the website or our systems."],
          ["Copy or scrape the website’s content with automated tools."],
        ),
      ],
    },
    {
      id: "intellectual-property",
      title: "Our content",
      blocks: [
        paragraph(
          `The Spotter name, logo, design, text and product screens belong to ${BUSINESS.legalName} or the people who license them to us. You may view them to evaluate Spotter. Please ask before copying or reusing them.`,
        ),
      ],
    },
    ...TERMS_GENERAL_SECTIONS,
  ],
};
