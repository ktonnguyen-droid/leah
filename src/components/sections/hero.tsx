import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BOOKSY_URL, HERO_IMAGE } from "@/lib/site-data";
import { delay, prefersReducedMotion } from "@/lib/motion";

export function Hero() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setInView(true);
      return;
    }

    const doc = document.documentElement;
    if (doc.classList.contains("intro-open") || doc.classList.contains("no-intro")) {
      setInView(true);
      return;
    }

    const onIntroOpen = () => setInView(true);
    window.addEventListener("intro:open", onIntroOpen);

    const observer = new MutationObserver(() => {
      if (doc.classList.contains("intro-open") || doc.classList.contains("no-intro")) {
        setInView(true);
        observer.disconnect();
      }
    });
    observer.observe(doc, { attributes: true, attributeFilter: ["class"] });

    const timeout = setTimeout(() => setInView(true), 2600);

    return () => {
      window.removeEventListener("intro:open", onIntroOpen);
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="top"
      className={`relative w-full overflow-hidden bg-[#fbf8f3] ${inView ? "hero-in" : ""}`}
    >
      {/* Soft lavender glow behind the photo on the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] top-[10%] h-[560px] w-[560px] rounded-full opacity-40 blur-[90px]"
        style={{
          background: "radial-gradient(circle, #bca6e3 0%, rgba(188,166,227,0) 70%)",
        }}
      />
      {/* Subtle warm gold glow in the bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[420px] w-[420px] rounded-full opacity-25 blur-[90px]"
        style={{
          background: "radial-gradient(circle, #d8b062 0%, rgba(216,176,98,0) 70%)",
        }}
      />

      {/* ============================================================
          DESKTOP (md: 768px+)
          Two-column layout: text on left (55%), framed photo on right (45%),
          vertically centered within viewport-filling container
          ============================================================ */}
      <div className="relative z-10 hidden min-h-[560px] max-h-[820px] md:flex md:h-[calc(100svh-38px-64px)] md:items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-12 items-center gap-8 px-8 lg:gap-12 lg:px-12">
          {/* Left Column: text + buttons + rating (7 cols / ~58%) */}
          <div className="col-span-7 flex flex-col justify-center">
            {/* 1. Small label */}
            <div className="hero-rise flex items-center gap-3" style={delay(0)}>
              <span className="hero-line inline-block h-[1px] w-8 bg-primary" />
              <span className="text-[12px] font-semibold tracking-wide-2 text-primary uppercase">
                Fort Worth, Texas
              </span>
            </div>

            {/* 2. Headline: one line */}
            <h1
              className="display-serif hero-rise text-[clamp(44px,min(5.5vw,9vh),80px)] font-semibold tracking-tight text-foreground"
              style={{
                lineHeight: 1.02,
                marginTop: 14,
                ...delay(100),
              }}
            >
              Leah <span className="font-normal italic text-accent">the Barber</span>
            </h1>

            {/* 3. Intro paragraph */}
            <p
              className="hero-rise text-[17px] font-normal leading-[1.6] text-hero-body"
              style={{
                maxWidth: "46ch",
                marginTop: 18,
                ...delay(200),
              }}
            >
              Master barber specializing in precision haircuts, hot lather head shaves, razor
              line-ups, and Dermalogica facials in southwest Fort Worth.
            </p>

            {/* 4. Action buttons */}
            <div
              className="hero-rise flex flex-wrap items-center gap-3"
              style={{
                marginTop: 26,
                ...delay(280),
              }}
            >
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link btn-primary inline-flex items-center gap-2 rounded-none px-[26px] py-[15px] text-[12px] font-semibold tracking-wide-2 uppercase shadow-sm"
              >
                Reserve your chair
                <ArrowRight size={13} className="btn-arrow" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-none border border-border bg-card/60 px-[26px] py-[15px] text-[12px] font-semibold tracking-wide-2 text-foreground uppercase backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
              >
                View the menu
              </a>
            </div>

            {/* 5. Rating line */}
            <div
              className="hero-rise flex items-center gap-2 text-[13px] font-semibold tracking-wide-2 text-ink uppercase"
              style={{
                marginTop: 18,
                ...delay(360),
              }}
            >
              <span className="text-[14px] text-gold-star">★★★★★</span>
              <span>5.0 from 115 verified client reviews</span>
            </div>
          </div>

          {/* Right Column: Framed portrait photo (5 cols / ~42%) */}
          <div className="col-span-5 flex justify-end">
            <div className="hero-rise relative w-full max-w-[440px]" style={delay(180)}>
              {/* Outer gold double-line decorative frame */}
              <div className="relative p-2.5 border border-primary/40 bg-card/40 shadow-xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-primary/60 bg-[#f3ece1]">
                  <img
                    data-hero-img
                    src={HERO_IMAGE}
                    alt="Fresh haircut by Leah the Barber in Fort Worth, TX"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE (under 768px)
          Text comes first, then the framed photo below the rating line
          at full width with aspect-ratio 4/5
          ============================================================ */}
      <div className="relative z-10 flex flex-col px-5 pt-8 pb-12 md:hidden">
        {/* Label */}
        <div className="hero-rise flex items-center gap-2" style={delay(0)}>
          <span className="hero-line inline-block h-[1px] w-6 bg-primary" />
          <span className="text-[11px] font-semibold tracking-wide-2 text-primary uppercase">
            Fort Worth, Texas
          </span>
        </div>

        {/* Headline: one line */}
        <h1
          className="display-serif hero-rise text-[40px] font-semibold tracking-tight text-foreground"
          style={{ lineHeight: 1.05, marginTop: 10, ...delay(80) }}
        >
          Leah <span className="font-normal italic text-accent">the Barber</span>
        </h1>

        {/* Intro paragraph */}
        <p
          className="hero-rise text-[16px] font-normal leading-[1.55] text-hero-body"
          style={{ marginTop: 12, ...delay(160) }}
        >
          Master barber specializing in precision haircuts, hot lather head shaves, razor line-ups,
          and Dermalogica facials in southwest Fort Worth.
        </p>

        {/* Buttons: side by side row */}
        <div
          className="hero-rise grid grid-cols-2 gap-[10px]"
          style={{ marginTop: 18, ...delay(240) }}
        >
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link btn-primary flex items-center justify-center gap-1 rounded-none px-2 py-[14px] text-center text-[11px] font-semibold tracking-[0.12em] whitespace-nowrap uppercase shadow-sm"
          >
            <span>Reserve your chair</span>
            <ArrowRight size={11} className="btn-arrow shrink-0" />
          </a>
          <a
            href="#services"
            className="flex items-center justify-center rounded-none border border-border bg-card/60 px-2 py-[14px] text-center text-[11px] font-semibold tracking-[0.12em] whitespace-nowrap text-foreground uppercase backdrop-blur-sm"
          >
            View the menu
          </a>
        </div>

        {/* Rating line */}
        <div
          className="hero-rise flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] text-ink uppercase"
          style={{ marginTop: 16, ...delay(320) }}
        >
          <span className="text-[12px] text-gold-star">★★★★★</span>
          <span className="truncate">5.0 from 115 verified client reviews</span>
        </div>

        {/* Framed photo below the rating line, full width with aspect-ratio 4/5 */}
        <div className="hero-rise mt-8 w-full" style={delay(380)}>
          <div className="relative p-2 border border-primary/40 bg-card/40 shadow-lg">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-primary/60 bg-[#f3ece1]">
              <img
                src={HERO_IMAGE}
                alt="Fresh haircut by Leah the Barber in Fort Worth, TX"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
