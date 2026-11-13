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
const INTRO_SCRIPT = `(function(){
var d=document.documentElement,t0=Date.now(),opened=false,done=false,KEY='leahIntro';
function finish(){if(done)return;done=true;var el=document.getElementById('intro');if(el&&el.parentNode)el.parentNode.removeChild(el);d.classList.remove('intro-on');d.classList.add('intro-open');try{sessionStorage.setItem(KEY,'1')}catch(e){}}
function reveal(){var el=document.getElementById('intro');if(el)el.classList.add('open');d.classList.add('intro-open');try{window.dispatchEvent(new Event('intro:open'))}catch(e){}setTimeout(finish,800)}
function open(){if(opened)return;opened=true;setTimeout(reveal,Math.max(0,1950-(Date.now()-t0)))}
try{if(sessionStorage.getItem(KEY)||matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('no-intro','intro-open');return}}catch(e){}
d.classList.add('intro-on');
function ready(){try{var img=document.querySelector('[data-hero-img]');if(img&&!img.complete){img.addEventListener('load',open);img.addEventListener('error',open)}else{open()}}catch(e){open()}}
if(document.readyState!=='loading'){ready()}else{document.addEventListener('DOMContentLoaded',ready)}
setTimeout(open,2400);
setTimeout(function(){if(!done){reveal()}},3000);
setTimeout(finish,3900);
document.addEventListener('pointerdown',function(e){var el=document.getElementById('intro');if(el&&!el.classList.contains('open')&&el.contains(e.target)){opened=true;reveal()}},true);
window.addEventListener('pageshow',function(e){if(e.persisted)finish()});
})();`;

const INTRO_STYLE = `#intro{--bg:#24133b;--gold:#d8b062;--gold2:#e9cf94;--ink:#f6f0e5;--accent:#c8b0f0;--ease:cubic-bezier(.35,0,.35,1);--t0:.15s;--dur:1.3s;position:fixed;inset:0;z-index:9999;overflow:hidden;cursor:pointer;animation:introFailsafe .4s ease 4.3s forwards}
#intro.open{pointer-events:none}
.no-intro #intro{display:none}
.intro-on body{overflow:hidden}
#intro .half{position:absolute;left:0;right:0;height:50.2%;background:var(--bg);overflow:hidden;transition:transform .75s cubic-bezier(.7,0,.2,1)}
#intro .top{top:0}#intro .bot{bottom:0}
#intro.open .top,.intro-open #intro .top{transform:translateY(-100%)}
#intro.open .bot,.intro-open #intro .bot{transform:translateY(100%)}
#intro .name,#intro .sub{position:absolute;left:0;right:0;text-align:center;white-space:nowrap;clip-path:inset(0 100% 0 0);animation:introReveal var(--dur) var(--ease) var(--t0) forwards}
#intro .name{bottom:14px;font-family:"Bodoni Moda","Didot","Bodoni 72","Times New Roman",serif;font-weight:500;font-size:clamp(40px,8.5vw,104px);line-height:1;letter-spacing:-.01em;color:var(--ink)}
#intro .name em{font-style:italic;font-weight:400;color:var(--accent)}
#intro .sub{top:16px;font-family:"Jost","Futura","Helvetica Neue",Arial,sans-serif;font-weight:500;font-size:11px;letter-spacing:.42em;text-transform:uppercase;color:var(--gold)}
#intro .cut{position:absolute;left:0;top:50%;width:100%;height:1.5px;margin-top:-.75px;background:var(--gold);box-shadow:0 0 14px rgba(216,176,98,.7);transform-origin:left center;transform:scaleX(0);animation:introCut var(--dur) var(--ease) var(--t0) forwards;transition:opacity .25s}
#intro.open .cut,.intro-open #intro .cut{opacity:0}
#intro .tool{position:absolute;top:50%;left:0;width:140px;height:70px;margin-top:-35px;overflow:visible;transform:translateX(-70px);animation:introTravel var(--dur) var(--ease) var(--t0) forwards,introFade .3s ease 1.45s forwards}
#intro .bA,#intro .bB{transform-box:view-box;transform-origin:60px 30px}
#intro .bA{animation:snipA .18s ease-in-out infinite alternate}
#intro .bB{animation:snipB .18s ease-in-out infinite alternate}
#intro .strands{position:absolute;left:0;right:0;top:50%;height:0}
#intro .strands i{position:absolute;top:-2px;width:2px;border-radius:2px;opacity:0;transform-origin:top center;animation:strandFall 1.1s cubic-bezier(.3,.1,.5,1) both}
#intro.open .strands{opacity:0;transition:opacity .2s}
@keyframes introReveal{to{clip-path:inset(0 0 0 0)}}
@keyframes introCut{to{transform:scaleX(1)}}
@keyframes introTravel{to{transform:translateX(calc(100vw - 70px))}}
@keyframes introFade{to{opacity:0}}
@keyframes snipA{from{transform:rotate(-22deg)}to{transform:rotate(0)}}
@keyframes snipB{from{transform:rotate(22deg)}to{transform:rotate(0)}}
@keyframes strandFall{0%{opacity:0;transform:translate(0,0) rotate(0)}12%{opacity:1}100%{opacity:0;transform:translate(var(--dx),var(--fy)) rotate(var(--r))}}
@keyframes introFailsafe{to{opacity:0;visibility:hidden;pointer-events:none}}
@media (prefers-reduced-motion:reduce){#intro{display:none}}`;

