// app/services/[slug]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services } from '@/lib/service';
import ContactForm from '@/components/services/ContactSection';

interface PageProps {
  params: Promise<{ slug: string }>
}

// Enhanced metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(p => p.slug === slug);

  if (!service) {
    return {
      title: 'Service non trouvé - Plombier Expert Marseille',
      description: "Service de plomberie introuvable dans votre quartier marseillais",
    };
  }

  // Target neighborhoods
  const quartiers = ['Marseille Centre', 'Mourillon', 'Pont-du-Las', 'Saint-Jean du Var', 'La Rode'];

  return {
    title: `${service.title} | Plombier Marseille ${quartiers.join(', ')}`,
    description: `${service.description} Intervention rapide dans tous les quartiers marseillais.`,
    alternates: {
      canonical: `https://www.plombiermarseille-expert.fr/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Plombier Marseille ${quartiers[0]}`,
      description: `Service de plomberie à Marseille: ${service.description}`,
      images: [{
        url: `https://www.plombiermarseille-expert.fr${service.image}`,
        alt: service.alt,
      }],
      locale: 'fr_FR',
      type: 'website',
    },
    keywords: [
      ...service.title.split(' '),
      'Marseille',
      'Plombier',
      'Urgence',
      'Dépannage',
      ...quartiers,
      '13001',
      '13002',
      '13003',
      '13004',
      '13005',
      '13006',
      '13007',
      '13008',
      '13009',
      '13010',
      '13011',
      '13012',
      '13013',
      '13014',
      '13015',
      '13016',
      'Plombier pas cher',
      'Artisan plombier Marseille'
    ],
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((p) => p.slug === slug);

  if (!service) return notFound();

  return (
    <main className="min-h-screen py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-8 p-6 max-lg:items-center">
        <div className="md:col-span-2">
          <Image
            src={service.image}
            alt={service.alt}
            width={800}
            height={500}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
            priority
          />
          <h1 className="text-4xl font-bold max-lg:text-3xl mt-8 text-[#212121]">
            {service.title} à Marseille
          </h1>
          <p className="text-[#4d5562] mt-4 text-lg">{service.description}</p>

          {service.child && (
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mt-8 text-[#212121] border-b pb-2">
                {service.child.title1}
              </h2>
              <div
                className="mt-4 space-y-4"
                dangerouslySetInnerHTML={{ __html: service.child.description1 }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.child.img1 || '/images/plombier-expert-sur-marseille.webp'}
                    alt={`Intervention plomberie à ${service.child.localisation1 || 'Marseille'}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.child.img2 || '/images/plombier-expert-sur-marseille.webp'}
                    alt={`Service plomberie à ${service.child.localisation2 || 'Marseille'}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-12 text-[#212121] border-b pb-2">
                {service.child.title2}
              </h2>
              <div
                className="mt-4 space-y-4"
                dangerouslySetInnerHTML={{ __html: service.child.description2 || '' }}
              />
            </section>
          )}
        </div>

        <aside className="sticky top-24 self-start bg-white rounded-xl shadow-lg p-6">
          <ContactForm />
        </aside>
      </div>
    </main>
  );
}

// Updated services with neighborhood-focused content
