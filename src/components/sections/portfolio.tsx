import { ArrowUpRight } from "lucide-react";
import { BOOKSY_URL, PORTFOLIO } from "@/lib/site-data";
import { SectionLabel } from "./services";

export function Portfolio() {
  return (
    <section id="work" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Portfolio</SectionLabel>
        <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
          Recent work
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {PORTFOLIO.map((label) => (
            <figure
              key={label}
              className="group relative photo-box aspect-square w-full border border-border bg-card"
            >
              <span className="photo-box-label">{label}</span>
            </figure>
          ))}
        </div>

        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.7rem] font-semibold tracking-wide-2 text-accent uppercase"
        >
          See 50+ more on Booksy <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
