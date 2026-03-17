"use client";

import { motion } from "framer-motion";

export default function CGUPage() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white pt-48 pb-32 px-6 md:px-24 selection:bg-white/10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="font-display font-medium text-6xl md:text-8xl uppercase tracking-tighter mb-24">Conditions.</h1>
                
                <div className="flex flex-col gap-24">
                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">01 / Propriété</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Droit d&apos;Auteur</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            Tout le contenu visuel et sonore sur cette plateforme est la propriété intellectuelle de NOMAD, sauf indication contraire. Toute reproduction sans consentement est interdite.
                        </p>
                    </section>

                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">02 / Usage</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Exploration</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            Utilisez ce site à des fins d&apos;exploration et de réservation. Toute tentative malveillante de perturber la plateforme entraînera un bannissement définitif de nos services.
                        </p>
                    </section>

                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">03 / Évolution</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Mises à Jour</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            NOMAD se réserve le droit de modifier ces conditions à tout moment pour refléter l&apos;évolution de notre parcours artistique.
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
