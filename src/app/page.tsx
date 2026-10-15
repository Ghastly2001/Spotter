import { Audiences } from "@/components/sections/audiences/Audiences";
import { Comparison } from "@/components/sections/comparison/Comparison";
import { DayTimeline } from "@/components/sections/day/DayTimeline";
import { EverydayFeatures } from "@/components/sections/everyday/EverydayFeatures";
import { Faq } from "@/components/sections/faq/Faq";
import { FeatureDeepDives } from "@/components/sections/features/FeatureDeepDives";
import { Hero } from "@/components/sections/hero/Hero";
import { JoinSection } from "@/components/sections/join/JoinSection";
import { LeakSection } from "@/components/sections/leak/LeakSection";
import { Pricing } from "@/components/sections/pricing/Pricing";
import { RegisterImport } from "@/components/sections/register/RegisterImport";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <LeakSection />
        <DayTimeline />
        <FeatureDeepDives />
        <EverydayFeatures />
        <RegisterImport />
        <Audiences />
        <Pricing />
        <Comparison />
        <Faq />
        <JoinSection />
      </main>
      <SiteFooter />
    </>
  );
}
