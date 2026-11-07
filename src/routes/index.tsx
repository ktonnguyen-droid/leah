import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useLayoutEffect, useEffect, useRef, useState } from "react";
import { TopTrim, Header, Footer } from "@/components/site-chrome";
import { MobileBookBar } from "@/components/mobile-book-bar";
import { CutTransition } from "@/components/cut-transition";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Signature } from "@/components/sections/signature";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Reviews } from "@/components/sections/reviews";
import { Visit, Cta } from "@/components/sections/visit";
import { markVisited, shouldPlayCut } from "@/lib/motion";
import { ADDRESS, BOOKSY_URL, HERO_IMAGE, PHONE_DISPLAY, SHOP_TEAM_URL } from "@/lib/site-data";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Leah the Barber | Head Shaves, Facials & Haircuts in Fort Worth, TX",
      },
      {
        name: "description",
        content:
          "Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials by Leah Bernal at Faded Blue Lounge in Fort Worth, TX. 5.0 stars from 115 reviews. Book online.",
      },
      {
        property: "og:title",
        content: "Leah the Barber | Head Shaves, Facials & Haircuts in Fort Worth, TX",
      },
      {
        property: "og:description",
        content:
          "Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials by Leah Bernal at Faded Blue Lounge in Fort Worth, TX. 5.0 stars from 115 reviews. Book online.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Leah the Barber at Faded Blue Lounge",
          description:
            "Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials by Leah Bernal at Faded Blue Lounge in Fort Worth, TX.",
          url: BOOKSY_URL,
          telephone: PHONE_DISPLAY,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: `${ADDRESS.street}, ${ADDRESS.suite}`,
            addressLocality: ADDRESS.city,
            addressRegion: ADDRESS.state,
            postalCode: ADDRESS.zip,
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 32.6369,
            longitude: -97.4157,
          },
          openingHours: "Mo-Su 09:00-21:00",
          sameAs: [BOOKSY_URL, SHOP_TEAM_URL],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "115",
            bestRating: "5",
            worstRating: "1",
          },
          makesOffer: [
            { "@type": "Offer", name: "Haircut", price: "35", priceCurrency: "USD" },
            { "@type": "Offer", name: "Haircut & Beard Trim", price: "45", priceCurrency: "USD" },
            { "@type": "Offer", name: "Hot Lather Head Shave", price: "55", priceCurrency: "USD" },
            {
              "@type": "Offer",
              name: "6-Step Dermalogica Facial",
              price: "95",
              priceCurrency: "USD",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [cut, setCut] = useState(false);

  // Enable motion start states (client only, before first paint) and
  // play the first-visit cut transition.
  useIsoLayoutEffect(() => {
    rootRef.current?.classList.add("js-anim");
    if (shouldPlayCut()) {
      markVisited();
      setCut(true);
    }
  }, []);

  const finishCut = useCallback(() => setCut(false), []);

  return (
    <div ref={rootRef} className="min-h-screen">
      <TopTrim />
      <Header />
      <main>
        <Hero cutActive={cut} />
        <Services />
        <Signature />
        <About />
        <Portfolio />
        <Reviews />
        <Visit />
        <Cta />
      </main>
      <Footer />
      <MobileBookBar />
      {cut && <CutTransition onDone={finishCut} />}
    </div>
  );
}
