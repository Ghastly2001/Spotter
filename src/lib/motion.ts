export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function supportsInViewTracking(): boolean {
  return "IntersectionObserver" in window;
}

export function easeOutCubic(progress: number): number {
  return 1 - (1 - progress) ** 3;
}
