import { Anek_Devanagari, Anek_Latin, Kalam, Mukta } from "next/font/google";

export const anekLatin = Anek_Latin({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-anek-latin",
  display: "swap",
});

export const anekDevanagari = Anek_Devanagari({
  subsets: ["devanagari"],
  axes: ["wdth"],
  variable: "--font-anek-devanagari",
  display: "swap",
  preload: false,
});

export const mukta = Mukta({
  subsets: ["latin", "latin-ext", "devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
});

export const kalam = Kalam({
  subsets: ["latin", "devanagari"],
  weight: ["400", "700"],
  variable: "--font-kalam",
  display: "swap",
  preload: false,
});

export const fontVariables = [anekLatin, anekDevanagari, mukta, kalam].map((font) => font.variable).join(" ");
