import { useEffect, useLayoutEffect, useRef, type CSSProperties } from "react";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Total duration of the opening "cut" transition, in ms. */
export const CUT_DURATION_MS = 820;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** First visit in this session? (repeat visits skip the cut). */
export function shouldPlayCut(): boolean {
  if (prefersReducedMotion()) return false;
  try {
    return !sessionStorage.getItem("leah:visited");
  } catch {
    return false;
  }
}

export function markVisited(): void {
  try {
    sessionStorage.setItem("leah:visited", "1");
  } catch {
    /* ignore */
  }
}

/** Stagger delay as a CSS custom property consumed by the reveal CSS. */
export const delay = (ms: number): CSSProperties =>
  ({ "--d": `${ms}ms` }) as unknown as CSSProperties;

export interface RevealOptions {
  threshold?: number;
}

/**
 * IntersectionObserver-based scroll reveal. Adds the `is-revealed`
 * class to the attached element once it enters the viewport, then
 * stops observing (one-shot). If JS / IntersectionObserver is missing
 * or the visitor prefers reduced motion, the element is revealed
 * immediately so content is never stuck hidden.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(opts: RevealOptions = {}) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-revealed");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-revealed");
            io.disconnect();
          }
        }
      },
      { threshold: opts.threshold ?? 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [opts.threshold]);
  return ref;
}

/**
 * Adds the `js-anim` class to the root element before first paint
 * (client only). All hidden start states are scoped to `.js-anim`,
 * so the page is fully visible without JavaScript.
 */
export function useMotionRoot() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useIsoLayoutEffect(() => {
    if (rootRef.current) rootRef.current.classList.add("js-anim");
  }, []);
  return rootRef;
}
