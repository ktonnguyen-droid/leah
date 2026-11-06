import { ArrowUpRight } from "lucide-react";
import { BOOKSY_URL, PORTFOLIO } from "@/lib/site-data";
import { SectionLabel } from "./services";

export function Portfolio() {
  return (
    <section id="work" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1100px] px-5 py-[clamp(48px,8vh,88px)] sm:px-8">
        <SectionLabel>Portfolio</SectionLabel>
        <h2 className="display-serif mt-4 text-[clamp(36px,5vw,56px)] text-foreground">
          Recent <span className="italic text-accent">work</span>
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {PORTFOLIO.map((p) => (
            <figure
              key={p.label}
              className="group relative aspect-square w-full overflow-hidden border border-border bg-card"
              aria-label={p.alt}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="sr-only">{p.label}</figcaption>
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
