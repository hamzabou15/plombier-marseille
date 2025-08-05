"use client";
import React, { useState } from "react";
import { Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";

type StatusType = {
  type: "success" | "error" | "loading" | null;
  message: string;
};

const ContactSection = () => {
  const [status, setStatus] = useState<StatusType | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Envoi en cours..." });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meozrlnej", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Votre demande a bien été envoyée. Nous vous contactons sous 10 minutes.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message:
            "Une erreur est survenue. Veuillez réessayer ou nous appeler au +33 7 56 93 52 00",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Une erreur réseau est survenue. Veuillez nous appeler directement au +33 7 56 93 52 00",
      });
    }
  };

  const statusIcon = () => {
    if (!status) return null;
    if (status.type === "loading") return <Loader2 className="animate-spin mr-2 h-5 w-5" />;
    if (status.type === "success")
      return <CheckCircle className="text-green-600 mr-2 h-5 w-5" />;
    if (status.type === "error")
      return <AlertCircle className="text-red-600 mr-2 h-5 w-5" />;
    return null;
  };

  return (
    <section className="bg-gradient-to-b from-[#fcf7f0] to-[#f5e6cc] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Info Panel */}
        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="inline-block bg-[#E67E22] text-white px-3 py-1 rounded-full text-xs font-semibold">
                URGENCE 24/7
              </span>
            </div>
            <h2 className="text-4xl font-extrabold leading-tight text-[#2f2f2f] mb-4">
              Plombier disponible <br className="hidden sm:block" />
              <span className="text-[#E67E22]">24h/24 — +33 7 56 93 52 00</span>
            </h2>
            <p className="text-base text-[#4a4a4a] mb-6">
              Fuite d&apos;eau, WC bouché, panne de chauffe-eau ? Intervention en{" "}
              <strong>moins de 30 minutes</strong> sur Aix-en-Provence et ses environs, sans surprise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-6 shadow border border-[#e8dfd6]">
                <h3 className="text-lg font-semibold text-[#2f2f2f] mb-1">
                  Horaires
                </h3>
                <p className="text-sm text-[#555555]">
                  <strong>Tous les jours</strong> — 24h/24 (week-ends & jours fériés inclus)
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow border border-[#e8dfd6]">
                <h3 className="text-lg font-semibold text-[#2f2f2f] mb-1">
                  Zones d&apos;intervention
                </h3>
                <p className="text-sm text-[#555555]">
                  Centre-ville, Mourillon, Pont-du-Las, La Rode et toute l&apos;agglomération
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+33756935200"
                aria-label="Appeler en urgence"
                className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-[#cf6a1d] transition text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex-1 justify-center"
              >
                <Phone className="h-5 w-5" /> Appel direct 24h/24
              </a>
              <div className="hidden sm:block flex-1"></div>
            </div>
          </div>

          <div className="mt-4 text-sm flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-[#E67E22]" />
              </div>
              <div>
                <p className="text-[#444444]">
                  Plombiers certifiés & assurés — Devis gratuit avant intervention.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-[#E67E22]" />
              </div>
              <div>
                <p className="text-[#444444]">
                  Transparence tarifaire — Pas de frais cachés.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-10 border border-[#e8dfd6]">
          <div className="absolute -top-6 -right-6 w-36 h-36 bg-gradient-to-br from-[#E67E22] to-[#d46b1f] rounded-full opacity-15"></div>
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <input
              type="hidden"
              name="_subject"
              value="Urgence Plombier Aix-En-Provence - Nouvelle demande"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-[#2f2f2f]">
                  Nom complet *
                </label>
                <input
                  name="Nom"
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                  type="text"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-[#2f2f2f]">
                  Téléphone *
                </label>
                <input
                  name="Téléphone"
                  required
                  placeholder="06 12 34 56 78"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                  type="tel"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-[#2f2f2f]">
                  Email
                </label>
                <input
                  name="Email"
                  placeholder="vous@exemple.com"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                  type="email"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-[#2f2f2f]">
                  Adresse & Quartier *
                </label>
                <input
                  name="Adresse"
                  required
                  placeholder="Ex: 12 Rue du Centre, Quartier Mourillon"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#2f2f2f]">
                Type d&apos;urgence *
              </label>
              <select
                name="Besoin"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionnez une urgence
                </option>
                <option value="Fuite d'eau">Fuite d&apos;eau</option>
                <option value="Canalisation bouchée">
                  Canalisation bouchée
                </option>
                <option value="Panne chauffe-eau">Panne chauffe-eau</option>
                <option value="Robinetterie défectueuse">
                  Robinetterie défectueuse
                </option>
                <option value="Problème chauffage">
                  Problème chauffage
                </option>
                <option value="Autre urgence">Autre urgence</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#2f2f2f]">
                Description de l&apos;urgence *
              </label>
              <textarea
                name="Message"
                required
                rows={3}
                placeholder="Expliquez rapidement le problème et votre localisation précise"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status?.type === "loading"}
              className="w-full flex justify-center items-center gap-2 bg-[#E67E22] hover:bg-[#cf6a1d] transition text-white font-semibold px-6 py-3 rounded-lg shadow"
            >
              {status?.type === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Envoi...
                </>
              ) : (
                "Envoyer ma demande d'urgence"
              )}
            </button>

            {status && (
              <div
                className={`mt-2 flex items-start gap-2 text-sm ${
                  status.type === "success"
                    ? "text-green-600"
                    : status.type === "error"
                    ? "text-red-600"
                    : "text-gray-700"
                }`}
                aria-live="polite"
              >
                {statusIcon()}
                <span dangerouslySetInnerHTML={{ __html: status.message }} />
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;