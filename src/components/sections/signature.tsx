import { BOOKSY_URL, HEAD_SHAVE_IMAGE, FACIAL_IMAGE } from "@/lib/site-data";
import { SectionLabel } from "./services";

const SIGNATURE = [
  {
    kicker: "Hot Lather",
    title: "Head Shave & Shave",
    price: "$75",
    duration: "60 Minutes",
    body: "A full straight razor head shave with warm lather, finished with a clean face shave. Smooth from crown to chin. Also offered as head shave only, or head shave with beard.",
    src: HEAD_SHAVE_IMAGE,
    alt: "Hot lather head shave by Leah Bernal in Fort Worth",
    pos: "center 25%",
  },
  {
    kicker: "Skin Care",
    title: "Dermalogica Facial",
    price: "$95",
    duration: "80 Minutes",
    body: "A professional six-step facial using Dermalogica products. Deep cleanse, exfoliation and treatment that leaves your skin as sharp as your fade.",
    src: FACIAL_IMAGE,
    alt: "Dermalogica facial treatment by Leah Bernal in Fort Worth",
    pos: "70% 30%",
  },
];

export function Signature() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-[clamp(48px,8vh,88px)] sm:px-8">
        <SectionLabel>Signature Services</SectionLabel>
        <h2 className="display-serif mt-4 text-[clamp(36px,5vw,56px)] font-semibold text-foreground">
          Worth the <span className="font-medium italic text-accent">hour</span>
        </h2>
        <p className="mt-4 max-w-xl text-[17px] font-normal leading-[1.65] text-body-text">
          Two services that go past the basics. Book one as a reset, or pair it with your next cut.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {SIGNATURE.map((s) => (
            <article key={s.title} className="flex flex-col">
              <div className="photo-box aspect-[16/10] w-full max-h-[320px] overflow-hidden border border-border bg-card">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: s.pos }}
                />
              </div>
              <p className="mt-5 text-[12px] font-semibold tracking-mega text-primary uppercase">
                {s.kicker}
              </p>
              <h3 className="display-serif mt-2 text-[19px] font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-[16px] font-normal leading-[1.65] text-body-text">{s.body}</p>
              <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                <div>
                  <span className="display-serif text-3xl font-semibold text-primary">
                    {s.price}
                  </span>
                  <span className="ml-3 text-[12px] font-semibold tracking-wide-2 text-duration uppercase">
                    {s.duration}
                  </span>
                </div>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary rounded-none px-5 py-2.5 text-[12px] font-semibold tracking-wide-2 uppercase transition-colors"
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
