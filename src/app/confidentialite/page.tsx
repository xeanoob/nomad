"use client";

import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";

export default function PrivacyPage() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white pt-32 pb-32 px-6 md:px-24">
            <NoiseOverlay />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-16">Confidentialité.</h1>
                <div className="flex flex-col gap-12 font-sans font-light text-lg text-white/70 leading-relaxed">
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">01. Collecte des données</h2>
                        <p>NOMAD ne collecte pas vos données personnelles à des fins de suivi. Si vous nous contactez via le formulaire, vos informations sont utilisées exclusivement pour répondre à votre demande.</p>
                    </section>
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">02. Cookies</h2>
                        <p>Nous utilisons des cookies essentiels pour assurer le bon fonctionnement du site. Aucun cookie de suivi tiers n&apos;est déployé sans votre consentement.</p>
                    </section>
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">03. Contact</h2>
                        <p>Pour toute question relative à la confidentialité, contactez contactpro.nomadcrue@gmail.com.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
