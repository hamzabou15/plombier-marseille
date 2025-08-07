"use client";

import Image from "next/image";
import Link from "next/link";
import {  Check } from "lucide-react";
import { Button as ShadButton } from "../ui/button";

const services = [
  {
    title: "Dépannage Plomberie Urgence 24h/24 à Marseille",
    description: "Intervention express dans tous les arrondissements de Marseille pour fuites d'eau, canalisations bouchées et panne de chauffe-eau. Délai moyen de 30 minutes dans les quartiers centraux.",
    image: "/images/plombier-sur-marseille-fuite-depannage.webp",
    alt: "Plombier en intervention urgente à Marseille Centre (13001) pour dépannage de plomberie",
    link: "/services/depannage-plomberie-urgence-marseille"
  },
  {
    title: "Débouchage Canalisation Express Marseille",
    description: "Solution rapide pour canalisations bouchées dans tous les arrondissements de Marseille. WC, évier, douche - Intervention en moins d'1h à Saint-Jean du Var, La Rode, Le Panier.",
    image: "/images/debouchage-canalisation-marseille.webp",
    alt: "Technicien plombier débouche une canalisation à Marseille (13008)",
    link: "/services/debouchage-canalisation-marseille"
  },
  {
    title: "Réparation Fuite d'Eau Sans Casse à Marseille",
    description: "Détection précise et réparation de fuites dans Marseille sans endommager vos murs ou sols. Technologie infrarouge professionnelle disponible 24h/24 dans tous les quartiers.",
    image: "/images/reparation-fuite-eau-marseille.webp",
    alt: "Réparation de fuite d'eau par plombier expert à Mourillon Marseille (13007)",
    link: "/services/reparation-fuite-eau-marseille"
  },
  {
    title: "Installation Chauffe-Eau Marseille",
    description: "Remplacement et pose de chauffe-eau à Marseille (électrique, thermodynamique, gaz). Devis gratuit et installation sous 24h dans tout Marseille et ses arrondissements.",
    image: "/images/chauffeau.webp",
    alt: "Installation d'un chauffe-eau par plombier à Pont-du-Las Marseille (13006)",
    link: "/services/installation-chauffe-eau-marseille"
  },
  {
    title: "Rénovation Salle de Bains Clé en Main à Marseille",
    description: "Transformation complète de votre salle de bains dans tous les quartiers de Marseille. Du design à la réalisation, avec garantie décennale. Arrondissements : 13001, 13006, 13007, etc.",
    image: "/images/salle-de-bain.webp",
    alt: "Rénovation de salle de bains par artisan plombier à Centre-ville Marseille (13001)",
    link: "/services/renovation-salle-de-bains-marseille"
  },
  {
    title: "Entretien Annuel Chaudière à Marseille",
    description: "Contrat d'entretien pour chaudière dans tout Marseille. Détartrage, vérification des systèmes de sécurité et optimisation des performances. Service disponible dans tous les arrondissements.",
    image: "/images/remplacement-chaudiere-marseille.webp",
    alt: "Entretien de chaudière par technicien qualifié à La Rode Marseille (13008)",
    link: "/services/entretien-chaudiere-marseille"
  }
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-24 bg-white text-center flex flex-col items-center px-6 sm:px-10 lg:px-16"
    >
      <p className="text-sm max-md:text-[13px] font-semibold text-gray-600 tracking-widest uppercase max-w-7xl text-center mb-3">
        Plomberie - Chauffage - Climatisation à Marseille
      </p>

      <h2 className="text-4xl max-sm:text-3xl font-extrabold text-[#212121] mb-16 max-w-7xl text-center">
        Services de plomberie complets à Marseille et ses arrondissements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
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
              <ShadButton size="lg" className="bg-[#43926b] hover:bg-[#39624e] text-white font-semibold shadow-lg transition">
                Détails du service
              </ShadButton>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto bg-[#f7f9fa] p-10 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#212121] mb-8">
          Pourquoi choisir notre service de plomberie à Marseille ?
        </h3>
        <ul className="text-left grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <li className="flex items-start">
            <Check className="w-6 h-6 text-[#43926b] mt-1 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold">
              Plombiers certifiés avec 12+ ans d&apos;expérience spécifique à Marseille
            </span>
          </li>
          <li className="flex items-start">
            <Check className="w-6 h-6 text-[#43926b] mt-1 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold">
              Intervention en moins de 30 minutes dans les arrondissements centraux (13001, 13006, 13007)
            </span>
          </li>
          <li className="flex items-start">
            <Check className="w-6 h-6 text-[#43926b] mt-1 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold">
              Devis gratuit et transparence tarifaire sans surprise pour Marseille
            </span>
          </li>
          <li className="flex items-start">
            <Check className="w-6 h-6 text-[#43926b] mt-1 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold">
              Garantie décennale sur tous nos travaux à Marseille
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}