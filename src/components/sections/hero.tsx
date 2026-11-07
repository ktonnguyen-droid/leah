import { Star } from "lucide-react";
import { BOOKSY_URL, HERO_IMAGE } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-background">
      {/* DESKTOP / TABLET (md and up): Full-width background image with left-to-right readability gradient.
          Height = visible screen below the trim bar (38px) and the nav (64px) = 100svh - 102px,
          clamped to [520px, 820px] so everything fits on load even on short laptops. */}
      <div className="relative hidden w-full md:block md:h-[calc(100svh-102px)] md:min-h-[520px] md:max-h-[820px]">
        {/* Full-width photo */}
        <img
          src={HERO_IMAGE}
          alt="Leah, barber at Faded Blue Lounge in Fort Worth, standing behind her barber chair."
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "70% center" }}
        />

        {/* Readability gradient overlay:
            Ivory #fbf8f3 at 94% on far left, 60% at 38%, fully transparent by 62% across so Leah stays crisp. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(251, 248, 243, 0.94) 0%, rgba(251, 248, 243, 0.88) 22%, rgba(251, 248, 243, 0.60) 38%, rgba(251, 248, 243, 0.15) 52%, transparent 62%)",
          }}
        />

        {/* Soft bottom edge fade into the ivory page background (~80px tall) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(251, 248, 243, 1) 100%)",
          }}
        />

        {/* Text content vertically centered in the left half, within max-w-7xl page margins */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8">
          <div>
            {/* 1. Small label with short gold line */}
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="h-[1px] w-6 bg-primary" />
              <p className="text-[0.7rem] font-medium tracking-wide-2 text-primary uppercase">
                Fort Worth, Texas
              </p>
            </div>

            {/* 2 + 3. Headline on a single line: "Leah" deep aubergine + "the Barber" royal purple italic */}
            <h1 className="display-serif mt-3.5 text-[clamp(48px,min(7vw,11vh),96px)] font-medium leading-[1] text-foreground">
              Leah <span className="italic text-accent">the Barber</span>
            </h1>

            {/* 4. Intro paragraph, ~44 chars, ~3 lines */}
            <p className="mt-[18px] max-w-[44ch] text-[17px] font-light leading-[1.6] text-[#4a3d58]">
              Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials at
              Faded Blue Lounge. One chair, one barber, and the kind of detail that keeps clients
              coming back for years.
            </p>

            {/* 5. Buttons side by side, 12px between */}
            <div className="mt-[26px] flex flex-wrap items-center gap-3">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-none px-[26px] py-[15px] text-xs font-semibold tracking-wide-2 uppercase transition-colors"
              >
                Reserve Your Chair
              </a>
              <a
                href="#services"
                className="border border-border bg-[#fbf8f3]/80 px-[26px] py-[15px] text-xs font-semibold tracking-wide-2 text-foreground uppercase backdrop-blur-xs transition-colors hover:bg-secondary"
              >
                View the Menu
              </a>
            </div>

            {/* 6. Rating line directly under the buttons */}
            <div className="mt-[18px] flex flex-wrap items-center gap-x-3 gap-y-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="display-serif text-lg text-foreground">5.0</span>
              <p className="text-xs tracking-wide-2 text-muted-foreground uppercase">
                from 115 verified client reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE (under 768px):
          Photo on top (420px tall, Leah at ~72% center), soft fade into ivory, text and buttons stacked below.
          Same one-line headline and tighter spacing. */}
      <div className="md:hidden">
        {/* Mobile photo container with bottom fade */}
        <div className="relative h-[420px] w-full overflow-hidden bg-secondary">
          <img
            src={HERO_IMAGE}
            alt="Leah, barber at Faded Blue Lounge in Fort Worth, standing behind her barber chair."
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ objectPosition: "72% center" }}
          />
          {/* Fade bottom of photo into ivory so it flows into the text */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(251, 248, 243, 0.7) 60%, rgba(251, 248, 243, 1) 100%)",
            }}
          />
        </div>

        {/* Mobile text stacked below on ivory background */}
        <div className="relative -mt-6 px-5 pt-2 pb-12">
          {/* Label with gold line */}
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="h-[1px] w-5 bg-primary" />
            <p className="text-[0.65rem] font-medium tracking-wide-2 text-primary uppercase">
              Fort Worth, Texas
            </p>
          </div>

          {/* One-line headline */}
          <h1 className="display-serif mt-3.5 text-[clamp(40px,12vw,72px)] font-medium leading-[1] text-foreground">
            Leah <span className="italic text-accent">the Barber</span>
          </h1>

          <p className="mt-[18px] max-w-[44ch] text-[17px] font-light leading-[1.6] text-[#4a3d58]">
            Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials at
            Faded Blue Lounge. One chair, one barber, and the kind of detail that keeps clients
            coming back for years.
          </p>

          <div className="mt-[26px] flex flex-col items-stretch gap-3">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-none px-[26px] py-[15px] text-center text-xs font-semibold tracking-wide-2 uppercase transition-colors"
            >
              Reserve Your Chair
            </a>
            <a
              href="#services"
              className="border border-border bg-card px-[26px] py-[15px] text-center text-xs font-semibold tracking-wide-2 text-foreground uppercase transition-colors hover:bg-secondary"
            >
              View the Menu
            </a>
          </div>

          <div className="mt-[18px] flex items-center gap-x-2.5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="display-serif text-base text-foreground">5.0</span>
            <p className="text-[0.65rem] tracking-wide-2 text-muted-foreground uppercase">
              from 115 verified client reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
