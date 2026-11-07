import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";

/**
 * Opening "cut" intro — paints before React. A solid deep-purple panel
 * covers the screen, gold scissors snip across the center leaving a gold
 * cut line, then the panel splits (top up, bottom down) to reveal the page.
 * Plays once per session; skipped for reduced motion. The script/style/html
 * below are emitted verbatim into the SSR document so they are present in
 * the first paint (no React flash).
 */
const INTRO_SCRIPT = `(function(){var d=document.documentElement;try{if(sessionStorage.getItem('leahIntro')||matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('no-intro');return}}catch(e){}
d.classList.add('intro-on');var t0=Date.now(),done=false;
function open(){if(done)return;done=true;var w=Math.max(0,950-(Date.now()-t0));setTimeout(function(){d.classList.add('intro-open');setTimeout(function(){var el=document.getElementById('intro');if(el)el.remove();d.classList.remove('intro-on');try{sessionStorage.setItem('leahIntro','1')}catch(e){}},700)},w)}
if(document.readyState==='complete')open();else{addEventListener('load',open);setTimeout(open,2500)}})();`;

const INTRO_STYLE = `#intro{position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden}
.no-intro #intro{display:none}
.intro-on body{overflow:hidden}
#intro .half{position:absolute;left:0;right:0;height:50.2%;background:#24133b;transition:transform .6s cubic-bezier(.7,0,.2,1)}
#intro .top{top:0}#intro .bot{bottom:0}
.intro-open #intro .top{transform:translateY(-100%)}
.intro-open #intro .bot{transform:translateY(100%)}
#intro .cut{position:absolute;left:0;top:50%;width:100%;height:2px;margin-top:-1px;background:#d8b062;box-shadow:0 0 14px rgba(216,176,98,.7);transform-origin:left center;transform:scaleX(0);animation:introCut .8s cubic-bezier(.45,0,.25,1) .1s forwards;transition:opacity .3s}
.intro-open #intro .cut{opacity:0}
#intro .sc{position:absolute;top:50%;left:0;width:140px;height:70px;margin-top:-35px;overflow:visible;transform:translateX(-70px);animation:introTravel .8s cubic-bezier(.45,0,.25,1) .1s forwards,introFade .25s ease .9s forwards}
#intro .bA,#intro .bB{transform-box:view-box;transform-origin:60px 30px}
#intro .bA{animation:snipA .2s ease-in-out infinite alternate}
#intro .bB{animation:snipB .2s ease-in-out infinite alternate}
@keyframes introCut{to{transform:scaleX(1)}}
@keyframes introTravel{to{transform:translateX(calc(100vw - 70px))}}
@keyframes introFade{to{opacity:0}}
@keyframes snipA{from{transform:rotate(-22deg)}to{transform:rotate(0)}}
@keyframes snipB{from{transform:rotate(22deg)}to{transform:rotate(0)}}`;

const INTRO_HTML = `<div class="half top"></div><div class="half bot"></div>
  <div class="cut"></div>
  <svg class="sc" viewBox="0 0 120 60" fill="none" stroke="#d8b062" stroke-width="3" stroke-linecap="round">
    <g class="bA"><path d="M57 27.5 L116 29.2 L60 32.5 Z" fill="#d8b062" stroke-width="1.5" stroke-linejoin="round"/><circle cx="20" cy="45" r="10"/><path d="M29 41 L60 30"/></g>
    <g class="bB"><path d="M57 32.5 L116 30.8 L60 27.5 Z" fill="#e9cf94" stroke-width="1.5" stroke-linejoin="round"/><circle cx="20" cy="15" r="10"/><path d="M29 19 L60 30"/></g>
    <circle cx="60" cy="30" r="2.6" fill="#24133b" stroke-width="1.6"/>
  </svg>`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportVibeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Leah the Barber" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..600&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <style dangerouslySetInnerHTML={{ __html: INTRO_STYLE }} />
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
      </head>
      <body>
        <div id="intro" aria-hidden="true" dangerouslySetInnerHTML={{ __html: INTRO_HTML }} />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
