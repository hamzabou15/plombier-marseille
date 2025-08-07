"use client";

import Image from "next/image";
import { ShieldCheck, Clock, Users, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7f9fa] py-20 px-6 sm:px-12 max-w-7xl mx-auto rounded-lg shadow-md my-24">
      <h2 className="text-4xl font-extrabold text-[#43926b] mb-8 text-center">
        Pourquoi choisir <span className="text-[#0F172A]">Plombier Marseille Expert</span> ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte + avantages */}
        <div className="space-y-8">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-[#43926b]" />,
              title: "Garantie décennale à Marseille",
              desc: "Tous nos travaux dans Marseille bénéficient d'une garantie décennale, gage de qualité et de confiance pour les Marseillais.",
            },
            {
              icon: <Clock className="w-10 h-10 text-[#43926b]" />,
              title: "Intervention rapide 24/7 à Marseille",
              desc: "Disponibles 24h/24 dans tout Marseille : Centre-ville (13001), Mourillon (13007), Pont-du-Las (13006). Délai moyen de 30 minutes.",
            },
            {
              icon: <Users className="w-10 h-10 text-[#43926b]" />,
              title: "Équipe certifiée & expérimentée à Marseille",
              desc: "Plombiers certifiés avec 12+ ans d'expérience spécifique dans les arrondissements de Marseille.",
            },
            {
              icon: <MapPin className="w-10 h-10 text-[#43926b]" />,
              title: "Couverture complète des arrondissements",
              desc: "Intervention dans tous les arrondissements de Marseille : 13001 à 13016, sans exception.",
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
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#43926b]/30">
          <Image
            src="/images/plombier-sur-marseille-expertV2.webp"
            alt="Plombier professionnel en action à Centre-ville Marseille (13001)"
            width={500}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      
      <div className="mt-16 text-center bg-[#0F172A] text-white p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">Disponible dans tous les arrondissements de Marseille</h3>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {[
            "13001 (Centre-ville)", "13002 (Le Panier)", "13003 (Belle de Mai)", 
            "13004 (Château-Gombert)", "13005 (Baille)", "13006 (Vauban)", 
            "13007 (Endoume)", "13008 (Prado)", "13009 (Mazargues)", 
            "13010 (Saint-Loup)", "13011 (La Valentine)", "13012 (Les Trois Lucs)",
            "13013 (Saint-Just)", "13014 (Saint-Joseph)", "13015 (Saint-Antoine)",
            "13016 (Saint-Menet)"
          ].map((zone, idx) => (
            <span
              key={idx}
              className="bg-[#43926b] text-white px-4 py-1 rounded-full text-sm font-medium select-none"
            >
              {zone}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}