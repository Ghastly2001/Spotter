import { Container } from "@/components/brand/Container";
import { Highlight } from "@/components/brand/Highlight";
import { Lede, TextLink } from "@/components/brand/Typography";
import { Button } from "@/components/ui/button";
import { JOIN_HREF, SECTION_IDS } from "@/content/navigation";
import { FOUNDING_OFFER, PRICES } from "@/content/pricing";
import { formatRupees } from "@/lib/format";
import { HeroVisual } from "./HeroVisual";

const HERO_HIGHLIGHT_DELAY_MS = 500;

export function Hero() {
  return (
    <section className="pt-[clamp(32px,5vw,80px)] pb-[clamp(72px,9vw,128px)]">
      <Container className="grid items-center gap-[clamp(40px,5vw,80px)] min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="grid max-w-[640px] gap-7 min-[961px]:max-w-[560px]">
          <h1 className="text-[clamp(2.6rem,5vw,4.4rem)] leading-none tracking-[-0.035em]">
            Members don’t quit loudly. They just stop coming.
          </h1>
          <Lede>
            Spotter watches your attendance, flags{" "}
            <Highlight delayMs={HERO_HIGHLIGHT_DELAY_MS}>the members who are slipping</Highlight>, and brings them back
            with a WhatsApp message from your gym’s own number. Renewals go on UPI AutoPay, so nobody chases fees at the
            counter.
          </Lede>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button asChild variant="ink" size="cta">
              <a href={JOIN_HREF}>Join the founding {FOUNDING_OFFER.spots}</a>
            </Button>
            <TextLink href={`#${SECTION_IDS.leak}`}>Work out what you’re losing</TextLink>
          </div>
          <p className="max-w-[46ch] text-[0.9375rem] text-ink-3">
            Early access for gyms, studios and academies in India. The first {FOUNDING_OFFER.spots} gyms get setup and their first month free, then pay{" "}
            {formatRupees(PRICES.founding)} a month, locked for as long as they stay.
          </p>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
