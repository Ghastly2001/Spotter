import Link from "next/link";
import { Container } from "@/components/brand/Container";
import { FOOTER_NAV } from "@/content/navigation";
import { FooterWordmark } from "./FooterWordmark";
import { ThemeToggle } from "./ThemeToggle";

const COPYRIGHT_YEAR = 2026;

export function SiteFooter() {
  return (
    <footer className="grain glow-bottom-left on-media border-t border-on-navy-rule bg-navy pt-[clamp(48px,7vw,96px)] pb-6 text-[0.9375rem]">
      <Container className="grid gap-[clamp(40px,6vw,88px)]">
        <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-8">
          <p className="m-0 max-w-[22ch] font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.1] font-bold tracking-[-0.02em] text-on-navy">
            Members don’t quit loudly. They just stop coming.
          </p>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-14 gap-y-3 text-on-navy-muted">
            {FOOTER_NAV.map((link) => (
              <Link key={link.href} href={link.href} className="no-underline transition-colors hover:text-marker">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <FooterWordmark />
      </Container>
      <Container className="mt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-on-navy-rule pt-5 text-on-navy-muted">
          <span>© {COPYRIGHT_YEAR} Spotter. Made for gyms in India.</span>
          <ThemeToggle />
        </div>
      </Container>
    </footer>
  );
}
