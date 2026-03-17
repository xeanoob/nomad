"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white pt-48 pb-32 px-6 md:px-24 selection:bg-white/10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="font-display font-medium text-6xl md:text-8xl uppercase tracking-tighter mb-24">Terms.</h1>
                
                <div className="flex flex-col gap-24">
                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">01 / Content</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Intellectual Property</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            All visual and sonic content on this platform is the intellectual property of NOMAD, unless stated otherwise. Any reproduction without consent is prohibited.
                        </p>
                    </section>

                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">02 / Usage</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Exploration</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            Use this site for exploration and booking purposes. Any malicious attempt to disrupt the platform will result in a permanent ban from our services.
                        </p>
                    </section>

                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">03 / Updates</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Evolution</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            NOMAD reserves the right to modify these terms at any time to reflect the evolution of our artistic journey.
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
