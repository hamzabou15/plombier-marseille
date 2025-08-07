"use client";

import { Droplet, Pipette, Wrench, Bath, Thermometer, Zap } from "lucide-react";

const services = [
  {
    title: "Débouchage Canalisation Marseille",
    icon: <Pipette className="w-12 h-12 text-[#43926b]" />,
    description: "Débouchement urgent WC, éviers et canalisations à Marseille - Prix imbattables",
    keywords: "débouchage canalisation marseille, plombier pas cher marseille"
  },
  {
    title: "Réparation Fuite d'Eau Marseille",
    icon: <Droplet className="w-12 h-12 text-[#43926b]" />,
    description: "Détection et réparation de fuites sans casse - Quartiers desservis : Le Panier, Vauban, Endoume",
    keywords: "fuite eau marseille, plombier a proximité marseille"
  },
  {
    title: "Urgence Chauffe-Eau Marseille",
    icon: <Thermometer className="w-12 h-12 text-[#43926b]" />,
    description: "Dépannage et remplacement chauffe-eau 24h/24 - Service rapide dans toute Marseille",
    keywords: "chauffe-eau marseille, dépannage ballon eau chaude marseille"
  },
  {
    title: "Plomberie Salle de Bain Marseille",
    icon: <Bath className="w-12 h-12 text-[#43926b]" />,
    description: "Rénovation complète avec garantie artisanale - Quartiers : Saint-Victor, Le Roucas",
    keywords: "rénovation salle bain marseille, plomberie sanitaire marseille"
  },
  {
    title: "Installation Pompe à Chaleur Marseille",
    icon: <Zap className="w-12 h-12 text-[#43926b]" />,
    description: "Certifié QUALIPAC - Aides de l'État - Installations dans tout Marseille",
    keywords: "pompe à chaleur marseille, plombier chauffagiste marseille"
  },
  {
    title: "Dépannage Chauffage Marseille",
    icon: <Wrench className="w-12 h-12 text-[#43926b]" />,
    description: "Chaudières, radiateurs et circuits de chauffage - Service 24h/24 à Marseille",
    keywords: "dépannage chauffage marseille, plombier chauffagiste marseille"
  }
];

export default function ServiceSection() {
  return (
    <section id="services" className="bg-white py-16 px-4 max-sm:px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-500 font-medium">
            Nos SOSises à Marseille
          </p>
          <h2 className="text-4xl font-extrabold  max-xl:text-[28px] text-[#212121]">
            Services Plomberie Urgence Marseille
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Artisan plombier local intervenant 24h/24 pour tous vos dépannages à Marseille et ses quartiers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#f7f9fa] p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[white] p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#212121] ml-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Zones desservies : Centre-ville, Le Panier, Endoume, Saint-Victor, Vauban
              </p>
              <a 
                href="tel:+33756935200" 
                className="text-[#43926b] font-medium hover:underline inline-flex items-center mt-4"
              >
                <span>Demander une intervention à Marseille</span>
              </a>
            </div>
          ))}
        </div>

        {/* FAQ Intégrée */}
        <div className="mt-16 bg-[#f7f9fa] p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-[#212121] mb-6">
            Questions fréquentes - Plombier Marseille
          </h3>
          <div className="space-y-4">
            {[
              {
                q: "Quel est votre délai d'intervention à Marseille ?",
                r: "Nous intervenons en moins de 30 minutes dans la plupart des quartiers de Marseille pour les urgences."
              },
              {
                q: "Quel est votre tarif pour un débouchage à Marseille ?",
                r: "Nos tarifs pour débouchage canalisation à Marseille commencent à 89€ TTC - le plus compétitif de la région"
              },
              {
                q: "Êtes-vous vraiment disponible 24h/24 à Marseille ?",
                r: "Oui, notre service d'urgence plomberie est actif 24h/24 dans tout Marseille, même les dimanches et jours fériés"
              }
            ].map((item, i) => (
              <div key={i} className="border-b pb-4">
                <p className="font-semibold text-[#43926b]">Q: {item.q}</p>
                <p className="mt-2 text-gray-700">R: {item.r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}