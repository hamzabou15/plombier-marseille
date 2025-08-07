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
  title: "Services Plomberie Marseille │ Dépannage Urgence 24h/24 & Installation",
  description: "Plombier expert à Marseille pour dépannage fuite d'eau, débouchage canalisation, remplacement chauffe-eau. ☎ 07 56 93 52 00 - Intervention sous 30 min dans tout Marseille et ses arrondissements.",
  keywords: [
    "dépannage plomberie Marseille",
    "urgence fuite d'eau Marseille",
    "débouchage canalisation Marseille",
    "plombier 24/7 Marseille",
    "chauffe-eau Marseille",
    "réparation plomberie Marseille",
    "artisan plombier Marseille",
    "tarif plombier Marseille",
    "plombier arrondissement Marseille",
    "plombier pas cher Marseille",
    "plombier en urgence Marseille"
  ],
  alternates: {
    canonical: "https://plombiermarseille-expert.fr/services"
  },
  openGraph: {
    title: "Services Plomberie Marseille │ Dépannage Urgence 24h/24 & Installation",
    description: "Plombier expert à Marseille pour toutes interventions urgentes : fuites, canalisation bouchée, chauffe-eau. Service rapide avec garantie dans tous les arrondissements de Marseille.",
    url: "https://plombiermarseille-expert.fr/services",
    siteName: "Plombier Marseille Expert",
    images: [
      {
        url: "https://plombiermarseille-expert.fr/images/plombier-marseille-services.webp",
        width: 1200,
        height: 630,
        alt: "Services de plomberie à Marseille par Plombier Marseille Expert",
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
                            "name": "Services Plomberie Marseille",
                            "description": "Liste complète des services de plomberie à Marseille",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Dépannage Plomberie Urgence Marseille",
                                    "url": "https://plombiermarseille-expert.fr/services/depannage-plomberie",
                                    "description": "Intervention 24h/24 pour fuites d'eau et canalisations bouchées à Marseille Centre (13001), Mourillon (13007), Pont-du-Las (13006)"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Débouchage Canalisation Marseille",
                                    "url": "https://plombiermarseille-expert.fr/services/debouchage-canalisation",
                                    "description": "Solution rapide pour WC, évier et douche bouchés dans tous les arrondissements de Marseille"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Réparation Fuite d'Eau Marseille",
                                    "url": "https://plombiermarseille-expert.fr/services/reparation-fuite-eau",
                                    "description": "Détection sans casse et réparation de fuites à Marseille"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 4,
                                    "name": "Installation Chauffe-Eau Marseille",
                                    "url": "https://plombiermarseille-expert.fr/services/installation-chauffe-eau",
                                    "description": "Remplacement et pose de chauffe-eau à Marseille"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 5,
                                    "name": "Rénovation Salle de Bains Marseille",
                                    "url": "https://plombiermarseille-expert.fr/services/renovation-salle-de-bains",
                                    "description": "Transformation complète de salle de bains dans Marseille et ses quartiers"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 6,
                                    "name": "Entretien Chaudière Marseille",
                                    "url": "https://plombiermarseille-expert.fr/services/entretien-chaudiere",
                                    "description": "Maintenance annuelle de chaudière à Marseille"
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <LocalBusinessSchema />

            <main className="bg-white text-[#43926b]">
                <HeroSection
                    title='Services Plomberie à Marseille et ses Arrondissements'
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