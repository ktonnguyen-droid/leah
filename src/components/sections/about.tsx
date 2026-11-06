import { SectionLabel } from "./services";

const TRAITS = [
  { label: "Detail", body: "Line-ups and beard work finished with a razor." },
  { label: "Family", body: "Kids cuts and dads in the same afternoon." },
  { label: "Full Service", body: "Cuts, shaves, scalp care and facials in one chair." },
];

export function About() {
  return (
    <section id="about" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <div className="photo-box aspect-[4/5] w-full border border-border bg-secondary">
            <span className="photo-box-label">Portrait</span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionLabel>Meet Your Barber</SectionLabel>
          <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            Leah Bernal
          </h2>

          <p className="display-serif mt-4 text-lg italic text-accent">
            Clients come to Faded Blue Lounge for a clean cut.
          </p>
          <p className="display-serif text-lg italic text-accent">
            They stay for the experience in Leah's chair.
          </p>

          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
            From a kid's first real haircut to a full hot lather head shave,
            every appointment gets the same attention to detail. Fathers bring
            their sons. First-timers become regulars. That is how a barber earns
            115 reviews without a single one under five stars.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
            {TRAITS.map((t) => (
              <div key={t.label} className="bg-card p-6">
                <p className="text-[0.6rem] tracking-mega text-accent uppercase">
                  {t.label}
                </p>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
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
