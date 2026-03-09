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
                <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-16">Terms.</h1>
                <div className="flex flex-col gap-12 font-sans font-light text-lg text-white/70 leading-relaxed">
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">01. Content</h2>
                        <p>All visual and sonic content on this platform is the intellectual property of NOMAD, unless stated otherwise. Any reproduction without consent is prohibited.</p>
                    </section>
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">02. Usage</h2>
                        <p>Use this site for exploration and booking purposes. Any malicious attempt to disrupt the platform will result in a permanent ban from our services.</p>
                    </section>
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-nomad-pink mb-4">03. Updates</h2>
                        <p>NOMAD reserves the right to modify these terms at any time to reflect the evolution of our artistic journey.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
