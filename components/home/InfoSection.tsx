"use client";
import Link from "next/link";
import { Phone, Check, AlertCircle, CheckCircle } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="bg-gradient-to-b from-[#f0fcf4] to-[#ccf5d0] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intro & Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold leading-tight max-sm:text-3xl text-[#2f2f2f]">
            Plombier Urgence Marseille <span className="text-[#43926b]">24h/24</span> — Interventions Express
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#4a4a4a]">
            Fuite d&apos;eau, canalisation bouchée ou panne de chauffe-eau ? Notre équipe intervient en moins de <strong>30 minutes</strong>, <strong>24h/24</strong> et <strong>7j/7</strong> dans Marseille et ses environs.
          </p>
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left content */}
          <div className="space-y-8">
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#e8dfd6]">
              <h3 className="text-2xl font-bold text-[#2f2f2f] mb-3">
                Interventions dans tous les quartiers de Marseille
              </h3>
              <p className="text-base leading-relaxed text-[#555555]">
                Nous couvrons <strong>tous les arrondissements et quartiers de Marseille</strong> : 
                13001 (Centre-ville, Le Panier), 13002 (Belsunce, Noailles), 13003 (Belle de Mai), 
                13004 (Château-Gombert), 13005 (Baille, La Timone), 13006 (Vauban, Cours Julien), 
                13007 (Endoume, Le Pharo), 13008 (Prado, Périer), 13009 (Mazargues, Baumettes), 
                13010 (Saint-Loup), 13011 (La Valentine, Saint-Menet), 13012 (Les Trois Lucs, Montolivet), 
                13013 (Saint-Just, Château-Gombert), 13014 (Saint-Joseph, Saint-Barthélémy), 
                13015 (Saint-Antoine, Les Aygalades).
              </p>
            </div>
            
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#e8dfd6]">
              <h3 className="text-2xl font-bold text-[#2f2f2f] mb-3">
                Communes limitrophes desservies
              </h3>
              <p className="text-base leading-relaxed text-[#555555]">
                Nous intervenons également dans <strong>les communes autour de Marseille</strong> : 
                Allauch, Plan-de-Cuques, Septèmes-les-Vallons, Les Pennes-Mirabeau, Marignane, 
                Vitrolles, Aubagne, Cassis, La Ciotat, Carry-le-Rouet, Ensuès-la-Redonne.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#e8dfd6]">
              <h3 className="text-2xl font-bold text-[#2f2f2f] mb-3">
                Ce que vous gagnez avec nous à Marseille
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
                {[
                  "Plombiers certifiés et assurés",
                  "Intervention <30 minutes en urgence",
                  "Tarifs transparents sans surprise",
                  "Matériel de haute qualité",
                  "Disponibilité 24h/24 à Marseille",
                  "Devis gratuit immédiat",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[#444444] leading-snug"
                  >
                    <CheckCircle className="w-5 h-5 text-[#43926b] flex-shrink-0 mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right urgent call-to-action */}
          <div className="flex flex-col gap-8">
            <div className="relative bg-[#ffffff] border border-[#e8dfd6] rounded-2xl shadow-2xl p-8 overflow-hidden">
              <div className="absolute -top-6 -right-6 w-44 h-44 bg-gradient-to-br from-[#43926b] to-[#d46b1f] rounded-full opacity-20"></div>
              <div className="flex flex-col gap-6 relative">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#43926b] rounded-full text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#212121]">
                      Urgence plomberie Marseille
                    </h3>
                    <p className="text-sm text-[#666666]">
                      Fuite majeure, inondation, WC bouché — appelez tout de suite.
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <a
                    href="tel:+33756935200"
                    aria-label="Appeler en urgence +33 7 56 93 52 00"
                    className="w-full inline-flex justify-center items-center gap-2 bg-[#43926b] hover:bg-[#39624e] transition font-semibold text-white rounded-lg px-6 py-4 text-lg shadow-lg"
                  >
                    <Phone className="h-5 w-5" /> +33 7 56 93 52 00
                  </a>
                  <p className="mt-2 text-xs text-[#777777]">
                    Disponible 24h/24, 7j/7, jours fériés inclus.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2f2f2f] rounded-2xl p-8 text-white flex flex-col gap-6">
              <h3 className="text-2xl font-bold">Devis & interventions Marseille</h3>
              <p className="text-base leading-relaxed">
                Devis gratuit, évaluation sans surprise, intervention rapide avec matériel premium. On vous explique tout avant d&apos;agir.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  href="/contact"
                  className="flex-1 min-w-[140px] inline-flex justify-center items-center gap-2 bg-white text-[#2f2f2f] font-semibold px-6 py-3 rounded-md shadow hover:scale-[1.02] transition"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/services"
                  className="flex-1 min-w-[140px] inline-flex justify-center items-center gap-2 border border-white font-semibold px-6 py-3 rounded-md shadow hover:bg-white/10 transition"
                >
                  Voir nos services
                </Link>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <Link
                href="/faq"
                className="text-sm font-medium text-[#555555] hover:underline flex items-center gap-1"
              >
                <AlertCircle className="h-4 w-4" /> Questions fréquentes
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-[#555555] hover:underline"
              >
                À propos de nous
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 bg-white border border-[#e8dfd6] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 p-8 shadow">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#2f2f2f]">
              Besoin d&apos;un plombier en urgence à Marseille ?
            </h3>
            <p className="mt-1 text-[#555555]">
              Intervention express, devis clair, service 24/7 dans tous les quartiers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#43926b] text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-[#39624e] transition"
            >
              ☎ Demander un plombier
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center border border-[#43926b] text-[#2f2f2f] font-semibold px-8 py-3 rounded-md shadow hover:bg-[#f7f0eb] transition"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}