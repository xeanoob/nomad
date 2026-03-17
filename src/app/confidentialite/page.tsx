"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white pt-48 pb-32 px-6 md:px-24 selection:bg-white/10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="font-display font-medium text-6xl md:text-8xl uppercase tracking-tighter mb-24">Confidentialité.</h1>
                
                <div className="flex flex-col gap-24">
                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">01 / Collecte</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Données Minimales</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            NOMAD ne collecte pas vos données personnelles à des fins de suivi. Si vous nous contactez via le formulaire, vos informations sont utilisées exclusivement pour répondre à votre demande.
                        </p>
                    </section>

                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">02 / Témoins</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Cookies Essentiels</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            Nous utilisons des cookies essentiels pour assurer le bon fonctionnement du site. Aucun cookie de suivi tiers n&apos;est déployé sans votre consentement.
                        </p>
                    </section>

                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">03 / Communication</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Contact Droit</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            Pour toute question relative à la confidentialité, contactez contactpro.nomadcrue@gmail.com.
                        </p>
                    </section>
                </div>

                {/* Footer Meta */}
                <div className="mt-48 pt-12 border-t border-white/5 opacity-10">
                    <span className="font-logo text-[8px] uppercase tracking-[0.3em]">NOMAD LEGAL UNIT — 2026</span>
                </div>
            </motion.div>
        </div>
    );
}
