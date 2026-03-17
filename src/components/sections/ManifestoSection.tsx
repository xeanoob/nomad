"use client";

import { motion } from "framer-motion";

export function ManifestoSection() {
    return (
        <section className="relative w-full py-80 bg-transparent z-30 overflow-hidden flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative perspective-container flex flex-col items-center text-center px-6"
            >

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
                    className="flex flex-col items-center gap-24 text-center max-w-4xl"
                >
                    <div className="w-[0.5px] h-32 bg-white/10" />
                    
                    <h2 className="font-display font-medium text-4xl md:text-7xl uppercase leading-none tracking-[-0.05em] text-white">
                        L&apos;Émotion est notre <br />
                        <span className="italic opacity-20">Seul Manifeste.</span>
                    </h2>

                    <div className="flex flex-col items-center gap-12">
                        <p className="font-logo font-light text-[11px] md:text-[14px] uppercase tracking-[0.8em] text-white/60 max-w-2xl leading-[2.2]">
                            Dans un monde saturé de bruit, nous cherchons le silence entre les notes. La pureté dans le chaos.
                        </p>
                        <div className="w-12 h-[0.5px] bg-white/10" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
