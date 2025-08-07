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
  title: "Plombier Marseille │ Urgence 24h/24 - Intervention Express & Devis Gratuit",
  description: "☎ 07 56 93 52 00 - Plombier expert à Marseille pour dépannage immédiat : fuites d'eau, débouchage canalisation, chauffe-eau. Intervention rapide quartiers Centre, Mourillon, Pont-du-Las. Devis gratuit & sans engagement.",
  keywords: "plombier marseille, plombier a marseille, plombier a proximité marseille, plombier pas cher sur marseille, plombier en urgence sur marseille, dépannage plomberie marseille, urgence plombier 24/7, débouchage canalisation marseille, fuite d'eau marseille, réparation chauffe-eau marseille",
  openGraph: {
    title: "Plombier Marseille Expert │ Urgence 24h/24 - Devis Gratuit & Intervention Rapide",
    description: "Plombier certifié à Marseille pour interventions express 7j/7. Fuites, canalisations, chauffe-eau - Service garanti avec transparence tarifaire",
    url: "https://plombiermarseille-expert.fr",
    siteName: "Plombier Marseille Expert",
    images: [
      {
        url: "https://plombiermarseille-expert.fr/images/plombier-marseille-hero.webp",
        width: 1200,
        height: 630,
        alt: "Plombier professionnel en intervention d'urgence à Marseille",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plombier Marseille │ Urgence 24h/24 - Artisan Local & Intervention Express",
    description: "☎ 07 56 93 52 00 - Plombier expert pour dépannage immédiat à Marseille. Fuites, canalisations, chauffe-eau - Service 24/7 avec garantie",
    images: ["https://plombiermarseille-expert.fr/images/plombier-marseille-hero.webp"],
  },
  alternates: {
    canonical: "https://plombiermarseille-expert.fr",
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
        <section className="w-full bg-gradient-to-b from-[#f0fcf6] to-[#ccf5db]">
          <Testimonials />
        </section>
        <ProductGallery />
      </main>
    </>
  );
}