import ContactForm from '@/components/contact/Form'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness';
import Head from 'next/head'
import React from 'react'

export const metadata = {
    title: "Plombier à Aix-En-Provence - Interventions rapides & professionnelles",
    description: "Intervention express à Aix-En-Provence pour dépannage, fuite, débouchage, chauffe-eau et plus. Plombier expérimenté, devis gratuit et service garanti.",
    openGraph: {
        title: "Plombier à Aix-En-Provence - Interventions rapides & professionnelles",
        description: "Intervention express à Aix-En-Provence pour dépannage, fuite, débouchage, chauffe-eau et plus.",
        url: "https://plombieraixenprovence-sos.fr",
        siteName: "Plombier Aix-En-Provence SOS",
        images: [
            {
                url: "https://plombieraixenprovence-sos.fr/images/plombier-aixenprovence-hero.webp",
                width: 800,
                height: 600,
                alt: "Plombier professionnel à Aix-En-Provence",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Plombier à Aix-En-Provence - Interventions rapides & professionnelles",
        description: "Plombier expérimenté pour dépannage, fuite, chauffe-eau, rénovation à Aix-En-Provence. Service rapide, devis gratuit.",
        images: ["https://plombieraixenprovence-sos.fr/images/plombier-aixenprovence-hero.webp"],
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
                            "@type": "LocalBusiness",
                            name: "PlombierAix-En-Provence SOS",
                            image: "https://plombieraixenprovence-sos.fr/images/plombier-aixenprovence-hero.webp",
                            "@id": "https://plombieraixenprovence-sos.fr/",
                            url: "https://plombieraixenprovence-sos.fr/",
                            telephone: "+33756935200",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "12 Rue de France",
                                addressLocality: "Aix-En-Provence",
                                postalCode: "06000",
                                addressCountry: "FR",
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
                                    opens: "08:00",
                                    closes: "20:00",
                                },
                            ],
                            sameAs: [],
                        }),
                    }}
                />
            </Head>
            <LocalBusinessSchema />
            <main className="min-h-[calc(100vh-100px)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 px-4 py-10">
                    {/* Contact Form Component */}
                    <ContactForm />
                </div>
            </main>
        </>
    )
}

export default page