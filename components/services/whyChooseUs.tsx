"use client";

import Image from "next/image";
import { ShieldCheck, Clock, Users, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7f9fa] py-20 px-6 sm:px-12 max-w-7xl mx-auto rounded-lg shadow-md my-24">
      <h2 className="text-4xl font-extrabold text-[#E67E22] mb-8 text-center">
        Pourquoi choisir <span className="text-[#0F172A]">Plombier Aix-En-Provence SOS</span> ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte + avantages */}
        <div className="space-y-8">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-[#E67E22]" />,
              title: "Garantie décennale",
              desc: "Tous nos travaux à Aix-en-Provence bénéficient d'une garantie décennale, gage de qualité et de confiance.",
            },
            {
              icon: <Clock className="w-10 h-10 text-[#E67E22]" />,
              title: "Intervention rapide 24/7",
              desc: "Disponibles 24h/24 dans tout Aix-en-Provence : Centre-ville, Mourillon, Pont-du-Las. Délai moyen de 30 minutes.",
            },
            {
              icon: <Users className="w-10 h-10 text-[#E67E22]" />,
              title: "Équipe certifiée & expérimentée",
              desc: "Plombiers certifiés avec 12+ ans d'expérience spécifique à Aix-en-Provence et le Var.",
            },
            {
              icon: <MapPin className="w-10 h-10 text-[#E67E22]" />,
              title: "Couverture complète du Var",
              desc: "Intervention dans tout le département : La Valette-du-Var, La Garde, Le Revest-les-Eaux, Ollioules, etc.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex items-center justify-center bg-white rounded-full shadow-lg p-4">
                {icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-1">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#E67E22]/30">
          <Image
            src="/images/plombier-sur-aixenprovence-expertV2.webp"
            alt="Plombier professionnel en action à Quartier Centre Aix-en-Provence"
            width={500}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      
      <div className="mt-16 text-center bg-[#0F172A] text-white p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">Disponible dans tout Aix-en-Provence et le Var</h3>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {[
            "Centre-ville", "Mourillon", "Pont-du-Las", "Saint-Jean du Var", 
            "La Rode", "La Valette-du-Var", "La Garde", "Le Revest-les-Eaux",
            "Ollioules", "La Seyne-sur-Mer", "Six-Fours-les-Plages"
          ].map((zone, idx) => (
            <span
              key={idx}
              className="bg-[#E67E22] text-white px-4 py-1 rounded-full text-sm font-medium select-none"
            >
              {zone}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}