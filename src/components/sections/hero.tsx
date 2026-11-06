import { Star } from "lucide-react";
import { BOOKSY_URL, HERO_IMAGE } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      {/* soft lavender glow, top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 88% 8%, color-mix(in oklab, #6e5a93 30%, transparent), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-[55fr_45fr] lg:gap-10 lg:min-h-[560px] lg:max-h-[820px] lg:h-[calc(100svh-64px)]">
        {/* Right: hero photo + stat strip (photo first on mobile) */}
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

          <div className="mt-8 grid grid-cols-3 divide-x divide-border border-y border-border">
            <Stat value="5.0" label="Average Rating" />
            <Stat value="115" label="Five-Star Reviews" />
            <Stat value="9 pm" label="Open Late" />
          </div>
        </div>

        {/* Left: copy */}
        <div className="order-2 lg:order-1">
          <p className="text-[0.7rem] font-medium tracking-wide-2 text-muted-foreground uppercase">
            Fort Worth, Texas · By Appointment
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

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <span className="display-serif text-3xl text-foreground">5.0</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
            </div>
            <p className="text-xs tracking-wide-2 text-muted-foreground uppercase">
              from 115 verified client reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-3 py-5 text-center">
      <div className="display-serif text-2xl text-foreground sm:text-3xl">{value}</div>
      <div className="mt-1 text-[0.55rem] tracking-mega text-muted-foreground uppercase">
        {label}
      </div>
    </div>
  );
}
