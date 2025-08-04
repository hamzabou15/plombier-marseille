"use client";

import { Droplet, Pipette, Wrench, Bath, Thermometer, Zap } from "lucide-react";

const services = [
  {
    title: "Débouchage Canalisation",
    icon: <Pipette className="w-12 h-12 text-[#E67E22]" />,
    description: "Débouchement urgent WC, éviers et canalisations à Aix-En-Provence",
    keywords: "débouchage canalisation aixenprovence, wc bouché aixenprovence"
  },
  {
    title: "Réparation Fuite d'Eau",
    icon: <Droplet className="w-12 h-12 text-[#E67E22]" />,
    description: "Détection et réparation de fuites sans casse",
    keywords: "fuite eau aixenprovence, réparation fuite var"
  },
  {
    title: "Urgence Chauffe-Eau",
    icon: <Thermometer className="w-12 h-12 text-[#E67E22]" />,
    description: "Dépannage et remplacement chauffe-eau 24h/24",
    keywords: "chauffe-eau aixenprovence, dépannage ballon eau chaude"
  },
  {
    title: "Plomberie Salle de Bain",
    icon: <Bath className="w-12 h-12 text-[#E67E22]" />,
    description: "Rénovation complète avec garantie artisanale",
    keywords: "rénovation salle bain aixenprovence, plomberie sanitaire"
  },
  {
    title: "Installation Pompe à Chaleur",
    icon: <Zap className="w-12 h-12 text-[#E67E22]" />,
    description: "Certifié QUALIPAC - Aides de l'État",
    keywords: "pompe à chaleur aixenprovence, plombier chauffagiste var"
  },
  {
    title: "Dépannage Chauffage",
    icon: <Wrench className="w-12 h-12 text-[#E67E22]" />,
    description: "Chaudières, radiateurs et circuits de chauffage",
    keywords: "dépannage chauffage aixenprovence, plombier chauffagiste"
  }
];

export default function ServiceSection() {
  return (
    <section id="services" className="bg-white py-16 px-4 max-sm:px-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-500 font-medium">
            Nos SOSises
          </p>
          <h2 className="text-4xl font-extrabold  max-xl:text-[28px] text-[#212121]">
            Services Plomberie à Aix-En-Provence
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Artisan plombier local intervenant 24h/24 pour tous vos dépannages dans le Var
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
              <a 
                href={`tel:+334XXXXXXX`} 
                className="text-[#E67E22] font-medium hover:underline inline-flex items-center"
              >
                <span>Demander une intervention</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}