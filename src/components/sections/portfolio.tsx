import { ArrowUpRight } from "lucide-react";
import { BOOKSY_URL, PORTFOLIO } from "@/lib/site-data";
import { delay, useReveal } from "@/lib/motion";
import { SectionLabel } from "./services";

export function Portfolio() {
  const introRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const footRef = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-[clamp(48px,8vh,88px)] sm:px-8">
        <div ref={introRef} className="reveal-up">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="display-serif mt-4 text-[clamp(36px,5vw,56px)] font-semibold text-foreground">
            Recent <span className="font-medium italic text-accent">work</span>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-wipe mt-10 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {PORTFOLIO.map((p, i) => (
            <figure
              key={p.label}
              className="gallery-tile relative aspect-[3/4] w-full overflow-hidden border border-border bg-card"
              style={delay(i * 90)}
              aria-label={p.alt}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: (p as { pos?: string }).pos || "50% 50%" }}
              />
              <figcaption className="sr-only">{p.label}</figcaption>
            </figure>
          ))}
        </div>

        <div ref={footRef} className="reveal-up">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="book-link arrow-link mt-10 inline-flex items-center gap-2 border-b border-primary pb-1 text-[12px] font-semibold tracking-wide-2 text-primary uppercase"
          >
            See 50+ more on Booksy <ArrowUpRight size={14} className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
