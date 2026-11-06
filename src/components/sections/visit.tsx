import { MapPin, Clock, Phone, Copy, ExternalLink } from "lucide-react";
import {
  ADDRESS,
  BOOKSY_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SHOP_TEAM_URL,
} from "@/lib/site-data";
import { SectionLabel } from "./services";

export function Visit() {
  return (
    <section id="visit" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-[clamp(48px,8vh,88px)] sm:px-8">
        <SectionLabel>Visit</SectionLabel>
        <h2 className="display-serif mt-4 text-[clamp(36px,5vw,56px)] text-foreground">
          Find the <span className="italic text-accent">chair</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
          Inside Faded Blue Lounge, just off Sycamore School Road in southwest Fort Worth.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {/* Location */}
          <div className="bg-card p-7">
            <div className="flex items-center gap-2 text-primary">
              <MapPin size={16} />
              <span className="text-[0.6rem] tracking-mega uppercase">Location</span>
            </div>
            <div className="mt-4 space-y-1 text-sm font-light text-foreground">
              <p>{ADDRESS.street}</p>
              <p>{ADDRESS.suite}</p>
              <p>
                {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                navigator.clipboard?.writeText(
                  `${ADDRESS.street}, ${ADDRESS.suite}, ${ADDRESS.city}, ${ADDRESS.state} ${ADDRESS.zip}`,
                )
              }
              className="mt-4 inline-flex items-center gap-1 text-[0.6rem] tracking-wide-2 text-muted-foreground uppercase hover:text-foreground"
            >
              <Copy size={11} /> Copy
            </button>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block border-b border-primary pb-0.5 text-[0.65rem] font-semibold tracking-wide-2 text-primary uppercase"
            >
              Get Directions
            </a>
          </div>

          {/* Hours */}
          <div className="bg-card p-7">
            <div className="flex items-center gap-2 text-primary">
              <Clock size={16} />
              <span className="text-[0.6rem] tracking-mega uppercase">Hours</span>
            </div>
            <p className="mt-4 text-sm font-light text-foreground">By appointment</p>
            <p className="mt-1 text-sm font-light text-muted-foreground">Open until 9 pm</p>
            <p className="mt-4 text-xs font-light leading-relaxed text-muted-foreground">
              Live availability on Booksy. Booking online is the fastest way in.
            </p>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block border-b border-primary pb-0.5 text-[0.65rem] font-semibold tracking-wide-2 text-primary uppercase"
            >
              See Open Times
            </a>
          </div>

          {/* Contact */}
          <div className="bg-card p-7">
            <div className="flex items-center gap-2 text-primary">
              <Phone size={16} />
              <span className="text-[0.6rem] tracking-mega uppercase">Contact</span>
            </div>
            <a href={PHONE_HREF} className="display-serif mt-4 block text-2xl text-foreground">
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-xs font-light text-muted-foreground">
              Booking online is the fastest way in.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-4 block border-b border-primary pb-0.5 text-[0.65rem] font-semibold tracking-wide-2 text-primary uppercase"
            >
              Call Leah
            </a>
          </div>
        </div>

        <a
          href={SHOP_TEAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          Leah works inside Faded Blue Lounge. Meet the rest of the team
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background">
      {/* lavender glow behind the final call to action */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 80% 50%, color-mix(in oklab, #6e5a93 30%, transparent), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-[clamp(48px,8vh,88px)] text-center sm:px-8">
        <SectionLabel>Your Next Appointment</SectionLabel>
        <h2 className="display-serif mt-5 text-[clamp(36px,5vw,56px)] leading-tight text-foreground">
          Sit down. Walk out <span className="italic text-accent">sharp</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
          Book online in under a minute. Pick your service, pick your time, and Leah takes it from
          there.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-none bg-primary px-8 py-4 text-xs font-semibold tracking-wide-2 text-primary-foreground uppercase transition-opacity hover:opacity-90"
        >
          Reserve on Booksy
        </a>
      </div>
    </section>
  );
}
