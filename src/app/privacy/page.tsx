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
                <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-16">Privacy.</h1>
                <div className="flex flex-col gap-12 font-sans font-light text-lg text-white/70 leading-relaxed">
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">01. Data Collection</h2>
                        <p>NOMAD does not collect your personal data for tracking purposes. If you contact us via the form, your information is used solely to respond to your inquiry.</p>
                    </section>
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">02. Cookies</h2>
                        <p>We use essential cookies to ensure the site functions correctly. No third-party tracking cookies are deployed without your consent.</p>
                    </section>
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">03. Contact</h2>
                        <p>For any privacy-related questions, reach out to contactpro.nomad@gmail.com.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
