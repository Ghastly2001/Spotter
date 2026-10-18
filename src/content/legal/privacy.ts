import { BUSINESS, LEGAL_META } from "./business";
import { type LegalDocument, list, paragraph } from "./types";
import { PRIVACY_RIGHTS_SECTIONS } from "./privacyRights";

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  backdropWord: "Privacy",
  summary:
    "What we collect when you visit Spotter or join the founding list, why we need it, and how to see, correct or delete it. Written to meet India’s Digital Personal Data Protection Act, 2023.",
  meta: LEGAL_META,
  shortVersion: [
    ["We only collect what you type into our form: your name, gym name, city, gym size and WhatsApp number."],
    ["We use it to talk to you about Spotter. We never sell it and never use it for ads."],
    [`You can ask to see, correct or delete it at any time by writing to ${BUSINESS.email}.`],
  ],
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        paragraph(`Spotter is run by ${BUSINESS.legalName}, ${BUSINESS.address} (“Spotter”, “we”, “us”).`),
        paragraph(
          "For the personal data you share on this website, we are the Data Fiduciary under the Digital Personal Data Protection Act, 2023 (the “DPDP Act”). That means we decide why and how it is used, and we are responsible for protecting it.",
        ),
      ],
    },
    {
      id: "what-we-collect",
      title: "What we collect",
      blocks: [
        list(
          ["Founding list form: your name, your gym’s name, city, gym size and WhatsApp number."],
          ["Conversations: anything you send us on WhatsApp, by email or on a call."],
          [
            "Technical data: our hosting provider records your IP address, browser type and the pages you open, to keep the site running and secure.",
          ],
        ),
        paragraph("We do not ask for payment details, Aadhaar, PAN or health information on this website."),
      ],
    },
    {
      id: "how-we-use-it",
      title: "How we use it",
      blocks: [
        list(
          ["To contact you about early access, your start date and setting up your gym."],
          ["To understand which cities and kinds of gyms want Spotter, so we can plan the launch."],
          ["To keep the website secure and fix problems."],
          ["To meet our legal obligations."],
        ),
        paragraph("We will not use your data for any other purpose without asking you first."),
      ],
    },
    {
      id: "consent",
      title: "Your consent",
      blocks: [
        paragraph(
          "When you submit the founding list form, you agree to us using your details for the purposes above. You can withdraw that consent at any time, and it is as easy as giving it: reply “STOP” on WhatsApp or write to ",
          BUSINESS.email,
          ".",
        ),
        paragraph(
          "Once you withdraw, we stop using your data and delete it unless the law requires us to keep it. Anything we did before you withdrew remains lawful.",
        ),
      ],
    },
    {
      id: "sharing",
      title: "Who we share it with",
      blocks: [
        paragraph("We never sell or rent your personal data. We share it only with:"),
        list(
          [
            "Service providers that run parts of Spotter for us, such as website hosting, the database that stores sign-ups, and messaging. They may use your data only to provide their service to us.",
          ],
          ["Government bodies, courts or regulators, when the law requires it."],
        ),
      ],
    },
    {
      id: "storage",
      title: "Where your data is stored",
      blocks: [
        paragraph(
          "Your data may be stored on servers in India or abroad, with providers that are required to protect it. We follow any restrictions the Government of India sets on transferring personal data outside the country.",
        ),
      ],
    },
    ...PRIVACY_RIGHTS_SECTIONS,
  ],
};
