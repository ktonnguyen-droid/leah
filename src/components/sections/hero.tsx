import { Star } from "lucide-react";
import { BOOKSY_URL, HERO_IMAGE } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      {/* soft glows: lavender behind the photo, faint gold in the bottom-left */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[-12%] top-[2%] h-[58%] w-[46%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, #6a3d9e 22%, transparent), transparent 70%)",
            filter: "blur(26px)",
          }}
        />
        <div
          className="absolute bottom-[-8%] left-[-10%] h-[42%] w-[36%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, #a07728 16%, transparent), transparent 70%)",
            filter: "blur(28px)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-[clamp(48px,8vh,88px)] sm:px-8 lg:grid-cols-[55fr_45fr] lg:gap-10 lg:min-h-[560px] lg:max-h-[820px] lg:py-0 lg:h-[calc(100svh-64px)]">
        {/* Right: hero photo (photo first on mobile) */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="photo-box aspect-[4/3] w-full max-h-[45svh] overflow-hidden border-[5px] border-double border-primary bg-secondary lg:aspect-[4/5] lg:max-h-[calc(100svh-260px)]">
              <img
                src={HERO_IMAGE}
                alt="Leah Bernal, professional barber, at her chair in Fort Worth"
                className="h-full w-full object-cover"
                style={{ objectPosition: "30% 35%" }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden bg-white px-4 py-3 shadow-xl sm:block">
              <p className="text-[0.6rem] tracking-mega text-muted-foreground uppercase">
                Most Booked
              </p>
              <p className="display-serif text-lg text-foreground">Haircut &amp; Beard Trim</p>
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
              className="btn-primary rounded-none px-7 py-3.5 text-xs font-semibold tracking-wide-2 uppercase transition-colors"
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
