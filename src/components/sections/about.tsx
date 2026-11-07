import { ABOUT_IMAGE } from "@/lib/site-data";
import { useReveal } from "@/lib/motion";
import { SectionLabel } from "./services";

const TRAITS = [
  { label: "Detail", body: "Line-ups and beard work finished with a razor." },
  { label: "Family", body: "Kids cuts and dads in the same afternoon." },
  { label: "Full Service", body: "Cuts, shaves, scalp care and facials in one chair." },
];

export function About() {
  const photoRef = useReveal<HTMLDivElement>();
  const textRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-[clamp(48px,8vh,88px)] sm:px-8 lg:grid-cols-[45fr_55fr] lg:gap-14">
        <div ref={photoRef} className="reveal-photo">
          <div className="photo-box aspect-[4/5] w-full max-h-[520px] overflow-hidden border border-border bg-secondary">
            <img
              src={ABOUT_IMAGE}
              alt="Leah performing a facial treatment at Faded Blue Lounge in Fort Worth"
              className="h-full w-full object-cover"
              style={{ objectPosition: "60% center" }}
            />
          </div>
        </div>

        <div ref={textRef} className="reveal-up">
          <SectionLabel>Meet Your Barber</SectionLabel>
          <h2 className="display-serif mt-4 text-[clamp(36px,5vw,56px)] font-semibold text-foreground">
            Leah Bernal
          </h2>

          <p className="display-serif mt-4 text-lg font-medium italic text-accent">
            Clients come to Faded Blue Lounge for a clean cut.
          </p>
          <p className="display-serif text-lg font-medium italic text-accent">
            They stay for the experience in Leah's chair.
          </p>

          <p className="mt-6 max-w-xl text-[17px] font-normal leading-[1.65] text-body-text">
            From a kid's first real haircut to a full hot lather head shave, every appointment gets
            the same attention to detail. Fathers bring their sons. First-timers become regulars.
            That is how a barber earns 115 reviews without a single one under five stars.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
            {TRAITS.map((t) => (
              <div key={t.label} className="bg-card p-6">
                <p className="text-[12px] font-semibold tracking-mega text-primary uppercase">
                  {t.label}
                </p>
                <p className="mt-3 text-[15px] font-normal leading-[1.65] text-body-text">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
