import Engagements from '@/components/a-propos/Engagements'
import Intro from '@/components/a-propos/Intro'
import Introduction from '@/components/a-propos/introduction'
import StatsCard from '@/components/a-propos/Stats'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/home/ProjectSection'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "À Propos - Plombier Marseille Expert | 15 Ans d'Expérience en Plomberie Urgence",
  description: "Découvrez l'histoire de Plombier Marseille Expert, artisan plombier à Marseille depuis 2010. Service d'urgence 24h/24 dans tous les arrondissements. ☎ 07 56 93 52 00",
  keywords: [
    "plombier marseille expert",
    "plombier urgence marseille",
    "dépannage plomberie marseille",
    "artisan plombier marseille",
    "réparation fuite d'eau marseille",
    "histoire plombier marseille",
    "équipe plomberie marseille",
    "plombier centre ville marseille 13001",
    "plombier mourillon marseille 13007",
    "plombier pont du las marseille 13006",
    "plombier quartiers marseille",
    "à propos plombier marseille"
  ],
  openGraph: {
    title: "À Propos - Plombier Marseille Expert | 15 ans d'expérience en plomberie d'urgence",
    description: "Découvrez notre histoire et notre engagement pour un service de plomberie d'excellence à Marseille et ses arrondissements. Interventions 24h/24, 7j/7.",
    images: [
      {
        url: "https://plombiermarseille-expert.fr/images/expert-plombier-marseille.webp",
        width: 1200,
        height: 630,
        alt: "Équipe de plombiers experts à Marseille en intervention",
      },
    ],
  },
}

const page = () => {
    return (
        <>
            <LocalBusinessSchema />
            <main className='mx-auto relative text-[#43926b]'>
                <HeroSection
                    title='Plombier Marseille Expert : 15 ans d’expérience en plomberie d’urgence'
                />
                <Intro />
                <Introduction />
                <StatsCard />
                <div className='flex justify-center my-16 max-w-7xl mx-auto px-4 sm:px-6 px-4 md:px-6'>
                    <div className="relative w-full max-w-7xl max-md:h-[400px]">
                        <Image
                            src="/images/expert-plombier-marseille.webp"
                            alt="Équipe de plombiers experts de Marseille en intervention dans le quartier Centre-ville (13001)"
                            width={1000}
                            height={667}
                            className='w-full h-full object-cover rounded-lg shadow-lg'
                            priority
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                            <p className="text-lg">L&apos;équipe Plombier Marseille Expert - Depuis 2010</p>
                        </div>
                    </div>
                </div>
                <Engagements />
                <ProjectSection />
            </main>
        </>
    )
}

export default page