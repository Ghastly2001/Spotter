/** Looping hero footage under a navy scrim. The poster shows while it loads and when motion is reduced. */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 bg-navy bg-[url('/hero/hero-poster.jpg')] bg-cover bg-center">
      <video
        className="size-full object-cover brightness-125 saturate-110 motion-reduce:hidden"
        src="/hero/hero-bg.mp4"
        poster="/hero/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        tabIndex={-1}
      />
      <div className="hero-scrim absolute inset-0" />
    </div>
  );
}
