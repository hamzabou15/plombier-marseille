"use client";

import React from "react";
import { Button } from "../ui/button";
import { MdLocalPhone } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import Link from "next/link";

const CTA = () => {
  return (
    <>
      {/* Desktop / large */}
      <div className="hidden md:flex fixed bottom-16 right-6 flex-col items-end z-50 gap-3">
        {/* Urgence téléphone */}
        <a
          href="tel:+33756935200"
          aria-label="Appeler un plombier en urgence à Aix-en-Provence"
          className="relative group"
        >
          <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-[#ffae42] to-[#e67e22] opacity-60 transition-all group-hover:opacity-90" />
          <Button
            variant="read"
            size="icon"
            rounded={true}
            className="relative z-10 shadow-2xl ring-2 ring-[#E67E22]/40 hover:scale-105 transition-transform"
          >
            <MdLocalPhone className="h-6 w-6" />
          </Button>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#2f2f2f] px-3 py-1 text-xs font-medium text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
            Urgence Plombier
          </div>
        </a>

        {/* Devis */}
        <Link
          href="/contact"
          aria-label="Demander un devis gratuit"
          className="relative group"
        >
          <Button
            variant="send"
            size="icon"
            rounded={true}
            className="relative z-10 shadow-lg hover:scale-105 transition-transform"
          >
            <IoNewspaperOutline className="h-6 w-6" />
          </Button>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1 text-xs font-medium text-[#212121] border border-[#E67E22] opacity-0 transition-all duration-200 group-hover:opacity-100">
            Devis Gratuit
          </div>
        </Link>
      </div>

      {/* Mobile: bottom center */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <a
          href="tel:+33756935200"
          aria-label="Appeler un plombier en urgence"
          className="group relative"
        >
          <Button
            variant="read"
            size="lg"
            rounded={true}
            className="flex items-center gap-2 shadow-xl"
          >
            <MdLocalPhone className="h-5 w-5" />
            <span className="font-semibold">Appel Urgence</span>
          </Button>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[#2f2f2f] text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100">
            Disponible 24h/24
          </div>
        </a>
        <Link href="/contact" aria-label="Demander un devis gratuit">
          <Button
            variant="send"
            size="lg"
            rounded={true}
            className="flex items-center gap-2 shadow-lg"
          >
            <IoNewspaperOutline className="h-5 w-5" />
            <span className="font-semibold">Devis Gratuit</span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CTA;
