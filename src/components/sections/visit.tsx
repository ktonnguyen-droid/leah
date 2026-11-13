import { MapPin, Clock, Phone, Copy, ExternalLink } from "lucide-react";
import {
  ADDRESS,
  BOOKSY_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SHOP_TEAM_URL,
} from "@/lib/site-data";
import { delay, useReveal } from "@/lib/motion";
import { SectionLabel } from "./services";

export function Visit() {
  const introRef = useReveal<HTMLDivElement>();
  const cardsRef = useReveal<HTMLDivElement>();
  const teamRef = useReveal<HTMLDivElement>();

  return (
    <section id="visit" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-[clamp(48px,8vh,88px)] sm:px-8">
        <div ref={introRef} className="reveal-up">
          <SectionLabel>Visit</SectionLabel>
          <h2 className="display-serif mt-4 text-[clamp(36px,5vw,56px)] font-semibold text-foreground">
            Find the <span className="font-medium italic text-accent">chair</span>
          </h2>
          <p className="mt-4 max-w-xl text-[17px] font-normal leading-[1.65] text-body-text">
            Inside Faded Blue Lounge, just off Sycamore School Road in southwest Fort Worth.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="reveal-stagger mt-10 grid grid-cols-1 items-stretch gap-px border border-border bg-border md:grid-cols-3"
        >
          {/* Location */}
          <div className="flex h-full flex-col bg-card p-7" style={delay(0)}>
            <div className="flex items-center gap-2 text-primary">
              <MapPin size={16} />
              <span className="text-[12px] font-semibold tracking-mega uppercase">Location</span>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-[16px] font-normal text-foreground">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[17px] font-medium text-foreground">{ADDRESS.street}</p>
                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard?.writeText(
                      `${ADDRESS.street}, ${ADDRESS.suite}, ${ADDRESS.city}, ${ADDRESS.state} ${ADDRESS.zip}`,
                    )
                  }
                  className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide-2 text-muted-foreground uppercase hover:text-foreground"
                  title="Copy address"
                >
                  <Copy size={11} /> Copy
                </button>
              </div>
              <p>{ADDRESS.suite}</p>
              <p>
                {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
              </p>
            </div>
            <div className="mt-auto pt-6">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="book-link arrow-link inline-block border-b border-primary pb-0.5 text-[12px] font-semibold tracking-wide-2 text-primary uppercase"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex h-full flex-col bg-card p-7" style={delay(60)}>
            <div className="flex items-center gap-2 text-primary">
              <Clock size={16} />
              <span className="text-[12px] font-semibold tracking-mega uppercase">Hours</span>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-[16px] font-normal text-foreground">
              <p className="text-[17px] font-medium text-foreground">By appointment</p>
              <p className="text-muted-foreground">Open until 9 pm</p>
              <p className="mt-1 text-[14px] font-normal leading-[1.65] text-muted-foreground">
                Live availability on Booksy. Booking online is the fastest way in.
              </p>
            </div>
            <div className="mt-auto pt-6">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="book-link arrow-link inline-block border-b border-primary pb-0.5 text-[12px] font-semibold tracking-wide-2 text-primary uppercase"
              >
                See Open Times
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex h-full flex-col bg-card p-7" style={delay(120)}>
            <div className="flex items-center gap-2 text-primary">
              <Phone size={16} />
              <span className="text-[12px] font-semibold tracking-mega uppercase">Contact</span>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-[16px] font-normal text-foreground">
              <a
                href={PHONE_HREF}
                className="text-[17px] font-medium text-foreground transition-colors hover:text-primary"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-muted-foreground">Direct telephone</p>
              <p className="mt-1 text-[14px] font-normal leading-[1.65] text-muted-foreground">
                Booking online is the fastest way in.
              </p>
            </div>
            <div className="mt-auto pt-6">
              <a
                href={PHONE_HREF}
                className="book-link arrow-link inline-block border-b border-primary pb-0.5 text-[12px] font-semibold tracking-wide-2 text-primary uppercase"
              >
                Call Leah
              </a>
            </div>
          </div>
        </div>

        <div ref={teamRef} className="reveal-up">
          <a
            href={SHOP_TEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link mt-8 inline-flex items-center gap-1 text-[15px] font-normal text-muted-foreground transition-colors hover:text-foreground"
          >
            Leah works inside Faded Blue Lounge. Meet the rest of the team
            <ExternalLink size={14} className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="surface-dark relative overflow-hidden border-t border-border bg-background">
      {/* soft lavender glow behind the final call to action */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 80% 50%, color-mix(in oklab, #7A55A8 25%, transparent), transparent)",
        }}
      />
      <div
        ref={ref}
        className="reveal-up relative mx-auto max-w-4xl px-5 py-[clamp(48px,8vh,88px)] text-center sm:px-8"
      >
        <SectionLabel>Your Next Appointment</SectionLabel>
        <h2 className="display-serif mt-5 text-[clamp(36px,5vw,56px)] font-semibold leading-tight text-foreground">
          Sit down. Walk out <span className="font-medium italic text-accent">sharp</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] font-normal leading-[1.65] text-muted-foreground">
          Book online in under a minute. Pick your service, pick your time, and Leah takes it from
          there.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary arrow-link mt-9 inline-block rounded-none px-8 py-4 text-[12px] font-semibold tracking-wide-2 uppercase transition-colors"
        >
          Reserve on Booksy
        </a>
      </div>
    </section>
  );
}
