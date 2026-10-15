import { Container } from "@/components/brand/Container";
import { Button } from "@/components/ui/button";
import { JOIN_HREF, MAIN_NAV } from "@/content/navigation";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-rule bg-paper">
      <Container className="flex h-header items-center justify-between gap-5">
        <Logo />
        <div className="flex items-center gap-3 min-[861px]:gap-7">
          <nav aria-label="Main" className="hidden items-center gap-7 min-[861px]:flex">
            {MAIN_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-ink-2 no-underline hover:text-ink hover:underline hover:decoration-2 hover:underline-offset-[6px]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild variant="ink" size="cta-sm">
            <a href={JOIN_HREF}>Get early access</a>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
