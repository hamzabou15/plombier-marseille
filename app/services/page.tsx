// app/services/page.tsx
import HeroSection from '@/components/HeroSection'
import PlumbingIntro from '@/components/home/PlumberIntroSection'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import ContactSection from '@/components/services/ContactSection'
import ServicesSection from '@/components/services/ServicesSection'
import WhyChooseUs from '@/components/services/whyChooseUs'
import Testimonials from '@/components/Testimonials'
import { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: "Services Plomberie Aix-En-Provence │ Dépannage Urgence 24h/24 & Installation",
  description: "Plombier expert à Aix-En-Provence pour dépannage fuite d'eau, débouchage canalisation, remplacement chauffe-eau. ☎ +33 7 56 93 52 00 - Intervention sous 30 min dans tout Aix-En-Provence et le Var.",
  keywords: [
    "dépannage plomberie Aix-En-Provence",
    "urgence fuite d'eau Aix-En-Provence",
    "débouchage canalisation Aix-En-Provence",
    "plombier 24/7 Aix-En-Provence",
    "chauffe-eau Aix-En-Provence",
    "réparation plomberie Aix-En-Provence",
    "artisan plombier Var",
    "tarif plombier Aix-En-Provence"
  ],
  alternates: {
    canonical: "https://plombieraixenprovence-sos.fr/services"
  },
  openGraph: {
    title: "Services Plomberie Aix-En-Provence │ Dépannage Urgence 24h/24 & Installation",
    description: "Plombier expert à Aix-En-Provence pour toutes interventions urgentes : fuites, canalisation bouchée, chauffe-eau. Service rapide avec garantie.",
    url: "https://plombieraixenprovence-sos.fr/services",
    siteName: "Plombier Aix-En-Provence SOS",
    images: [
      {
        url: "https://plombieraixenprovence-sos.fr/images/plombier-aixenprovence-services.webp",
        width: 1200,
        height: 630,
        alt: "Services de plomberie à Aix-En-Provence par Plombier Aix-En-Provence SOS",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

const page = () => {
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "Services Plomberie Aix-En-Provence",
                            "description": "Liste complète des services de plomberie à Aix-En-Provence",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Dépannage Plomberie Urgence Aix-En-Provence",
                                    "url": "https://plombieraixenprovence-sos.fr/services/depannage-plomberie",
                                    "description": "Intervention 24h/24 pour fuites d'eau et canalisations bouchées à Aix-En-Provence"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Débouchage Canalisation Aix-En-Provence",
                                    "url": "https://plombieraixenprovence-sos.fr/services/debouchage-canalisation",
                                    "description": "Solution rapide pour WC, évier et douche bouchés à Aix-En-Provence"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Réparation Fuite d'Eau Aix-En-Provence",
                                    "url": "https://plombieraixenprovence-sos.fr/services/reparation-fuite-eau",
                                    "description": "Détection sans casse et réparation de fuites à Aix-En-Provence"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 4,
                                    "name": "Installation Chauffe-Eau Aix-En-Provence",
                                    "url": "https://plombieraixenprovence-sos.fr/services/installation-chauffe-eau",
                                    "description": "Remplacement et pose de chauffe-eau à Aix-En-Provence"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 5,
                                    "name": "Rénovation Salle de Bains Aix-En-Provence",
                                    "url": "https://plombieraixenprovence-sos.fr/services/renovation-salle-de-bains",
                                    "description": "Transformation complète de salle de bains à Aix-En-Provence"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 6,
                                    "name": "Entretien Chaudière Aix-En-Provence",
                                    "url": "https://plombieraixenprovence-sos.fr/services/entretien-chaudiere",
                                    "description": "Maintenance annuelle de chaudière à Aix-En-Provence"
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <LocalBusinessSchema />

            <main className="bg-white text-[#E67E22]">
                <HeroSection
                    title='Services Plomberie à Aix-En-Provence'
                />
                <PlumbingIntro />
                <ServicesSection />
                <WhyChooseUs/>
                <ContactSection />
                <Testimonials />
            </main>
        </>
    )
}

export default page