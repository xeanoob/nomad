"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="relative w-full bg-transparent py-48 px-6 md:px-24 flex items-center justify-center overflow-hidden z-10">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16 md:gap-32">
                {/* Visual Placeholder - Matching Step 185 screenshot */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative w-full md:w-1/2 aspect-square bg-gradient-to-br from-red-900/20 to-black border border-white/5 flex items-center justify-center group shadow-2xl"
                >
                    <div className="absolute inset-0 bg-red-600 opacity-5 blur-3xl transition-opacity duration-1000" />
                    <span className="font-mono text-[8px] uppercase tracking-[0.5em] opacity-20">NMD_DUO_IMG</span>

                    {/* Inner subtle border */}
                    <div className="absolute inset-4 border border-white/5 pointer-events-none" />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 flex flex-col gap-10 text-left"
                >
                    <h2 className="font-display font-black text-6xl md:text-8xl uppercase leading-[0.85] tracking-tighter text-white">
                        Deux Esprits. <br />
                        <span className="text-nomad-sunset">Une Seule Fréquence.</span>
                    </h2>

                    <div className="flex flex-col gap-6 max-w-xl">
                        <p className="font-sans font-light text-xl leading-relaxed text-white/50">
                            NOMAD est l&apos;aboutissement d&apos;une obsession partagée : capturer l&apos;essence brute de la nuit. Nous avons uni nos parcours pour créer une entité qui dépasse la simple somme de ses parties.
                        </p>
                        <p className="font-sans font-light text-xl leading-relaxed text-white/50">
                            Notre quête nous a menés à explorer les recoins les plus profonds de la House, là où le rythme devient une méditation physique. À Orléans, nous apportons une vision sans compromis, transformant chaque lieu en une enclave de son et d&apos;émotion pure.
                        </p>
                        <p className="font-sans font-light text-xl leading-relaxed text-white/50">
                            Une complicité instinctive derrière les platines nous permet de construire des récits sonores évolutifs, communiquant une énergie authentique face à une &quot;Crue&quot; en perpétuelle expansion.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <div className="w-12 h-[1px] bg-nomad-pink" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">ORLÉANS / GLOBAL</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
