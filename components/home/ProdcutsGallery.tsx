"use client";
import React from "react";
import Image from "next/image";

const images = [
    {
        src: "/images/plombier-sur-aixenprovence-fuite-depannage.webp",
        alt: "Dépannage fuite d'eau urgence 24h/24 à Aix-En-Provence",
    },
    {
        src: "/images/plombier-sur-aixenprovence-fuite-Renovation.webp",
        alt: "Rénovation salle de bain par plombier expert Aix-En-Provence",
    },
    {
        src: "/images/plombier-sur-aixenprovence-fuite-reparation.webp",
        alt: "Réparation canalisation bouchée à Aix-En-Provence",
    },
    {
        src: "/images/plombier-sur-aixenprovence-fuite.webp",
        alt: "Installation chauffe-eau par plombier Aix-En-Provence",
    },
    {
        src: "/images/plombier-sur-aixenprovence-fuite-canalisation.webp",
        alt: "Détection fuite d'eau non destructive à Aix-En-Provence",
    },
];

export default function ProductGallery() {
    return (
        <section className="w-full  px-0 bg-white" aria-label="Galerie interventions plomberie Aix-En-Provence">
            <div className="grid grid-cols-5 w-full bg-black justify-center px-0 max-md:grid-cols-2">
                {images.map((img, i) => (
                    <div key={i} className="w-full h-[180px] relative overflow-hidden hover:opacity-80 transition duration-300">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </div>
                ))}
            </div>
        </section>
    );
}