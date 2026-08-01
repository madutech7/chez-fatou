import type { Metadata } from "next";
import "./globals.css";
import { jsonLd, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} — Restaurant & Beach Club | Dakar, Sénégal`,
  description:
    "Chez Fatou, le restaurant et beach club incontournable de Dakar. Cuisine afro-méditerranéenne, cocktails signature, vue imprenable sur l'Atlantique. Réservez votre table dès maintenant.",
  keywords: [
    "Chez Fatou",
    "restaurant Dakar",
    "beach club Dakar",
    "restaurant bord de mer Sénégal",
    "gastronomie Dakar",
    "restaurant vue mer Dakar",
    "brunch Dakar",
    "cocktails Dakar",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    title: `${SITE_NAME} — Restaurant & Beach Club | Dakar`,
    description:
      "Vivez une expérience gastronomique unique face à l'Atlantique. Cuisine raffinée, cocktails signature et ambiance beach club au cœur de Dakar.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Restaurant & Beach Club | Dakar`,
    description: "Cuisine, cocktails et vue mer. L'expérience ultime à Dakar.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

import SmoothScroll from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
