"use client";

import { motion } from "framer-motion";

export function ConceptSection() {
    return (
        <section className="relative w-full py-40 bg-black z-20 overflow-hidden px-6">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 w-full">
                {/* Visual - Fragmented Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-7 relative aspect-[4/5] glass-dark overflow-hidden group border border-white/10 cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-nomad-pink/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
                    <motion.div 
                        whileHover={{ scale: 1.02, skewY: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full scale-110 group-hover:scale-105 transition-transform duration-1000">
                            <div className="w-full h-full bg-neutral-910 flex items-center justify-center">
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

                {/* Content - Editorial Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-5 flex flex-col justify-center gap-16 md:pl-12"
                >
                    <div className="relative">
                        <h2 className="font-display font-black text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] uppercase tracking-tighter text-white leading-[0.8] whitespace-nowrap">
                            La Vision <br />
                            <span className="text-mask bg-gradient-to-r from-nomad-pink to-nomad-sunset blend-excl">Derrière</span> <br />
                            Le Son.
                        </h2>
                        <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/10" />
                    </div>

                    <div className="flex flex-col gap-10 max-w-sm">
                        <p className="font-sans font-light text-2xl leading-[1.4] text-white/50 first-letter:text-6xl first-letter:font-display first-letter:mr-3 first-letter:float-left first-letter:text-white">
                            Nous ne jouons pas seulement de la musique. Nous sculptons des environnements. Chaque transition est une collision délibérée entre le chaos et la précision.
                        </p>

                        <div className="flex items-center gap-6 group cursor-pointer transition-transform hover:translate-x-4">
                            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-nomad-pink transition-colors">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-2 h-2 bg-nomad-pink rounded-full"
                                />
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/30 group-hover:text-white transition-colors">Explorer l&apos;Origine</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
