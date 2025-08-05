import React from "react";

const Introduction = () => {
  return (
    <section className="bg-[#f7f9fa] py-20 px-6 sm:px-8 max-w-7xl mx-auto rounded-xl shadow-sm">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#E67E22] mb-12 text-center">
        Notre Engagement à Aix-En-Provence et dans le Var
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fournir un service de plomberie d&apos;urgence rapide, fiable et à prix transparent aux habitants de Aix-En-Provence et ses environs.
            Notre priorité : votre satisfaction et la préservation de votre patrimoine, avec une intervention en moins de 30 minutes dans les quartiers centraux.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Valeurs</h3>
          <ul className="space-y-3 text-gray-700">
            {[
              "Rapidité : Intervention en moins de 30 minutes à Aix-en-Provence",
              "SOSise : Plombiers certifiés avec 10+ ans d'expérience dans le Var",
              "Transparence : Devis détaillé avant toute intervention",
              "Écologie : Solutions économes en eau et énergie",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#E67E22] font-bold mr-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-[#E67E22] mb-4">Zones d&apos;Intervention : Aix-En-Provence et le Var</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Nous intervenons dans tout <strong>Aix-en-Provence</strong> et le <strong>département du Var (83)</strong> : La Valette-du-Var, La Garde, Le Revest-les-Eaux, Ollioules, La Seyne-sur-Mer, Six-Fours-les-Plages, Sanary-sur-Mer, Bandol, et toutes les communes environnantes.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Aix-En-Provence Centre",
            "Le Mourillon",
            "Pont-du-Las",
            "Saint-Jean du Var",
            "Le Pont Neuf",
            "La Rode",
            "La Valette-du-Var",
            "La Garde",
            "Le Revest-les-Eaux",
            "Ollioules",
            "La Seyne-sur-Mer",
            "Six-Fours-les-Plages"
          ].map((zone, idx) => (
            <span
              key={idx}
              className="bg-white border border-[#E67E22] text-[#E67E22] px-4 py-1 rounded-full text-sm font-medium select-none"
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