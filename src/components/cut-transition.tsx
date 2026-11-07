import { useEffect } from "react";
import { CUT_DURATION_MS } from "@/lib/motion";

/**
 * Opening "cut" transition overlay. A solid deep-purple panel covers
 * the screen, a gold line draws across the center, then the panel
 * splits (top half up, bottom half down) to reveal the page. Mounted
 * only on the first visit of a session; the CSS animations auto-play
 * on mount and the overlay unmounts once they finish.
 */
export function CutTransition({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = window.setTimeout(onDone, CUT_DURATION_MS);
    return () => window.clearTimeout(t);
  }, [onDone]);

  return (
    <div className="cut-overlay" aria-hidden="true">
      <div className="cut-panel cut-top" />
      <div className="cut-panel cut-bottom" />
      <div className="cut-line" />
    </div>
  );
}
