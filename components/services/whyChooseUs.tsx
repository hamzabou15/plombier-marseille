"use client";

import Image from "next/image";
import { ShieldCheck, Clock, ThumbsUp, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7f9fa] py-20 px-6 sm:px-12 max-w-6xl mx-auto rounded-lg shadow-md my-24">
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
              desc: "Tous nos travaux bénéficient d’une garantie décennale, gage de qualité et de confiance.",
            },
            {
              icon: <Clock className="w-10 h-10 text-[#E67E22]" />,
              title: "Intervention rapide 24/7",
              desc: "Nous sommes disponibles 24h/24, 7j/7, pour vous dépanner en moins de 30 minutes à Aix-en-Provence.",
            },
            {
              icon: <Users className="w-10 h-10 text-[#E67E22]" />,
              title: "Équipe certifiée & expérimentée",
              desc: "Nos plombiers certifiés ont plus de 12 ans d’expérience et un sens aigu du service client.",
            },
            {
              icon: <ThumbsUp className="w-10 h-10 text-[#E67E22]" />,
              title: "Satisfaction client 98%",
              desc: "Nous mettons tout en œuvre pour assurer votre satisfaction, comme en témoignent nos avis clients.",
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
            alt="Plombier professionnel en action à Aix-en-Provence"
            width={500}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
