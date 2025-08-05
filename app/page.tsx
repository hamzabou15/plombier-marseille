import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import PlumbingIntro from "@/components/home/PlumberIntroSection";
import ProductGallery from "@/components/home/ProdcutsGallery";
import ProjectSection from "@/components/home/ProjectSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonials from "@/components/Testimonials";
import StatsCard from "@/components/StatsCard";
import type { Metadata } from "next";
import LocalBusinessSchema from "@/components/SEO/LocalBusiness";

export const metadata: Metadata = {
  title: "Plombier Aix-En-Provence │ Urgence 24h/24 - Artisan Certifié & Intervention Express",
  description: "☎ 07 56 93 52 00 - Plombier expert à Aix-En-Provence pour dépannage immédiat 7j/7 : fuites d'eau, débouchage canalisation, chauffe-eau. Intervention rapide quartiers Centre, Mourillon, Pont-du-Las. Devis gratuit & sans engagement.",
  keywords: "plombier aixenprovence, dépannage plomberie aixenprovence, urgence plombier 24/7, débouchage canalisation aixenprovence, fuite d'eau aixenprovence, réparation chauffe-eau aixenprovence, plombier pas cher aix en provence, artisan plombier aix en provence",
  openGraph: {
    title: "Plombier Aix-En-Provence SOS │ Urgence 24h/24 - Devis Gratuit & Intervention Rapide",
    description: "Plombier certifié à Aix-En-Provence pour interventions express 7j/7. Fuites, canalisations, chauffe-eau - Service garanti avec transparence tarifaire",
    url: "https://plombieraixenprovence-sos.fr",
    siteName: "Plombier Aix-En-Provence SOS",
    images: [
      {
        url: "https://plombieraixenprovence-sos.fr/images/plombier-aixenprovence-hero.webp",
        width: 1200,
        height: 630,
        alt: "Plombier professionnel en intervention d'urgence à Aix-En-Provence",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plombier Aix-En-Provence │ Urgence 24h/24 - Artisan Local & Intervention Express",
    description: "☎ 07 56 93 52 00 - Plombier expert pour dépannage immédiat à Aix-en-Provence. Fuites, canalisations, chauffe-eau - Service 24/7 avec garantie",
    images: ["https://plombieraixenprovence-sos.fr/images/plombier-aixenprovence-hero.webp"],
  },
  alternates: {
    canonical: "https://plombieraixenprovence-sos.fr",
  },
};

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <main className="font-sans bg-white text-[#212121]">
        <Hero />
        <section className="bg-white">
          <PlumbingIntro />
        </section>
        <ServiceSection />
        <InfoSection />
        <ProjectSection />
        <ContactSection />
        <StatsCard />
        <section className="w-full bg-gradient-to-b from-[#fcf7f0] to-[#f5e6cc]">
          <Testimonials />
        </section>
        <ProductGallery />
      </main>
    </>
  );
}