"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="relative w-full bg-black py-40 md:py-64 px-6 md:px-24 flex items-center justify-center overflow-hidden z-20">
            <div className="max-w-7xl w-full flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32 relative z-10">
                {/* Visual - Premium Glass Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full md:w-1/2 aspect-[4/5] glass-dark flex items-center justify-center overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                    {/* Abstract Noise Decoration */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />



                    <div className="absolute inset-6 border border-white/5 pointer-events-none group-hover:inset-4 transition-all duration-700" />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 flex flex-col gap-12"
                >
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-[1px] bg-nomad-pink" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-nomad-pink/80">L&apos;ADN</span>
                        </div>
                        <h2 className="font-display font-black text-6xl md:text-8xl uppercase leading-[0.85] tracking-tighter text-white">
                            Deux Âmes. <br />
                            <span className="text-edge">Un Seul</span> Rythme.
                        </h2>
                    </div>

                    <div className="flex flex-col gap-8 max-w-xl">
                        <p className="font-sans font-light text-xl leading-[1.6] text-white/60">
                            NOMAD est l&apos;aboutissement d&apos;une obsession partagée : capturer l&apos;essence brute de la nuit. Nous avons uni nos parcours pour créer une entité qui dépasse la simple somme de ses parties.
                        </p>
                        <p className="font-sans font-light text-xl leading-[1.6] text-white/40">
                            Notre quête nous a menés à explorer les recoins les plus profonds de la House, là où le rythme devient une méditation physique. À Orléans, nous apportons une vision sans compromis, transformant chaque lieu en une enclave de son et d&apos;émotion pure.
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
