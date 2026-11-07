import { Star } from "lucide-react";
import { BOOKSY_URL, HERO_IMAGE } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-background">
      {/* DESKTOP / TABLET (md and up): Full-width background image with left-to-right readability gradient */}
      <div className="relative hidden w-full md:block md:h-[88svh] md:min-h-[620px] md:max-h-[860px]">
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
            Ivory #fbf8f3 at 92% on far left, 60% at 35%, fully transparent by 60% across so Leah stays crisp. */}
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

        {/* Text content aligned vertically in the left half, within max-w-7xl page margins */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8">
          <div className="max-w-[560px]">
            {/* 1. Small label with short gold line */}
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="h-[1px] w-6 bg-primary" />
              <p className="text-[0.7rem] font-medium tracking-wide-2 text-primary uppercase">
                Fort Worth, Texas
              </p>
            </div>

            {/* 2. Headline: "Leah" in deep aubergine, very large */}
            <h1 className="display-serif mt-4 text-[clamp(76px,10vw,140px)] font-medium leading-[0.88] text-foreground">
              Leah
            </h1>

            {/* 3. "the Barber" in royal purple italic */}
            <p className="display-serif mt-1 text-[clamp(34px,4.6vw,62px)] italic text-accent">
              the Barber
            </p>

            {/* 4. Intro paragraph in #4a3d58, max width ~46 chars */}
            <p className="mt-6 max-w-[46ch] text-base font-light leading-relaxed text-[#4a3d58]">
              Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials at
              Faded Blue Lounge. One chair, one barber, and the kind of detail that keeps clients
              coming back for years.
            </p>

            {/* 5. Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-none px-7 py-3.5 text-xs font-semibold tracking-wide-2 uppercase transition-colors"
              >
                Reserve Your Chair
              </a>
              <a
                href="#services"
                className="border border-border bg-[#fbf8f3]/80 px-7 py-3.5 text-xs font-semibold tracking-wide-2 text-foreground uppercase backdrop-blur-xs transition-colors hover:bg-secondary"
              >
                View the Menu
              </a>
            </div>

            {/* 6. Rating line */}
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
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
          Photo on top (420px tall, Leah at ~72% center), soft fade into ivory, text and buttons stacked below. */}
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

          <h1 className="display-serif mt-3 text-[72px] font-medium leading-[0.9] text-foreground">
            Leah
          </h1>
          <p className="display-serif mt-1 text-[32px] italic text-accent">the Barber</p>

          <p className="mt-5 text-sm font-light leading-relaxed text-[#4a3d58]">
            Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials at
            Faded Blue Lounge. One chair, one barber, and the kind of detail that keeps clients
            coming back for years.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-none py-3.5 text-center text-xs font-semibold tracking-wide-2 uppercase transition-colors"
            >
              Reserve Your Chair
            </a>
            <a
              href="#services"
              className="border border-border bg-card py-3.5 text-center text-xs font-semibold tracking-wide-2 text-foreground uppercase transition-colors hover:bg-secondary"
            >
              View the Menu
            </a>
          </div>

          <div className="mt-6 flex items-center gap-x-2.5">
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
