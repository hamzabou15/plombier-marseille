"use client";

import { CheckCircle, Clock, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Engagements() {
  return (
    <section className="bg-gradient-to-b from-[#f0fcf4] to-[#ccf5d0] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#43926b] mb-4">
          Nos Engagements à Marseille
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
          Chez Plombier Marseille Expert, nous nous engageons à fournir un service de qualité supérieure à tous nos clients de Marseille et ses arrondissements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Clock className="w-12 h-12 text-[#43926b] mx-auto" />,
              title: "Rapidité d'intervention",
              desc: "Intervention en moins de 30 minutes dans les arrondissements centraux de Marseille (13001, 13006, 13007)."
            },
            {
              icon: <ShieldCheck className="w-12 h-12 text-[#43926b] mx-auto" />,
              title: "Garantie décennale",
              desc: "Tous nos travaux sont garantis 10 ans, conformément à la loi, pour votre tranquillité à Marseille."
            },
            {
              icon: <CheckCircle className="w-12 h-12 text-[#43926b] mx-auto" />,
              title: "Plombiers certifiés",
              desc: "Notre équipe est composée exclusivement de plombiers certifiés avec plus de 10 ans d'expérience à Marseille."
            },
            {
              icon: <HeartHandshake className="w-12 h-12 text-[#43926b] mx-auto" />,
              title: "Satisfaction client",
              desc: "98% de nos clients à Marseille nous recommandent. Votre satisfaction est notre priorité absolue."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}