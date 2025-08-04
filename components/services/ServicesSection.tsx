// components/services/ServicesSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

const services = [
  {
    title: "Dépannage Plomberie Urgence 24h/24",
    description: "Intervention express à Aix-En-Provence pour fuites d'eau, canalisations bouchées et panne de chauffe-eau. Service garanti avec délai moyen de 30 minutes.",
    image: "/images/plombier-sur-aixenprovence-fuite-depannage.webp",
    alt: "Plombier en intervention urgente à Aix-En-Provence pour dépannage de plomberie",
    link: "/services/depannage-plomberie-urgence-aixenprovence"
  },
  {
    title: "Débouchage Canalisation Express",
    description: "Solution rapide pour canalisations bouchées à Aix-En-Provence. WC, évier, douche - Intervention en moins d'1h avec garantie de résultat.",
    image: "/images/debouchage-canalisation-aixenprovence.webp",
    alt: "Technicien plombier débouche une canalisation à Aix-En-Provence",
    link: "/services/debouchage-canalisation-aixenprovence"
  },
  {
    title: "Réparation Fuite d'Eau Sans Casse",
    description: "Détection précise et réparation de fuites à Aix-En-Provence sans endommager vos murs ou sols. Technologie infrarouge professionnelle.",
    image: "/images/reparation-fuite-eau-aixenprovence.webp",
    alt: "Réparation de fuite d'eau par plombier expert à Aix-En-Provence",
    link: "/services/reparation-fuite-eau-aixenprovence"
  },
  {
    title: "Installation Chauffe-Eau Aix-En-Provence",
    description: "Remplacement et pose de chauffe-eau à Aix-En-Provence (électrique, thermodynamique, gaz). Devis gratuit et installation sous 24h.",
    image: "/images/chauffeau.webp",
    alt: "Installation d'un chauffe-eau par plombier à Aix-En-Provence",
    link: "/services/installation-chauffe-eau-aixenprovence"
  },
  {
    title: "Rénovation Salle de Bains Clé en Main",
    description: "Transformation complète de votre salle de bains à Aix-En-Provence. Du design à la réalisation, avec garantie décennale.",
    image: "/images/salle-de-bain.webp",
    alt: "Rénovation de salle de bains par artisan plombier à Aix-En-Provence",
    link: "/services/renovation-salle-de-bains-aixenprovence"
  },
  {
    title: "Entretien Annuel Chaudière",
    description: "Contrat d'entretien pour chaudière à Aix-En-Provence. Détartrage, vérification des systèmes de sécurité et optimisation des performances.",
    image: "/images/remplacement-chaudiere-aixenprovence.webp",
    alt: "Entretien de chaudière par technicien qualifié à Aix-En-Provence",
    link: "/services/entretien-chaudiere-aixenprovence"
  }
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-24 bg-white text-center flex flex-col items-center px-6 sm:px-10 lg:px-16"
    >
      <p className="text-sm max-md:text-[13px] font-semibold text-gray-600 tracking-widest uppercase max-w-6xl text-center mb-3">
        Plomberie – Chauffage – Climatisation à Aix-En-Provence
      </p>

      <h2 className="text-4xl max-sm:text-3xl font-extrabold text-[#212121] mb-16 max-w-6xl text-center">
        Nos services de plomberie à Aix-En-Provence et ses environs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-7 border-4 border-[#f0f8ff] shadow-md">
              <Image
                src={service.image}
                alt={service.alt}
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#212121] mb-4">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base max-w-sm leading-relaxed mb-6 px-2">
              {service.description}
            </p>
            <Link
              href={service.link}
              title={`Détails du service ${service.title}`}
              className="mt-auto"
            >
              <Button size="lg" variant="submit" className="bg-[#E67E22] hover:bg-[#d68400] text-white font-semibold shadow-lg transition">
                Détails & tarifs
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto bg-[#f7f9fa] p-10 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#212121] mb-8">
          Pourquoi choisir notre service de plomberie à Aix-En-Provence ?
        </h3>
        <ul className="text-left grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <li className="flex items-start">
            <Check className="w-6 h-6 text-[#E67E22] mt-1 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold">
              Plombiers certifiés avec 10+ ans d&apos;expérience
            </span>
          </li>
          <li className="flex items-start">
            <Check className="w-6 h-6 text-[#E67E22] mt-1 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold">
              Intervention en moins de 30 minutes en urgence
            </span>
          </li>
          <li className="flex items-start">
            <Check className="w-6 h-6 text-[#E67E22] mt-1 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold">
              Devis gratuit et transparence tarifaire
            </span>
          </li>
          <li className="flex items-start">
            <Check className="w-6 h-6 text-[#E67E22] mt-1 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold">
              Garantie décennale sur tous nos travaux
            </span>
          </li>
        </ul>
      </div>
    </section>

  );
}