"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MAIN_NAV } from "@/content/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon-lg" aria-label="Open menu" className="size-11 border-rule min-[861px]:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="bg-paper pt-[calc(env(safe-area-inset-top,0px)+16px)]">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav aria-label="Mobile" className="px-[max(var(--gutter-x),env(safe-area-inset-left,0px))] pb-4">
          {MAIN_NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-rule py-4 text-lg font-semibold no-underline last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
