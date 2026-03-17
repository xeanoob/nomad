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
                <h1 className="font-display font-medium text-6xl md:text-8xl uppercase tracking-tighter mb-24">Privacy.</h1>
                
                <div className="flex flex-col gap-24">
                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">01 / Data</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Minimal Collection</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            NOMAD does not collect your personal data for tracking purposes. If you contact us via the form, your information is used solely to respond to your inquiry.
                        </p>
                    </section>

                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">02 / Cookies</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Essential Only</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            We use essential cookies to ensure the site functions correctly. No third-party tracking cookies are deployed without your consent.
                        </p>
                    </section>

                    <section className="flex flex-col gap-6">
                        <span className="font-logo text-[10px] uppercase tracking-[0.6em] text-white/20">03 / Rights</span>
                        <h2 className="font-display text-2xl uppercase tracking-tight">Contact</h2>
                        <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2.2] tracking-wider max-w-2xl">
                            For any privacy-related questions, reach out to contactpro.nomad@gmail.com.
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
