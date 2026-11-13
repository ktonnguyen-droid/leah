import { Star } from "lucide-react";
import { BOOKSY_URL, REVIEWS } from "@/lib/site-data";
import { delay, useReveal } from "@/lib/motion";
import { SectionLabel } from "./services";

export function Reviews() {
  const introRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const footRef = useReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="surface-dark border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-[clamp(48px,8vh,88px)] sm:px-8">
        <div ref={introRef} className="reveal-up">
          <SectionLabel>Client Reviews</SectionLabel>
          <h2 className="display-serif mt-4 text-[clamp(36px,5vw,56px)] font-semibold text-foreground">
            Five <span className="font-medium italic text-accent">stars</span>. Every one.
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-4xl font-medium text-foreground">5.0</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-[12px] font-semibold tracking-wide-2 text-muted-foreground uppercase">
              115 reviews on Booksy
            </span>
          </div>
        </div>

        <div ref={gridRef} className="reveal-stagger mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="flex flex-col border border-border bg-card p-7"
              style={delay(i * 120)}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="display-serif mt-5 flex-1 text-[24px] font-medium italic leading-relaxed text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-[14px] font-semibold tracking-wide-2 text-foreground uppercase">
                  {r.name}
                </div>
                <div className="mt-1 text-[12px] font-semibold tracking-wide-2 text-muted-foreground uppercase">
                  {r.service}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div ref={footRef} className="reveal-up">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="book-link arrow-link mt-10 inline-block border-b border-primary pb-0.5 text-[12px] font-semibold tracking-wide-2 text-primary uppercase"
          >
            Read all 115 reviews on Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
