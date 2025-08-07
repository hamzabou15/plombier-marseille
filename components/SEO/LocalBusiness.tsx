"use client";

import Script from "next/script";
import schemaLocalBusiness from "@/public/schema-local-business.json";

export default function LocalBusinessSchema() {
  const updatedSchema = {
    ...schemaLocalBusiness,
    "@type": "Plumber",
    name: "Plombier Marseille Expert",
    image: "https://plombiermarseille-expert.fr/logo-plombier-marseille-expert.png",
    telephone: "+33756935200",
    address: {
      ...schemaLocalBusiness.address,
      addressLocality: "Marseille",
      addressRegion: "Bouches-du-Rhône",
      postalCode: "13000",
      streetAddress: "123 Avenue de la République"
    },
    geo: {
      latitude: "43.296482",
      longitude: "5.369780"
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    areaServed: [
      "Marseille Centre (13001)",
      "Marseille Le Panier (13002)",
      "Marseille Belle de Mai (13003)",
      "Marseille Saint-Victor (13007)",
      "Marseille Endoume (13007)",
      "Marseille Le Roucas (13007)",
      "Marseille Vauban (13006)",
      "Marseille Le Pharo (13007)",
      "Marseille La Plaine (13001)",
      "Marseille Cours Julien (13006)",
      "Marseille La Joliette (13002)",
      "Marseille Le Vieux-Port (13001)",
      "Marseille Saint-Charles (13001)",
      "Marseille La Canebière (13001)",
      "Marseille Noailles (13001)",
      "Marseille Belsunce (13001)",
      "Marseille Opéra (13001)",
      "Marseille La Blancarde (13004)",
      "Marseille Saint-Barnabé (13012)",
      "Marseille La Timone (13005)",
      "Marseille Baille (13005)",
      "Marseille Métro (13005)",
      "Marseille La Pomme (13011)",
      "Marseille Saint-Loup (13010)",
      "Marseille La Valentine (13011)",
      "Marseille Saint-Menet (13011)",
      "Marseille Les Trois Lucs (13012)",
      "Marseille Montolivet (13012)",
      "Marseille Saint-Just (13013)",
      "Marseille Château-Gombert (13013)",
      "Marseille Malpassé (13013)",
      "Marseille La Rose (13013)",
      "Marseille Les Olives (13013)",
      "Marseille Saint-Jérôme (13013)",
      "Marseille La Viste (13014)",
      "Marseille Saint-Antoine (13015)",
      "Marseille Les Aygalades (13015)",
      "Marseille La Calade (13015)",
      "Marseille Les Crottes (13015)",
      "Marseille Le Canet (13013)",
      "Marseille La Fourragère (13012)",
      "Marseille Sainte-Marguerite (13009)",
      "Marseille Saint-Tronc (13011)",
      "Marseille La Pointe Rouge (13008)",
      "Marseille Les Goudes (13008)",
      "Marseille Sormiou (13009)",
      "Marseille Morgiou (13009)",
      "Marseille Les Baumettes (13009)",
      "Marseille Mazargues (13009)",
      "Marseille Bonneveine (13008)",
      "Marseille Périer (13008)",
      "Marseille La Panouse (13008)",
      "Marseille Rouet (13012)",
      "Marseille Saint-Giniez (13008)",
      "Marseille Endoume (13007)",
      "Marseille Vallon des Auffes (13007)",
      "Marseille Le Prophète (13007)",
      "Marseille Corniche (13007)",
      "Marseille Malmousque (13007)",
      "Marseille Catalans (13007)"
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "43.296482",
        longitude: "5.369780"
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