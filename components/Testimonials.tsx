"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Nathalie Dupont",
    location: "Centre-ville (13001), Marseille",
    image: "/icons/femme1.webp",
    quote:
      "Intervention rapide pour une fuite d'eau à Marseille Centre. Service professionnel 24h/24. Plombier Marseille Expert a résolu mon problème en 30 minutes !",
    color: "black",
  },
  {
    name: "Olivier Martin",
    location: "Quartier Vauban (13006), Marseille",
    image: "/icons/homme1.webp",
    quote:
      "Très professionnel, dépannage en urgence sans casse. Détection de fuite impeccable à Vauban. Plombier pas cher Marseille, je recommande !",
    color: "teal",
  },
  {
    name: "Claire Lefèvre",
    location: "Endoume (13007), Marseille",
    image: "/icons/femme2.webp",
    quote:
      "Intervention en urgence à Endoume, détection rapide de la fuite d'eau. Aucun dégât, travail soigné. Plombier expérimenté et fiable à Marseille.",
    color: "teal",
  },
  {
    name: "Julien Fournier",
    location: "Le Panier (13002), Marseille",
    image: "/icons/homme2.webp",
    quote:
      "Service impeccable dans le quartier Le Panier : diagnostic précis et réparation sans délais. Le meilleur plombier de Marseille !",
    color: "black",
  },
  {
    name: "Sophie Bernard",
    location: "Saint-Victor (13007), Marseille",
    image: "/icons/femme3.webp",
    quote:
      "Fuite détectée en un rien de temps à Saint-Victor, sans déranger la structure. Excellent suivi. Plombier Marseille à recommander absolument.",
    color: "teal",
  },
  {
    name: "Marc Petit",
    location: "Le Roucas (13007), Marseille",
    image: "/icons/homme3.webp",
    quote:
      "Problème résolu rapidement au Roucas, prix transparent et service réactif. Le plombier d'urgence idéal pour Marseille !",
    color: "black",
  },
];

const VISIBLE_CARDS = 2;

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: true,
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const visibleTestimonials: typeof testimonials = [];
  for (let i = 0; visibleTestimonials.length < VISIBLE_CARDS; i++) {
    visibleTestimonials.push(testimonials[(index + i) % testimonials.length]);
  }

  return (
    <section
      className="w-full px-4 sm:px-6 py-12 xl:max-w-7xl mx-auto"
      aria-label="Témoignages clients plombier Marseille"
    >
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest text-[#555555] uppercase">Avis Clients Marseille</p>
        <h2 className="text-4xl font-bold text-[#2f2f2f] mt-2 max-xl:text-[28px]">
          Ce que disent nos clients de Marseille et ses quartiers
        </h2>
      </div>

      <div
        className="relative flex items-stretch justify-center gap-6 px-4 flex-wrap md:flex-nowrap cursor-grab active:cursor-grabbing select-none"
        {...handlers}
      >
        <button
          aria-label="Précédent"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:scale-105 transition"
        >
          <ChevronLeft className="w-6 h-6 text-[#43926b]" />
        </button>

        {visibleTestimonials.map((t, i) => (
          <Card
            key={`${t.name}-${i}-${index}`}
            className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md border border-[#e8dfd6] transition-transform duration-500 ease-in-out"
            aria-label={`Témoignage de ${t.name} à ${t.location}`}
          >
            <Quote
              className={cn(
                "w-6 h-6 mb-4",
                t.color === "black" ? "text-[#2f2f2f]" : "text-[#1f7f6f]"
              )}
              aria-hidden="true"
            />
            <p className="text-[#4a4a4a] text-lg leading-relaxed">{t.quote}</p>
            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#f0f0f5] flex-shrink-0">
                <img
                  src={t.image}
                  alt={`${t.name}, ${t.location}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/icons/default-user.webp";
                  }}
                />
              </div>
              <div>
                <p className="font-semibold text-[#2f2f2f]">{t.name}</p>
                <p className="text-sm text-[#6b7280]">{t.location}</p>
                <div className="flex mt-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}

        <button
          aria-label="Suivant"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:scale-105 transition"
        >
          <ChevronRight className="w-6 h-6 text-[#43926b]" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Voir témoignage ${idx + 1}`}
            onClick={() => setIndex(idx)}
            className={cn(
              "w-3 h-3 rounded-full transition",
              idx === index ? "bg-[#43926b]" : "bg-[#d1d5db]"
            )}
          />
        ))}
      </div>
    </section>
  );
}