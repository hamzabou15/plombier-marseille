"use client";

import Image from "next/image";
import { Phone, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Intro() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 flex flex-col gap-6">
        <p className="uppercase text-sm font-semibold tracking-widest text-gray-600">
          Plombier Marseille - Artisan Local depuis 2010
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 leading-snug max-w-md max-sm:text-2xl">
          Notre Histoire : Plombier Expert à Marseille depuis 2010
        </h2>
        <p className="text-lg text-gray-700 max-w-lg">
          Fondée en 2010 par Jean Dupont, <strong>Plombier Marseille Expert</strong> est devenue une référence en plomberie d&apos;urgence dans tous les arrondissements de Marseille. Notre mission : fournir un service rapide et professionnel aux habitants de Marseille, avec des interventions dans tous les quartiers : Centre-ville (13001), Mourillon (13007), Pont-du-Las (13006), Saint-Jean du Var, La Rode.
        </p>

        <ul className="space-y-3 text-gray-700">
          {[
            "Plombiers certifiés : Qualibat, RGE, Garantie décennale",
            "Matériel de pointe : caméra d'inspection, détecteurs de fuite",
            "Engagement qualité : satisfaction client garantie à Marseille",
            "Service 24h/24 : 7j/7, jours fériés inclus dans tout Marseille",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#43926b] flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 max-sm:w-full max-sm:justify-center">
          <Link href="/contact" className="flex-1 max-sm:w-full">
            <Button size="lg" variant="submit" className="w-full">
              Devis Gratuit Marseille
            </Button>
          </Link>
          <a
            href="tel:+33756935200"
            aria-label="Appeler un plombier urgence Marseille"
            className="flex-1 max-sm:w-full"
          >
            <Button size="lg" variant="submit" className="w-full flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Urgence 07 56 93 52 00</span>
            </Button>
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
        <div className="relative h-72 rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <Image
            src="/images/chauffeau.webp"
            alt="Remplacement de chauffe-eau par plombier expert à Marseille Centre (13001)"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center text-sm rounded-b-xl">
            Installation chauffe-eau à Marseille Centre (13001)
          </div>
        </div>
        <div className="relative h-72 rounded-xl overflow-hidden shadow-lg border border-gray-100 mt-12 sm:mt-0">
          <Image
            src="/images/plombier-marseille-expert.webp"
            alt="Plombier professionnel réparant une fuite d'eau à Quartier Mourillon Marseille (13007)"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center text-sm rounded-b-xl">
            Dépannage fuite d&apos;eau à Quartier Mourillon (13007)
          </div>
        </div>
      </div>
    </section>
  );
}