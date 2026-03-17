"use client";

import { motion } from "framer-motion";

export function ConceptSection() {
    return (
        <section className="relative w-full py-64 bg-transparent z-20 overflow-hidden px-6">

            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start relative z-10 w-full">
                {/* Visual - Fragmented Image - Positioned Asym */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-[60%] relative aspect-[16/10] md:aspect-[16/9] glass-dark overflow-hidden group border-y border-white/5 cursor-pointer"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-neutral-950/40 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-700">
                            <div className="w-full h-full bg-neutral-900/50 flex items-center justify-center">
                                {/* IMAGE PLACEHOLDER */}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Content - Editorial Layout - Shifted Down & Right */}
                <div className="w-full md:w-[40%] flex flex-col pt-12 md:pt-48 md:-ml-32 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col"
                    >
                        <h2 className="font-display font-medium text-[12vw] md:text-[8vw] uppercase tracking-[-0.06em] text-white leading-[0.75] mb-20 pointer-events-none">
                            Vision <br />
                            <span className="text-outline text-white opacity-20 italic">Derrière</span> <br />
                            Le Son.
                        </h2>

                        <div className="max-w-xs self-end md:self-start md:pl-24 group">
                            {/* VERTICAL ARCHITECTURAL LINE */}
                            <div className="w-[1px] h-20 bg-gradient-to-b from-white/10 to-transparent mb-12 hidden md:block" />
                            
                            <p className="font-logo font-light text-[14px] md:text-[15px] leading-[1.8] text-white/60 tracking-wide mb-14 transition-colors group-hover:text-white/90">
                                Nous ne jouons pas seulement de la musique. Nous sculptons des environnements. Chaque transition est une collision délibérée entre le chaos et la précision.
                            </p>

                            <div className="flex items-center gap-6 group cursor-pointer transition-all hover:gap-10">
                                <span className="font-logo font-light text-[9px] uppercase tracking-[0.8em] text-white/30 group-hover:text-white transition-colors">Explorer l&apos;Origine</span>
                                <div className="w-6 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* FINE HORIZONTAL LINE SEPARATOR */}
            <div className="absolute left-0 bottom-0 w-1/3 h-[1px] bg-white/5" />
        </section>
    );
}
