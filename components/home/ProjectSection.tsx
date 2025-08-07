"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface Project {
    title: string;
    category: string;
    image: string;
    alt: string;
}
const projects: Project[] = [
    {
        title: "Débouchage canalisation cuisine - Marseille Centre (13001)",
        category: "Intervention express sous 1h - Prix 89€",
        image: "/images/salle-de-bain.webp",
        alt: "Débouchage canalisation cuisine par plombier urgence Centre-ville Marseille",
    },
    {
        title: "Remplacement chauffe-eau - Quartier Endoume (13007)",
        category: "Installation en 2h - Economie 30%",
        image: "/images/entretien-de-chaudiere-a-marseille.webp",
        alt: "Remplacement chauffe-eau par plombier quartier Endoume Marseille",
    },
    {
        title: "Réparation fuite murale - Saint-Victor (13007)",
        category: "Détection sans casse - Fuite réparée en 45 min",
        image: "/images/Reparation-de-fuite-eau.webp",
        alt: "Réparation fuite murale à Saint-Victor par expert plomberie Marseille",
    },
    {
        title: "Détection fuite enterrée - Vauban (13006)",
        category: "Technologie non destructive - Diagnostic précis",
        image: "/images/Inspection-de-canalisation-pour-fuite-enterrer.webp",
        alt: "Détection fuite canalisation enterrée à Vauban Marseille",
    },
    {
        title: "Rénovation salle de bain - Le Panier (13002)",
        category: "Travaux clé en main - Réalisation en 3 jours",
        image: "/images/Installations-de-canalisations-habiles.webp",
        alt: "Rénovation salle de bain par plombier Le Panier Marseille",
    },
];

export default function ProjectSection() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scroll = (direction: "left" | "right"): void => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        scrollRef.current.scrollLeft = scrollLeft - (x - startX);
    };

    const stopDrag = () => setIsDragging(false);

    return (
        <section className="bg-[#f7f9fa] px-16 max-md:px-6 py-16 mx-auto max-sm:pex-5">
            <div className="max-w-7xl mx-auto  mb-10">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col gap-4">
                        <p className="uppercase text-sm tracking-widest text-gray-500 font-medium">
                            Nos réalisations à Marseille
                        </p>
                        <div className="flex gap-5 max-sm:flex-col">
                            <h2 className="text-4xl font-extrabold  max-xl:text-[28px] text-[#212121]">
                                Interventions Plomberie à Marseille
                            </h2>
                            <p className="mt-2 text-gray-600 max-w-xl text-base">
                                Exemples concrets de dépannages urgents réalisés par nos plombiers experts sur Marseille et ses quartiers.
                            </p>
                        </div>

                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition"
                            aria-label="Voir les projets précédents"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition"
                            aria-label="Voir les projets suivants"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-2 px-2 cursor-grab active:cursor-grabbing select-none"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={stopDrag}
                    onMouseLeave={stopDrag}
                >
                    <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative min-w-[350px] bg-white rounded-xl overflow-hidden shadow-sm transition snap-center cursor-pointer duration-300"
                        >
                            <div className="relative w-full h-72 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:hover:scale-[1.1]"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-4 py-3 translate-y-full group-hover:translate-y-[-20px] transition-transform duration-500 ease-in-out">
                                    <h3 className="text-base font-semibold text-[#212121]">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{project.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}