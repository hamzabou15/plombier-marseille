
// app/layout.tsx
import "./globals.css";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CTA from "@/components/layout/CTA";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Plombier à Aix-En-Provence – Dépannage rapide et efficace | PlombierAix-En-Provence SOS",
  description:
    "Plombier professionnel à Aix-En-Provence : dépannage en urgence, détection de fuites, débouchage, rénovation de salle de bains. Devis gratuit 7j/7 !",
  keywords: [
    "plombier Aix-En-Provence",
    "urgence plomberie Aix-En-Provence",
    "chauffe-eau Aix-En-Provence",
    "débouchage canalisation Aix-En-Provence",
    "rénovation salle de bains Aix-En-Provence",
  ],
  openGraph: {
    title: "Plombier à Aix-En-Provence – Dépannage rapide et efficace | PlombierAix-En-Provence SOS",
    description:
      "Interventions express à Aix-En-Provence : fuite d’eau, débouchage, chauffe-eau, rénovation de salle de bains. Contactez un artisan local fiable.",
    url: "https://plombieraixenprovence-sos.fr/",
    siteName: "PlombierAix-En-Provence SOS",
    images: [
      {
        url: "/images/plombier-aixenprovence-hero.webp",
        width: 1200,
        height: 630,
        alt: "Plombier professionnel à Aix-En-Provence",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-white text-[#212121]">
        <Header />
        <CTA />
        {children}
        <Footer />
      </body>
    </html>
  );
}
