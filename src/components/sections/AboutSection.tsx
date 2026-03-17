"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="relative w-full bg-transparent py-80 px-6 md:px-24 flex items-center justify-center overflow-hidden z-20">
            <div className="max-w-screen-2xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-0 relative z-10">
                {/* Content - Left Aligned & Gigantic */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 flex flex-col z-20"
                >
                    <div className="flex flex-col gap-16 md:pl-20">
                        <div className="flex items-center gap-10">
                            <div className="w-16 h-[0.5px] bg-white/20" />
                            <span className="font-logo font-light text-[10px] uppercase tracking-[1em] text-white/40">ÉDITION 01</span>
                        </div>
                        <h2 className="font-display font-medium text-6xl md:text-[8vw] uppercase leading-[0.8] tracking-[-0.06em] text-white pointer-events-none">
                            Deux Âmes. <br />
                            <span className="text-outline-thin text-white/20 italic">Un Seul</span> <br />
                            Rythme.
                        </h2>

                        <div className="flex flex-col gap-14 max-w-sm mt-12 md:mt-24 md:pl-20 group">
                            <p className="font-logo font-light text-[14px] md:text-[15px] leading-[1.8] text-white/60 tracking-wide transition-all group-hover:text-white/90 duration-700">
                                NOMAD est l&apos;aboutissement d&apos;une obsession partagée : capturer l&apos;essence brute de la nuit. Nous avons uni nos parcours pour créer une entité qui dépasse la seule somme de ses parties.
                            </p>
                            <p className="font-logo font-light text-[12px] md:text-[13px] leading-[1.8] text-white/30 tracking-wider italic border-l border-white/5 pl-8">
                                Notre quête nous a menés à explorer les recoins les plus profonds de la House... transformant chaque lieu en une enclave d&apos;émotion pure.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Visual - Premium Glass Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full md:w-[60%] md:-mr-[10%] aspect-[16/11] flex items-center justify-center overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.8)] border-y border-white/5 cursor-pointer mt-12 md:mt-0"
                >
                    <div className="absolute inset-0 bg-neutral-900 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div className="w-full h-full bg-[#080808] group-hover:brightness-110 transition-all duration-700" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
