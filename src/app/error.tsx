"use client";

import { useEffect } from "react";
import { Container } from "@/components/brand/Container";
import { Button } from "@/components/ui/button";

export type ErrorPageProps = Readonly<{
  error: Error & { digest?: string };
  retry: () => void;
}>;

export default function ErrorPage({ error, retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="py-section">
      <Container className="grid max-w-[720px] justify-items-start gap-5">
        <h1 className="text-[clamp(2rem,4vw,3rem)]">This page didn’t load properly.</h1>
        <p className="text-ink-2">Something went wrong on our side. Try again, and if it keeps happening, refresh the page.</p>
        <Button variant="marker" size="cta" onClick={retry}>
          Try again
        </Button>
      </Container>
    </main>
  );
}
