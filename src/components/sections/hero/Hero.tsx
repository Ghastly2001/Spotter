import { Container } from "@/components/brand/Container";
import { Highlight } from "@/components/brand/Highlight";
import { Button } from "@/components/ui/button";
import { JOIN_HREF } from "@/content/navigation";
import { FOUNDING_OFFER } from "@/content/pricing";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroStats } from "./HeroStats";
import { HeroVisual } from "./HeroVisual";

const HERO_HIGHLIGHT_DELAY_MS = 500;

export function Hero() {
  return (
    <section data-hero className="relative isolate -mt-[calc(var(--header-h)+1px)] overflow-hidden bg-navy text-on-navy [&_:focus-visible]:outline-marker">
      <HeroBackdrop />
      <Container className="grid gap-[clamp(40px,5vw,72px)] pt-[calc(var(--header-h)+1px+clamp(48px,6vw,104px))] pb-[clamp(40px,5vw,72px)]">
        <div className="grid items-end gap-[clamp(40px,5vw,80px)] min-[961px]:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
          <div className="grid max-w-[640px] gap-7 min-[961px]:max-w-[560px]">
            <h1 className="text-[clamp(2.6rem,5vw,4.4rem)] leading-none tracking-[-0.035em]">
              Members don’t quit loudly. They just stop coming.
            </h1>
            <p className="max-w-[56ch] text-[clamp(1.125rem,1.4vw,1.3rem)] leading-[1.55] text-on-navy-muted">
              Spotter watches your attendance, flags{" "}
              <Highlight delayMs={HERO_HIGHLIGHT_DELAY_MS}>the members who are slipping</Highlight>, and brings them back
              with a WhatsApp message from your gym’s own number. Renewals go on UPI AutoPay, so nobody chases fees at
              the counter.
            </p>
            <div>
              <Button asChild variant="marker" size="cta">
                <a href={JOIN_HREF}>Join the founding {FOUNDING_OFFER.spots}</a>
              </Button>
            </div>
            <p className="max-w-[46ch] text-[0.9375rem] text-on-navy-muted">
              Early access for gyms, studios and academies in India.
            </p>
          </div>
          <HeroVisual />
        </div>
        <HeroStats />
      </Container>
    </section>
  );
}
