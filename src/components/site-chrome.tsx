import { Menu, X, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { BOOKSY_URL, SHOP_URL, SHOP_TEAM_URL } from "@/lib/site-data";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export function TopTrim() {
  return (
    <div className="surface-dark flex h-[34px] w-full items-center justify-center border-b border-primary/40 bg-background px-4 sm:h-[38px]">
      <p className="flex items-center gap-[0.4em] whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground">
        {/* desktop */}
        <span className="hidden items-center gap-[0.4em] sm:flex">
          <span>Fort Worth, TX</span>
          <span className="text-primary">·</span>
          <span>By appointment</span>
          <span className="text-primary">·</span>
          <span>Open until 9 PM</span>
          <span className="text-primary">·</span>
          <span className="text-primary">★★★★★</span>
          <span>5.0 on Booksy</span>
        </span>
        {/* mobile */}
        <span className="flex items-center gap-[0.4em] sm:hidden">
          <span className="text-primary">★★★★★</span>
          <span>5.0</span>
          <span className="text-primary">·</span>
          <span>Book online 24/7</span>
        </span>
      </p>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-header-solid/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex flex-col leading-none">
          <span className="display-serif text-xl font-semibold tracking-wide-2 text-foreground">
            Leah
          </span>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 inline-flex items-center gap-1 text-[12px] font-semibold tracking-wide-2 text-primary uppercase transition-opacity hover:opacity-80"
          >
            A Faded Blue Lounge Barber
            <ExternalLink size={9} />
          </a>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[12px] font-semibold tracking-wide-2 text-ink uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden rounded-none px-5 py-2.5 text-[12px] font-semibold tracking-wide-2 uppercase transition-colors sm:inline-block"
          >
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[14px] font-semibold tracking-wide-2 text-ink uppercase border-b border-border/60 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 rounded-none px-5 py-3 text-center text-[12px] font-semibold tracking-wide-2 uppercase"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="surface-dark border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="display-serif text-2xl font-semibold text-foreground">
            Leah the Barber
          </div>
          <div className="text-[12px] font-semibold tracking-mega text-muted-foreground uppercase">
            Faded Blue Lounge · Fort Worth, Texas
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-muted-foreground">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#reviews" className="transition-colors hover:text-foreground">
              Reviews
            </a>
            <a href="#visit" className="transition-colors hover:text-foreground">
              Visit
            </a>
          </div>
          <a
            href={SHOP_TEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link inline-flex items-center gap-1 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Leah works inside Faded Blue Lounge. Meet the rest of the team
            <ExternalLink size={11} className="btn-arrow" />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] font-semibold text-muted-foreground">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Faded Blue Lounge
            </a>
            <span className="text-border">·</span>
            <a
              href={SHOP_TEAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Leah's Shop Profile
            </a>
          </div>
          <p className="mt-2 text-[12px] font-semibold tracking-wide-2 text-muted-foreground uppercase">
            © 2026 Leah the Barber · Faded Blue Lounge · Fort Worth, Texas
          </p>
          <p className="text-[12px] font-semibold tracking-wide-2 text-muted-foreground uppercase">
            Website by SureMade Web Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
