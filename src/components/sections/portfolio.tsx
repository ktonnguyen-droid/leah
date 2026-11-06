import { ArrowUpRight } from "lucide-react";
import { BOOKSY_URL, PORTFOLIO } from "@/lib/site-data";
import { SectionLabel } from "./services";

export function Portfolio() {
  return (
    <section id="work" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Portfolio</SectionLabel>
        <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
          Recent <span className="italic text-accent">work</span>
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3">
          {PORTFOLIO.map((p) => (
            <figure
              key={p.label}
              className="group relative photo-box aspect-square w-full overflow-hidden border border-border bg-card"
              aria-label={p.alt}
            >
              <figcaption className="sr-only">{p.alt}</figcaption>
              <span className="photo-box-label">{p.label}</span>
            </figure>
          ))}
        </div>

        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 border-b border-primary pb-1 text-[0.7rem] font-semibold tracking-wide-2 text-primary uppercase"
        >
          See 50+ more on Booksy <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
