import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { BOOKSY_URL, HERO_IMAGE } from "@/lib/site-data";
import { CUT_DURATION_MS, delay, prefersReducedMotion } from "@/lib/motion";

export function Hero({ cutActive }: { cutActive: boolean }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setEntered(true);
      return;
    }
    // Start the hero entrance right after the cut opens (first visit),
    // or immediately on repeat visits.
    const ms = cutActive ? CUT_DURATION_MS : 0;
    const t = window.setTimeout(() => setEntered(true), ms);
    return () => window.clearTimeout(t);
  }, [cutActive]);

  return (
    <section
      id="top"
      className={`relative w-full overflow-hidden bg-background ${entered ? "hero-in" : ""}`}
    >
      {/* DESKTOP / TABLET (md and up): Full-width background image with left-to-right
          readability gradient. Height = visible screen below trim bar + nav. */}
      <div className="relative hidden w-full md:block md:h-[calc(100svh-102px)] md:min-h-[520px] md:max-h-[820px]">
        <img
          src={HERO_IMAGE}
          alt="Leah, barber at Faded Blue Lounge in Fort Worth, standing behind her barber chair."
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="hero-photo absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "70% center" }}
        />

        {/* Readability gradient overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(251, 248, 243, 0.94) 0%, rgba(251, 248, 243, 0.88) 22%, rgba(251, 248, 243, 0.60) 38%, rgba(251, 248, 243, 0.15) 52%, transparent 62%)",
          }}
        />

        {/* Soft bottom edge fade into the ivory page background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(251, 248, 243, 1) 100%)",
          }}
        />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="hero-line h-[1px] w-6 bg-primary" />
              <p
                className="hero-rise text-[12px] font-semibold tracking-wide-2 text-primary uppercase"
                style={delay(0)}
              >
                Fort Worth, Texas
              </p>
            </div>

            <h1
              className="hero-rise display-serif mt-3.5 text-[clamp(48px,min(7vw,11vh),96px)] font-semibold leading-[1] text-foreground"
              style={delay(150)}
            >
              Leah{" "}
              <span
                className="hero-rise inline-block font-medium italic text-accent"
                style={delay(270)}
              >
                the Barber
              </span>
            </h1>

            <p
              className="hero-rise mt-[18px] max-w-[44ch] text-[17px] font-normal leading-[1.65] text-[#2e2240]"
              style={delay(350)}
            >
              Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials at
              Faded Blue Lounge. One chair, one barber, and the kind of detail that keeps clients
              coming back for years.
            </p>

            <div
              className="hero-rise mt-[26px] flex flex-wrap items-center gap-3"
              style={delay(430)}
            >
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary arrow-link rounded-none px-[26px] py-[15px] text-[12px] font-semibold tracking-wide-2 uppercase transition-colors"
              >
                Reserve Your Chair
              </a>
              <a
                href="#services"
                className="border border-border bg-[#fbf8f3]/80 px-[26px] py-[15px] text-[12px] font-semibold tracking-wide-2 text-foreground uppercase backdrop-blur-xs transition-colors hover:bg-secondary"
              >
                View the Menu
              </a>
            </div>

            <div
              className="hero-rise mt-[18px] flex flex-wrap items-center gap-x-3 gap-y-2"
              style={delay(510)}
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-star text-gold-star" />
                ))}
              </div>
              <span className="display-serif text-lg text-foreground">5.0</span>
              <p className="text-[12px] font-semibold tracking-wide-2 text-ink uppercase">
                from 115 verified client reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE (under 768px): photo on top, text stacked below on ivory. */}
      <div className="md:hidden">
        <div className="relative h-[420px] w-full overflow-hidden bg-secondary">
          <img
            src={HERO_IMAGE}
            alt="Leah, barber at Faded Blue Lounge in Fort Worth, standing behind her barber chair."
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="hero-photo h-full w-full object-cover"
            style={{ objectPosition: "72% center" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(251, 248, 243, 0.7) 60%, rgba(251, 248, 243, 1) 100%)",
            }}
          />
        </div>

        <div className="relative -mt-6 px-5 pt-2 pb-12">
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="hero-line h-[1px] w-5 bg-primary" />
            <p
              className="hero-rise text-[12px] font-semibold tracking-wide-2 text-primary uppercase"
              style={delay(0)}
            >
              Fort Worth, Texas
            </p>
          </div>

          <h1
            className="hero-rise display-serif mt-3.5 text-[clamp(40px,12vw,72px)] font-semibold leading-[1] text-foreground"
            style={delay(150)}
          >
            Leah{" "}
            <span
              className="hero-rise inline-block font-medium italic text-accent"
              style={delay(270)}
            >
              the Barber
            </span>
          </h1>

          <p
            className="hero-rise mt-[18px] max-w-[44ch] text-[16px] font-normal leading-[1.65] text-[#2e2240]"
            style={delay(350)}
          >
            Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials at
            Faded Blue Lounge. One chair, one barber, and the kind of detail that keeps clients
            coming back for years.
          </p>

          <div className="hero-rise mt-[26px] flex flex-col items-stretch gap-3" style={delay(430)}>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-none px-[26px] py-[15px] text-center text-[12px] font-semibold tracking-wide-2 uppercase transition-colors"
            >
              Reserve Your Chair
            </a>
            <a
              href="#services"
              className="border border-border bg-card px-[26px] py-[15px] text-center text-[12px] font-semibold tracking-wide-2 text-foreground uppercase transition-colors hover:bg-secondary"
            >
              View the Menu
            </a>
          </div>

          <div className="hero-rise mt-[18px] flex items-center gap-x-2.5" style={delay(510)}>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-gold-star text-gold-star" />
              ))}
            </div>
            <span className="display-serif text-base text-foreground">5.0</span>
            <p className="text-[12px] font-semibold tracking-wide-2 text-ink uppercase">
              from 115 verified client reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