const INTRO_HTML = `<div class="half top"><div class="name">Leah <em>the Barber</em></div></div>
  <div class="half bot"><div class="sub">Faded Blue Lounge</div></div>
  <div class="cut"></div>
  <div class="strands">
    <i style="left:3.9%;height:20px;background:#e9cf94;--dx:24px;--fy:149px;--r:61deg;animation-delay:0.29s"></i>
    <i style="left:7.2%;height:20px;background:#e9cf94;--dx:0px;--fy:170px;--r:144deg;animation-delay:0.34s"></i>
    <i style="left:11.0%;height:16px;background:#d8b062;--dx:-21px;--fy:101px;--r:105deg;animation-delay:0.39s"></i>
    <i style="left:16.2%;height:18px;background:#e9cf94;--dx:-2px;--fy:173px;--r:145deg;animation-delay:0.43s"></i>
    <i style="left:20.3%;height:20px;background:#e9cf94;--dx:-26px;--fy:97px;--r:-152deg;animation-delay:0.46s"></i>
    <i style="left:24.9%;height:21px;background:#d8b062;--dx:-29px;--fy:149px;--r:-3deg;animation-delay:0.49s"></i>
    <i style="left:28.2%;height:15px;background:#f3ecdd;--dx:3px;--fy:119px;--r:157deg;animation-delay:0.52s"></i>
    <i style="left:32.0%;height:22px;background:#f3ecdd;--dx:-25px;--fy:148px;--r:165deg;animation-delay:0.54s"></i>
    <i style="left:35.8%;height:20px;background:#f3ecdd;--dx:29px;--fy:100px;--r:-40deg;animation-delay:0.56s"></i>
    <i style="left:40.6%;height:20px;background:#d8b062;--dx:-12px;--fy:93px;--r:-135deg;animation-delay:0.59s"></i>
    <i style="left:43.8%;height:16px;background:#d8b062;--dx:-6px;--fy:98px;--r:-162deg;animation-delay:0.61s"></i>
    <i style="left:47.3%;height:12px;background:#d8b062;--dx:0px;--fy:138px;--r:33deg;animation-delay:0.64s"></i>
    <i style="left:51.0%;height:22px;background:#f3ecdd;--dx:-18px;--fy:176px;--r:-32deg;animation-delay:0.66s"></i>
    <i style="left:55.0%;height:17px;background:#e9cf94;--dx:-30px;--fy:142px;--r:-110deg;animation-delay:0.69s"></i>
    <i style="left:59.4%;height:13px;background:#d8b062;--dx:-30px;--fy:97px;--r:68deg;animation-delay:0.72s"></i>
    <i style="left:63.2%;height:20px;background:#e9cf94;--dx:-18px;--fy:147px;--r:90deg;animation-delay:0.75s"></i>
    <i style="left:69.2%;height:14px;background:#d8b062;--dx:-4px;--fy:172px;--r:26deg;animation-delay:0.79s"></i>
    <i style="left:71.7%;height:15px;background:#f3ecdd;--dx:-30px;--fy:124px;--r:133deg;animation-delay:0.82s"></i>
    <i style="left:77.2%;height:12px;background:#d8b062;--dx:-17px;--fy:113px;--r:31deg;animation-delay:0.87s"></i>
    <i style="left:78.9%;height:14px;background:#d8b062;--dx:-17px;--fy:146px;--r:-38deg;animation-delay:0.89s"></i>
    <i style="left:84.7%;height:17px;background:#d8b062;--dx:23px;--fy:127px;--r:27deg;animation-delay:0.96s"></i>
    <i style="left:87.0%;height:15px;background:#d8b062;--dx:7px;--fy:171px;--r:-46deg;animation-delay:0.99s"></i>
    <i style="left:92.2%;height:17px;background:#d8b062;--dx:9px;--fy:148px;--r:-105deg;animation-delay:1.08s"></i>
    <i style="left:96.8%;height:14px;background:#e9cf94;--dx:25px;--fy:139px;--r:-77deg;animation-delay:1.21s"></i>
  </div>
  <svg class="tool" viewBox="0 0 120 60" fill="none" stroke="#d8b062" stroke-width="3" stroke-linecap="round">
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
