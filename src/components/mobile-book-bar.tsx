import { useEffect, useState } from "react";
import { BOOKSY_URL } from "@/lib/site-data";

export function MobileBookBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-5 py-3">
        <div className="leading-tight">
          <p className="text-[0.55rem] tracking-mega text-muted-foreground uppercase">
            Leah the Barber
          </p>
          <p className="display-serif text-sm text-foreground">Faded Blue Lounge</p>
        </div>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-none bg-primary px-6 py-3 text-[0.65rem] font-semibold tracking-wide-2 text-primary-foreground uppercase"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
