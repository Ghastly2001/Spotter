import { BUSINESS } from "./business";
import { type LegalSection, list, paragraph } from "./types";

export const PRIVACY_RIGHTS_SECTIONS: ReadonlyArray<LegalSection> = [
  {
    id: "retention",
    title: "How long we keep it",
    blocks: [
      list(
        [
          "Founding list details: until Spotter launches and for 12 months after our last conversation with you. If you become a customer, your account terms take over.",
        ],
        ["Security and server logs: as long as the law requires, usually up to one year."],
      ),
      paragraph("After that we delete your data, or remove anything that identifies you."),
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    blocks: [
      paragraph("Under the DPDP Act you can ask us to:"),
      list(
        ["Give you a summary of the personal data we hold about you and how we use it."],
        ["Correct, complete or update it."],
        ["Delete it, when we no longer need it for the purpose you gave it for."],
        ["Resolve a complaint about how we handled it."],
        ["Let someone you nominate exercise these rights if you die or cannot do so yourself."],
      ),
      paragraph(`Write to ${BUSINESS.email}. We reply within 30 days.`),
    ],
  },
  {
    id: "security",
    title: "How we protect it",
    blocks: [
      list(
        ["Every page is served over an encrypted connection (HTTPS)."],
        ["Only the people who need your details to talk to you can see them."],
        ["We choose service providers with sound security practices."],
      ),
      paragraph(
        "If a breach affects your data, we will tell you and the Data Protection Board of India as the law requires, with what happened and what we are doing about it.",
      ),
    ],
  },
  {
    id: "children",
    title: "Children",
    blocks: [
      paragraph(
        "Spotter is a business tool for gym owners and is not meant for anyone under 18. We do not knowingly collect children’s data. If we find we have, we delete it.",
      ),
    ],
  },
  {
    id: "cookies",
    title: "Cookies and similar technology",
    blocks: [
      paragraph(
        "This website does not use advertising or tracking cookies. Your browser remembers whether you chose the light or dark theme; that choice stays on your device and is never sent to us.",
      ),
      paragraph("If we add analytics later, we will update this policy first."),
    ],
  },
  {
    id: "gym-members",
    title: "Gym members’ data in the Spotter app",
    blocks: [
      paragraph(
        "When the Spotter app launches, gyms will use it to manage their own members. For that data the gym is the Data Fiduciary and Spotter processes it on the gym’s behalf, under a separate agreement. If you are a gym member, contact your gym about your data.",
      ),
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    blocks: [
      paragraph(
        "If we change this policy, we will update the date at the top of this page. For important changes, we will also message the people on our founding list.",
      ),
    ],
  },
  {
    id: "contact",
    title: "Contact and grievance officer",
    blocks: [
      list(
        [`Grievance officer: ${BUSINESS.grievanceOfficer}`],
        [`Email: ${BUSINESS.email}`],
        [`Address: ${BUSINESS.legalName}, ${BUSINESS.address}`],
      ),
      paragraph(
        "If you are not satisfied with our reply, you can complain to the Data Protection Board of India.",
      ),
    ],
  },
];
