import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BOOKSY_URL, FILTER_TABS, SERVICES, type ServiceCategory } from "@/lib/site-data";

type FilterId = "all" | ServiceCategory;

export function Services() {
  const [filter, setFilter] = useState<FilterId>("all");

  const visible = useMemo(
    () => (filter === "all" ? SERVICES : SERVICES.filter((s) => s.category === filter)),
    [filter],
  );

  // When the count is odd, span the last card across both columns so no
  // empty gray cell appears at the end of the grid.
  const spanLast = visible.length % 2 === 1;

  return (
    <section id="services" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-[clamp(48px,8vh,88px)] sm:px-8">
        <SectionLabel>The Menu</SectionLabel>
        <h2 className="display-serif mt-4 text-[clamp(36px,5vw,56px)] text-foreground">
          Services &amp; pricing
        </h2>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
          Every service is by appointment, so your time in the chair is never rushed.
        </p>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-4">
          {FILTER_TABS.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`rounded-none px-4 py-2 text-[0.65rem] font-semibold tracking-wide-2 uppercase transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Service grid */}
        <div className="mt-8 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {visible.map((s, i) => {
            const isLastSpan = spanLast && i === visible.length - 1;
            return (
              <div
                key={s.name}
                className={`group flex flex-col bg-card transition-colors hover:bg-secondary ${
                  isLastSpan ? "sm:col-span-2" : ""
                }`}
                style={{ padding: "18px 24px" }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <h3 className="display-serif text-lg text-foreground">{s.name}</h3>
                    {s.badge && (
                      <span className="bg-primary px-2 py-0.5 text-[0.5rem] font-bold tracking-wide-2 text-primary-foreground uppercase">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <div className="display-serif text-xl text-primary">${s.price}</div>
                </div>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <span className="text-[0.6rem] font-medium tracking-wide-2 text-muted-foreground uppercase">
                    {s.duration}
                  </span>
                  <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.65rem] font-semibold tracking-wide-2 text-foreground uppercase transition-colors hover:text-primary"
                  >
                    Book <ArrowUpRight size={12} />
                  </a>
                </div>

                {s.note && (
                  <p className="mt-1 text-[0.7rem] font-light text-muted-foreground">{s.note}</p>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs font-light text-muted-foreground">
          Standard rates shown. Online booking specials may apply on Booksy.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block border-b border-primary pb-0.5 text-[0.7rem] font-semibold tracking-wide-2 text-primary uppercase"
        >
          Check Availability
        </a>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.65rem] font-light tracking-mega text-primary uppercase">
      {children}
    </span>
  );
}
