"use client";

import Script from "next/script";
import schemaLocalBusiness from "@/public/schema-local-business.json";

export default function LocalBusinessSchema() {
  const updatedSchema = {
    ...schemaLocalBusiness,
    "@type": "Plumber",
    name: "Plombier Aix-En-Provence SOS",
    image: "https://plombieraixenprovence-sos.fr/logo-plombier-aixenprovence-expert.png",
    telephone: "+33756935200",
    address: {
      ...schemaLocalBusiness.address,
      addressLocality: "Aix-En-Provence",
      addressRegion: "Bouches-du-Rhône",
      postalCode: "13100",
      streetAddress: "123 Avenue de la République"
    },
    geo: {
      latitude: "43.529742",
      longitude: "5.447427"
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    areaServed: [
      "Aix-En-Provence Centre",
      "Mourillon",
      "Pont-du-Las",
      "Saint-Jean du Var",
      "La Rode",
      "Les Quartiers Sud",
      "Les Quartiers Est",
      "La Valette-du-Var",
      "La Garde",
      "Le Revest-les-Eaux",
      "Ollioules"
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "43.529742",
        longitude: "5.447427"
      },
      geoRadius: "20000"
    },
    priceRange: "€€",
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Marie D."
      }
    }
  };

  return (
    <Script
      type="application/ld+json"
      id="local-business-schema"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(updatedSchema),
      }}
    />
  );
}