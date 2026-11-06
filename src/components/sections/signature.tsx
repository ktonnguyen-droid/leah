import { BOOKSY_URL, HEAD_SHAVE_IMAGE, FACIAL_IMAGE } from "@/lib/site-data";
import { SectionLabel } from "./services";

const SIGNATURE = [
  {
    kicker: "Hot Lather Skin",
    title: "Head Shave & Shave",
    price: "$75",
    duration: "60 Minutes",
    body: "A full straight razor head shave with warm lather, finished with a clean face shave. Smooth from crown to chin. Also offered as head shave only, or head shave with beard.",
    src: HEAD_SHAVE_IMAGE,
    alt: "Hot lather head shave by Leah Bernal in Fort Worth",
  },
  {
    kicker: "Hot Lather Skin",
    title: "Dermalogica Facial",
    price: "$95",
    duration: "80 Minutes",
    body: "A professional six-step facial using Dermalogica products. Deep cleanse, exfoliation and treatment that leaves your skin as sharp as your fade.",
    src: FACIAL_IMAGE,
    alt: "Dermalogica facial treatment by Leah Bernal in Fort Worth",
  },
];

export function Signature() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Signature Services</SectionLabel>
        <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
          Worth the <span className="italic text-accent">hour</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
          Two services that go past the basics. Book one as a reset, or pair it with your next cut.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {SIGNATURE.map((s) => (
            <article key={s.title} className="flex flex-col">
              <div className="photo-box aspect-[4/3] w-full overflow-hidden border border-border bg-card">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-6 text-[0.6rem] tracking-mega text-primary uppercase">{s.kicker}</p>
              <h3 className="display-serif mt-2 text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                <div>
                  <span className="display-serif text-3xl text-primary">{s.price}</span>
                  <span className="ml-3 text-[0.6rem] tracking-wide-2 text-muted-foreground uppercase">
                    {s.duration}
                  </span>
                </div>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-none bg-primary px-5 py-2.5 text-[0.65rem] font-semibold tracking-wide-2 text-primary-foreground uppercase transition-opacity hover:opacity-90"
                >
                  Book
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
