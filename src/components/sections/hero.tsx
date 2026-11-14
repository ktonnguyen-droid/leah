import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { BOOKSY_URL, HERO_IMAGE } from "@/lib/site-data";
import { delay, prefersReducedMotion } from "@/lib/motion";

export function Hero() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const has = (n: string) => root.classList.contains(n);
    const start = () => setEntered(true);

    // Reduced motion: never wait, show the hero immediately.
    if (prefersReducedMotion()) {
      start();
      return;
    }
    // The opening intro already opened (intro-open) or was skipped
    // (no-intro), or the intro script never ran at all (no
    // intro-on / no-intro present) — start the entrance right away.
    if (has("intro-open") || has("no-intro") || (!has("intro-on") && !has("no-intro"))) {
      start();
      return;
    }
    // The intro is active (intro-on): reveal the hero the moment it
    // opens, watched via a class mutation observer on <html>, plus a
    // backup window event ("intro:open") dispatched by the intro script.
    let done = false;
    const maybeStart = () => {
      if (done) return;
      if (has("intro-open") || has("no-intro")) {
        done = true;
        start();
        mo.disconnect();
        window.removeEventListener("intro:open", maybeStart);
      }
    };
    const mo = new MutationObserver(maybeStart);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("intro:open", maybeStart);
    return () => {
      mo.disconnect();
      window.removeEventListener("intro:open", maybeStart);
    };
  }, []);

  return (
    <section
      id="top"
      className={`relative w-full overflow-hidden bg-background ${entered ? "hero-in" : ""}`}
    >
      {/* DESKTOP / TABLET (md and up): Full-width background image with left-to-right
          readability gradient. Height = visible screen below trim bar + nav. */}
      <div className="relative hidden w-full overflow-hidden md:block md:h-[calc(100svh-102px)] md:min-h-[560px] md:max-h-[820px]">
        <img
          src={HERO_IMAGE}
          alt="Leah, barber at Faded Blue Lounge in Fort Worth, standing behind her barber chair."
          data-hero-img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="hero-photo"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            top: "auto",
            left: "auto",
            height: "136%",
            width: "auto",
            maxWidth: "none",
            maskImage: "linear-gradient(to right, transparent 0%, #000 30%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 30%)",
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
              <span className="text-lg font-medium text-foreground">5.0</span>
              <p className="text-[12px] font-semibold tracking-wide-2 text-ink uppercase">
                from 115 verified client reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE (under 768px): photo on top, text stacked below on ivory. */}
      <div className="md:hidden">
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-secondary">
          <img
            src={HERO_IMAGE}
            alt="Leah, barber at Faded Blue Lounge in Fort Worth, standing behind her barber chair."
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="hero-photo h-full w-full object-cover"
            style={{
              objectPosition: "70% 60%",
              transform: "scale(1.75)",
              transformOrigin: "96% 58%",
            }}
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
            className="hero-rise display-serif mt-[10px] text-[40px] font-semibold leading-[1] text-foreground"
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
            className="hero-rise mt-[12px] max-w-[44ch] text-[16px] font-normal leading-[1.55] text-[#2e2240]"
            style={delay(350)}
          >
            Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials at
            Faded Blue Lounge. One chair, one barber, and the kind of detail that keeps clients
            coming back for years.
          </p>

          <div
            className="hero-rise mt-[18px] flex flex-row items-stretch gap-[10px]"
            style={delay(430)}
          >
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 rounded-none px-2 py-[15px] text-center text-[11px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap transition-colors"
            >
              Reserve Your Chair
            </a>
            <a
              href="#services"
              className="flex-1 border border-border bg-card px-2 py-[15px] text-center text-[11px] font-semibold tracking-[0.12em] text-foreground uppercase whitespace-nowrap transition-colors hover:bg-secondary"
            >
              View the Menu
            </a>
          </div>

          <div className="hero-rise mt-[16px] flex items-center gap-x-2" style={delay(510)}>
            <div className="flex shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} className="fill-gold-star text-gold-star" />
              ))}
            </div>
            <span className="shrink-0 text-[11px] font-medium text-foreground">5.0</span>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-ink uppercase">
              from 115 verified client reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
