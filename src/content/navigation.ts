export type NavLink = Readonly<{ href: string; label: string }>;

export const SECTION_IDS = {
  leak: "leak",
  how: "how",
  features: "features",
  pricing: "pricing",
  faq: "faq",
  join: "join",
} as const;

export const MAIN_NAV: ReadonlyArray<NavLink> = [
  { href: `#${SECTION_IDS.how}`, label: "How it works" },
  { href: `#${SECTION_IDS.features}`, label: "Features" },
  { href: `#${SECTION_IDS.pricing}`, label: "Pricing" },
  { href: `#${SECTION_IDS.faq}`, label: "FAQ" },
];

export const FOOTER_NAV: ReadonlyArray<NavLink> = [
  { href: `#${SECTION_IDS.how}`, label: "How it works" },
  { href: `#${SECTION_IDS.pricing}`, label: "Pricing" },
  { href: `#${SECTION_IDS.faq}`, label: "FAQ" },
  { href: `#${SECTION_IDS.join}`, label: "Early access" },
];

export const JOIN_HREF = `#${SECTION_IDS.join}`;
