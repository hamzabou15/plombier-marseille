"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { Button } from "../ui/button";

const stats = [
    { label: "Interventions réussies à Marseille", value: "1500+" },
    { label: "Années d'expérience à Marseille", value: "12" },
    { label: "Satisfaction client à Marseille", value: "98%" },
];

export default function HeroPlomberie2025() {
    return (
        <section className="relative bg-[#0F172A] text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/plomberie-bg.webp"
                    alt="Plombier Marseille - Service d'urgence 24h/24 dans tous les arrondissements"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 via-[#0F172A]/85 to-[#1E293B]/85" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-xl:px-10 max-sm:px-5">
                {/* Texte */}
                <div>
                    <span className="inline-block bg-[#43926b]/25 text-[#43926b] px-4 py-1 rounded-full text-sm font-semibold mb-5 tracking-wide uppercase">
                        Disponible 24h/24 - 7j/7 à Marseille
                    </span>
                    <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight max-w-xl">
                        Votre plombier <span className="text-[#43926b]">expert</span> à Marseille
                    </h1>
                    <p className="mt-6 text-lg text-gray-200 max-w-lg leading-relaxed">
                        Intervention rapide dans tous les arrondissements de Marseille, diagnostic précis, réparation garantie.
                        Fuites, débouchages, chauffe-eau et rénovations - Service 24h/24 dans les quartiers Centre-ville, Le Panier, Endoume.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-5 max-sm:items-center max-sm:justify-center">
                        <Link href="/contact" className="flex-1 max-w-xs">
                            <Button
                                size="lg"
                                className="w-full bg-[#43926b] hover:bg-[#39624e] text-white font-semibold shadow-lg transition"
                            >
                                Devis Gratuit Marseille
                            </Button>
                        </Link>
                        <a href="tel:+33756935200" className="flex-1 max-w-xs">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full border-[#43926b] text-[#43926b] hover:bg-[#43926b] hover:text-white font-semibold shadow transition"
                            >
                                <Phone className="w-5 h-5 mr-3" /> Urgence 07 56 93 52 00
                            </Button>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-14 grid grid-cols-3 gap-8 max-w-xs sm:max-w-none">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl font-bold text-[#43926b]">{stat.value}</p>
                                <p className="text-sm sm:text-base text-gray-300">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image avec forme organique */}
                <div className="relative">
                    <div className="absolute -inset-6 rounded-[2.5rem] bg-[#43926b]/25 blur-3xl" />
                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-white/20">
                        <Image
                            src="/images/plombier-expert-Marseille.webp"
                            alt="Plombier professionnel en intervention à Centre-ville Marseille (13001)"
                            width={520}
                            height={620}
                            className="object-cover w-full"
                            priority
                        />
                        <div className="absolute top-5 right-5 bg-white text-[#0F172A] px-4 py-1 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">
                            <Star className="w-5 h-5 text-yellow-400" /> 5.0 Avis Clients Marseille
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}