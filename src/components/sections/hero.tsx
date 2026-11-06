import { Star } from "lucide-react";
import { BOOKSY_URL, HERO_IMAGE } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden surface-dark"
      style={{
        background: "radial-gradient(ellipse at 75% 40%, #4A2A6B 0%, #2A1640 55%, #1E1030 100%)",
      }}
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-[55fr_45fr] lg:gap-10 lg:min-h-[560px] lg:max-h-[820px] lg:h-[calc(100svh-64px)]">
        {/* Right: hero photo (photo first on mobile) */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="photo-box aspect-[4/3] w-full max-h-[45svh] overflow-hidden border border-border bg-secondary lg:aspect-[4/5] lg:max-h-[calc(100svh-260px)]">
              <img
                src={HERO_IMAGE}
                alt="Leah Bernal, professional barber, at her chair in Fort Worth"
                className="h-full w-full object-cover"
                style={{ objectPosition: "30% 35%" }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden bg-background/90 px-4 py-3 backdrop-blur-sm sm:block">
              <p className="text-[0.6rem] tracking-mega text-muted-foreground uppercase">
                Most Booked
              </p>
              <p className="display-serif text-lg text-foreground">Haircut & Beard Trim</p>
              <p className="text-xs text-primary">$45 · one hour</p>
            </div>
          </div>
        </div>

        {/* Left: copy */}
        <div className="order-2 lg:order-1">
          <p className="text-[0.7rem] font-medium tracking-wide-2 text-muted-foreground uppercase">
            Fort Worth, Texas · By Appointment · Open Late
          </p>

          <h1 className="display-serif mt-6 text-[clamp(64px,11vh,112px)] leading-[0.95] text-foreground">
            Leah
          </h1>
          <p className="display-serif mt-2 text-[clamp(28.8px,4.95vh,50.4px)] italic text-accent">
            the Barber
          </p>

          <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials at
            Faded Blue Lounge. One chair, one barber, and the kind of detail that keeps clients
            coming back for years.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-none bg-primary px-7 py-3.5 text-xs font-semibold tracking-wide-2 text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Reserve Your Chair
            </a>
            <a
              href="#services"
              className="border border-border px-7 py-3.5 text-xs font-semibold tracking-wide-2 text-foreground uppercase transition-colors hover:bg-secondary"
            >
              View the Menu
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
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
    </section>
  );
}
