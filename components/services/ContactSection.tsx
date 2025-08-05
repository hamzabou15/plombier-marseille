"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meozrlnej", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Votre demande a bien été envoyée. Nous vous contactons sous 10 minutes.");
        form.reset();
      } else {
        setStatus("Une erreur est survenue. Veuillez réessayer ou nous appeler au 07 56 93 52 00.");
      }
    } catch (error) {
      setStatus("Erreur réseau. Veuillez nous appeler directement au 07 56 93 52 00.");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#fcf7f0] to-[#f5e6cc]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#2f2f2f] mb-16">
          Besoin d&apos;un plombier à Aix-en-Provence ?
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-[#E67E22] mb-8">
            Contactez-nous pour une intervention rapide
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="hidden"
              name="_subject"
              value="Demande de service plomberie - Aix-en-Provence"
            />

            <div>
              <label className="block mb-2 font-medium text-[#555555]">Prénom *</label>
              <input
                type="text"
                name="Prénom"
                placeholder="Votre prénom"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#555555]">Nom *</label>
              <input
                type="text"
                name="Nom"
                placeholder="Votre nom"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-[#555555]">Email *</label>
              <input
                type="email"
                name="Email"
                placeholder="votre@email.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-[#555555]">Téléphone *</label>
              <input
                type="tel"
                name="Téléphone"
                placeholder="06 12 34 56 78"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-[#555555]">Adresse & Quartier *</label>
              <input
                name="Adresse"
                placeholder="Ex: 12 Rue du Centre, Quartier Mourillon"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-[#555555]">Service demandé *</label>
              <select
                name="Besoin"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              >
                <option value="">Sélectionnez un service</option>
                <option value="Dépannage urgence">Dépannage urgence 24h/24</option>
                <option value="Débouchage canalisation">Débouchage canalisation</option>
                <option value="Réparation fuite d'eau">Réparation fuite d&apos;eau</option>
                <option value="Installation chauffe-eau">Installation chauffe-eau</option>
                <option value="Rénovation salle de bains">Rénovation salle de bains</option>
                <option value="Entretien chaudière">Entretien chaudière</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-[#555555]">Détails de l&apos;intervention *</label>
              <textarea
                name="Message"
                rows={4}
                placeholder="Décrivez votre problème et votre localisation précise"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#E67E22] hover:bg-[#d68400] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Demander une intervention
              </button>
            </div>

            {status && (
              <div className="md:col-span-2 text-center mt-4">
                <p className={`font-medium ${status.includes("Erreur") ? "text-red-600" : "text-green-600"}`}>
                  {status}
                </p>
              </div>
            )}
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[#555555]">
            Ou contactez-nous directement par téléphone :
            <a href="tel:+33756935200" className="font-semibold text-[#E67E22] ml-2">
              ☎ 07 56 93 52 00
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">Disponible 24h/24, 7j/7</p>
        </div>
      </div>
    </section>
  );
}