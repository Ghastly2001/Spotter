import Link from "next/link";
import { Container } from "@/components/brand/Container";
import { FOOTER_NAV } from "@/content/navigation";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const COPYRIGHT_YEAR = 2026;

export function SiteFooter() {
  return (
    <footer className="border-t border-rule py-9">
      <Container className="flex flex-wrap items-center justify-between gap-5 text-[0.9375rem] text-ink-2">
        <Logo />
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          {FOOTER_NAV.map((link) => (
            <Link key={link.href} href={link.href} className="no-underline hover:underline hover:underline-offset-4">
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="inline-flex items-center gap-3">
          © {COPYRIGHT_YEAR} Spotter. Made for gyms in India.
          <ThemeToggle />
        </span>
      </Container>
    </footer>
  );
}
