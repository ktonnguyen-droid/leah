import { Star } from "lucide-react";
import { BOOKSY_URL, REVIEWS } from "@/lib/site-data";
import { SectionLabel } from "./services";

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Client Reviews</SectionLabel>
        <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
          Five stars. Every one.
        </h2>

        <div className="mt-6 flex items-center gap-4">
          <span className="display-serif text-4xl text-foreground">5.0</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="fill-accent text-accent" />
            ))}
          </div>
          <span className="text-xs tracking-wide-2 text-muted-foreground uppercase">
            115 reviews on Booksy
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col border border-border bg-card p-7"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="display-serif mt-5 flex-1 text-lg italic leading-relaxed text-foreground">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold tracking-wide-2 text-foreground uppercase">
                  {r.name}
                </div>
                <div className="mt-1 text-[0.6rem] tracking-wide-2 text-muted-foreground uppercase">
                  {r.service}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block border-b border-accent pb-0.5 text-[0.7rem] font-semibold tracking-wide-2 text-accent uppercase"
        >
          Read all 115 reviews on Booksy
        </a>
      </div>
    </section>
  );
}
