"use client";

import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";

export default function TermsPage() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white pt-32 pb-32 px-6 md:px-24">
            <NoiseOverlay />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-16">Conditions Générales.</h1>
                <div className="flex flex-col gap-12 font-sans font-light text-lg text-white/70 leading-relaxed">
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">01. Contenu</h2>
                        <p>Tout le contenu visuel et sonore sur cette plateforme est la propriété intellectuelle de NOMAD, sauf indication contraire. Toute reproduction sans consentement est interdite.</p>
                    </section>
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">02. Utilisation</h2>
                        <p>Utilisez ce site à des fins d&apos;exploration et de réservation. Toute tentative malveillante de perturber la plateforme entraînera un bannissement définitif de nos services.</p>
                    </section>
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">03. Mises à jour</h2>
                        <p>NOMAD se réserve le droit de modifier ces conditions à tout moment pour refléter l&apos;évolution de notre parcours artistique.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
