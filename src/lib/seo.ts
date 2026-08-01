/**
 * Données SEO centralisées pour Chez Fatou.
 * À importer dans layout.tsx pour la metadata et le JSON-LD.
 */

export const SITE_URL = "https://chezfatou.sn";
export const SITE_NAME = "Chez Fatou";

export const OG_IMAGE = {
  url: "/images/hero.webp",
  width: 1280,
  height: 853,
  alt: "Chez Fatou — Vue panoramique sur l'Atlantique",
};

/** Schéma JSON-LD Restaurant (Schema.org) */
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE_NAME,
  description:
    "Restaurant et beach club face à l'Atlantique à Dakar. Cuisine afro-méditerranéenne, cocktails signature, vue mer panoramique.",
  url: SITE_URL,
  telephone: "+221 77 000 00 00",
  servesCuisine: ["Sénégalaise", "Méditerranéenne", "Fusion"],
  priceRange: "€€€",
  image: "/images/hero.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Almadies",
    addressLocality: "Dakar",
    addressRegion: "Dakar",
    addressCountry: "SN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.7274,
    longitude: -17.5042,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "23:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2200",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Vue mer", value: true },
    { "@type": "LocationFeatureSpecification", name: "Beach club", value: true },
    { "@type": "LocationFeatureSpecification", name: "Brunch", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cocktails", value: true },
  ],
};
