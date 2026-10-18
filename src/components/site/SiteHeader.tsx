import { Container } from "@/components/brand/Container";
import { Button } from "@/components/ui/button";
import { JOIN_HREF, MAIN_NAV } from "@/content/navigation";
import { HeaderShell } from "./HeaderShell";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

const NAV_LINK =
  "relative px-3.5 py-2 text-[0.9375rem] font-medium text-ink-2 no-underline transition-colors hover:text-ink after:absolute after:inset-x-3.5 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-marker after:transition-transform after:duration-300 after:ease-sweep after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100";

export function SiteHeader() {
  return (
    <HeaderShell>
      <Container className="flex h-header items-center justify-between gap-5 min-[861px]:grid min-[861px]:grid-cols-[1fr_auto_1fr]">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 min-[861px]:flex">
          {MAIN_NAV.map((link) => (
            <a key={link.href} href={link.href} className={NAV_LINK}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-3">
          <Button asChild variant="marker" size="cta-sm">
            <a href={JOIN_HREF}>Get early access</a>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </HeaderShell>
  );
}
