'use client';

import React from 'react';
import Head from 'next/head';
import { Button } from '../ui/button';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('xvgqbkzy'); // Remplace par ton ID Formspree

    return (
        <>
            <Head>
                <title>Contact Plombier à Aix-En-Provence – Demandez un devis gratuit</title>
                <meta
                    name="description"
                    content="Besoin d’un plombier à Aix-En-Provence ? Contactez-nous dès maintenant pour une intervention rapide, un diagnostic ou une mise aux normes. Réponse garantie en moins de 24h."
                />
            </Head>

            <section
                id="contact-plombier-aixenprovence"
                aria-label="Formulaire de contact pour dépannage plomberie à Aix-En-Provence"
                className="w-full bg-white py-20 px-8 md:px-8"
            >
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-[14px] font-semibold text-[#475565] uppercase tracking-[7px]">
                        Contact rapide
                    </p>
                    <h2 className="text-[40px] font-bold tracking-[-1.5px] text-[#212121] max-lg:text-4xl max-md:text-3xl">
                        Demandez votre devis gratuit
                    </h2>
                    <p className="text-[16px] text-[#2E2937BF] mt-4 font-light">
                        Vous avez une panne, un projet ou besoin d’un conseil ? Remplissez ce formulaire et notre équipe vous répond sous 24h.
                    </p>
                </div>

                {state.succeeded ? (
                    <p className="text-center text-green-600 font-semibold text-lg">
                        Merci pour votre demande. Nous vous contacterons sous peu.
                    </p>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-3xl mx-auto flex flex-col gap-6 text-[#212121]"
                    >
                        <input
                            type="hidden"
                            name="_subject"
                            value="Nouvelle demande – Formulaire plombier Aix-En-Provence"
                        />
                        <div className="flex flex-col md:flex-row gap-6">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Votre nom complet"
                                className="w-full border border-gray-300 px-5 py-4 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#475565]"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Votre adresse email"
                                className="w-full border border-gray-300 px-5 py-4 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#475565]"
                            />
                        </div>
                        <ValidationError field="email" prefix="Email" errors={state.errors} />

                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Votre numéro de téléphone"
                            className="w-full border border-gray-300 px-5 py-4 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#475565]"
                        />

                        <textarea
                            name="message"
                            required
                            rows={6}
                            placeholder="Décrivez votre besoin (panne, devis, mise en conformité...)"
                            className="w-full border border-gray-300 px-5 py-4 text-sm rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#475565]"
                        ></textarea>
                        <ValidationError field="message" prefix="Message" errors={state.errors} />

                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="mt-4 w-fit px-6 py-2 bg-[#E67E22] text-white font-semibold  hover:bg-[#005f87] transition col-span-2"
                            >
                                Envoyer ma demande
                            </button>
                        </div>
                    </form>
                )}
            </section>
        </>
    );
};

export default ContactForm;
