import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site-chrome";
import { MobileBookBar } from "@/components/mobile-book-bar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Signature } from "@/components/sections/signature";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Reviews } from "@/components/sections/reviews";
import { Visit, Cta } from "@/components/sections/visit";
import {
  ADDRESS,
  BOOKSY_URL,
  PHONE_DISPLAY,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leah the Barber — Faded Blue Lounge | Fort Worth, TX" },
      {
        name: "description",
        content:
          "Precision haircuts, razor line-ups, hot lather head shaves and Dermalogica facials by Leah Bernal at Faded Blue Lounge in Fort Worth, TX. Book online — 5.0 from 115 reviews.",
      },
      {
        property: "og:title",
        content: "Leah the Barber — Faded Blue Lounge | Fort Worth, TX",
      },
      {
        property: "og:description",
        content:
          "Precision haircuts, razor line-ups, hot lather shaves and Dermalogica facials by Leah Bernal at Faded Blue Lounge, Fort Worth. Book online — 5.0 from 115 reviews.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
          image: undefined,
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
            { "@type": "Offer", name: "6-Step Dermalogica Facial", price: "95", priceCurrency: "USD" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
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
    </div>
  );
}
