import React from "react";

const Introduction = () => {
  return (
    <section className="bg-[#f7f9fa] py-20 px-6 sm:px-8 max-w-7xl mx-auto rounded-xl shadow-sm">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#43926b] mb-12 text-center">
        Notre Engagement à Marseille et ses Arrondissements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fournir un service de plomberie d&apos;urgence rapide, fiable et à prix transparent aux habitants de Marseille et ses arrondissements.
            Notre priorité : votre satisfaction et la préservation de votre patrimoine, avec une intervention en moins de 30 minutes dans les quartiers centraux (13001, 13006, 13007).
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Valeurs</h3>
          <ul className="space-y-3 text-gray-700">
            {[
              "Rapidité : Intervention en moins de 30 minutes à Marseille",
              "Expertise : Plombiers certifiés avec 10+ ans d'expérience dans le Var",
              "Transparence : Devis détaillé avant toute intervention à Marseille",
              "Écologie : Solutions économes en eau et énergie pour Marseille",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#43926b] font-bold mr-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-[#43926b] mb-4">Zones d&apos;Intervention : Marseille et le Var</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Nous intervenons dans <strong>tous les arrondissements de Marseille (13001 à 13016)</strong> et le <strong>département du Var (83)</strong> : La Valette-du-Var, La Garde, Le Revest-les-Eaux, Ollioules, La Seyne-sur-Mer, Six-Fours-les-Plages, Sanary-sur-Mer, Bandol, et toutes les communes environnantes.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Marseille Centre (13001)",
            "Le Mourillon (13007)",
            "Pont-du-Las (13006)",
            "Saint-Jean du Var",
            "Le Pont Neuf",
            "La Rode",
            "La Valette-du-Var (83100)",
            "La Garde (83130)",
            "Le Revest-les-Eaux (83200)",
            "Ollioules (83190)",
            "La Seyne-sur-Mer (83500)",
            "Six-Fours-les-Plages (83140)"
          ].map((zone, idx) => (
            <span
              key={idx}
              className="bg-white border border-[#43926b] text-[#43926b] px-4 py-1 rounded-full text-sm font-medium select-none"
            >
              {zone}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;