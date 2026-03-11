"use client";

import { motion } from "framer-motion";

export function ManifestoSection() {
    return (
        <section className="relative w-full py-64 bg-black z-30 overflow-hidden flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative perspective-container flex flex-col items-center text-center px-6"
            >
                <span className="font-mono text-[10px] uppercase tracking-[1em] text-white/20 mb-12">
                    Processus_Manifeste
                </span>

                <h2 className="font-display font-black text-6xl md:text-[12vw] uppercase leading-[0.75] tracking-[-0.08em] text-white blend-excl">
                    Lâcher <br />
                    <span className="text-mask bg-gradient-to-br from-nomad-pink via-white to-nomad-sunset">Prise</span>
                </h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-24 max-w-2xl font-sans font-extralight text-2xl md:text-3xl text-white/40 leading-tight"
                >
                    &quot;La nuit n&apos;est pas une absence de lumière, mais une autre forme de clarté. Nous sommes les guides de cette transition.&quot;
                </motion.div>
            </motion.div>
        </section>
    );
}
