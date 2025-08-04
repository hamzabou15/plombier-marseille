"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden p-20 max-lg:p-10 max-sm:p-5 ">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#E67E22]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#2f2f2f]/5 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col-reverse 
                    lg:flex-row items-center gap-16 relative z-10 mb-20">
        {/* Texte */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="uppercase text-sm tracking-widest font-semibold text-[#555555] mb-1">
              Plomberie d’urgence — Aix-en-Provence
            </p>
            <h1 className="font-extrabold leading-tight text-[#2f2f2f] text-4xl sm:text-5xl md:text-6xl">
              Plombier Aix-en-Provence <span className="text-[#E67E22]">Urgence 24/7</span>
              <br />
              Intervention Express & Artisanale
            </h1>
            <p className="mt-4 text-base text-[#4a4a4a] max-w-prose">
              Dépannage rapide pour fuites, canalisations bouchées et chauffe-eau en panne. Devis transparent, déplacement offert, équipe certifiée — disponible en moins de 30 minutes.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link href="/contact" className="flex-1">
              <Button
                size="lg"
                variant="submit"
                className="w-full flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                ☎ Urgence Plomberie
              </Button>
            </Link>
            <Link href="/services" className="flex-1">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-[#E67E22] text-[#2f2f2f]"
              >
                Nos Services
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 mt-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              {
                value: "24h/24",
                label: "7j/7 même jours fériés",
                icon: <Clock className="w-6 h-6 text-[#E67E22]" />,
              },
              {
                value: "30 min",
                label: "Délai moyen d'intervention",
                icon: <CheckCircle className="w-6 h-6 text-[#E67E22]" />,
              },
              {
                value: "0€",
                label: "Déplacement & Devis",
                icon: <Phone className="w-6 h-6 text-[#E67E22]" />,
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow border border-[#e8dfd6] w-full"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex-shrink-0">{stat.icon}</div>
                <div>
                  <p className="text-xl font-bold text-[#E67E22]">{stat.value}</p>
                  <p className="text-sm text-[#555555]">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "circOut" }}
          >
            <Image
              src="/images/plombier-a-aixenprovence.webp"
              alt="Plombier professionnel en intervention d'urgence à Aix-En-Provence pour réparation fuite d'eau"
              width={700}
              height={600}
              className="w-full h-auto object-cover"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
