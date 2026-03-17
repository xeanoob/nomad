"use client";

import { motion } from "framer-motion";

const INFLUENCES = ["Frankie Knuckles", "Larry Heard", "Kerri Chandler", "Masters At Work", "Daft Punk", "Motor City Drum Ensemble"];

export default function AboutPage() {
    return (
        <main className="relative w-full bg-black text-white selection:bg-white/10">
            
            {/* HERO */}
            <section className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 sm:px-12 md:px-24 z-10 bg-black">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6"
                    >
                        <h1 className="font-display font-black text-[18vw] sm:text-7xl md:text-[12vw] lg:text-[10vw] uppercase leading-[0.75] tracking-tighter">
                            L&apos;Esprit<br />Nomad.
                        </h1>
                        <div className="w-12 h-[0.5px] bg-white/20" />
                    </motion.div>
                </div>
            </section>

            {/* SLIDING CONTENT LAYER */}
            <div className="relative z-20 bg-black border-t border-white/5 pt-32 pb-48 px-6 sm:px-12 md:px-24">
                <div className="max-w-7xl mx-auto w-full flex flex-col gap-32 md:gap-48">
                    
                    {/* Genesis & Vision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <section className="flex flex-col gap-10">
                            <span className="font-logo text-white/20 text-[10px] uppercase tracking-[0.6em]">01 / Genèse</span>
                            <h2 className="font-display font-medium text-3xl md:text-5xl text-white/90 leading-[1.1] tracking-tight uppercase">
                                Une synergie née de la passion pure pour la House Music.
                            </h2>
                            <p className="font-logo font-extralight text-[11px] md:text-[13px] text-white/40 leading-[2] tracking-wider max-w-xl">
                                Né à Orléans, NOMAD est un projet organique, une envie simple de partager des vibrations brutes. Nous organisons des parenthèses sonores où seule l&apos;énergie du dancefloor compte.
                            </p>
                        </section>

                        <section className="flex flex-col gap-10 md:mt-32">
                            <span className="font-logo text-white/20 text-[10px] uppercase tracking-[0.6em]">02 / Philosophie</span>
                            <h2 className="font-display font-medium text-5xl md:text-8xl uppercase tracking-tighter leading-[0.8] text-white">
                                La fête est <br /><span className="italic opacity-20">Un Sentiment.</span>
                            </h2>
                            <p className="font-logo font-extralight text-[11px] md:text-[14px] text-white/30 max-w-xl leading-[2.2] tracking-wider italic border-l border-white/5 pl-8">
                                &quot;Ramener de la chaleur et de l&apos;humain dans la nuit. Loin des line-ups froids, nous créons des espaces de déconnexion totale.&quot;
                            </p>
                        </section>
                    </div>

                    {/* Influences Grid */}
                    <div className="flex flex-col gap-20">
                        <div className="flex justify-between items-end border-b border-white/5 pb-8">
                            <h3 className="font-display font-medium text-4xl md:text-6xl uppercase tracking-tighter">Inspirations.</h3>
                            <span className="font-logo text-[9px] opacity-20 hidden sm:block tracking-[0.5em] uppercase">Chicago / New-York / Detroit</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                            {INFLUENCES.map((inf, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex flex-col gap-4"
                                >
                                    <div className="border-b border-white/5 pb-4 flex justify-between items-baseline group-hover:border-white transition-colors duration-500">
                                        <span className="font-display font-medium text-2xl uppercase tracking-tight">{inf}</span>
                                        <span className="font-logo text-[8px] opacity-10">00{i+1}</span>
                                    </div>
                                    <p className="font-logo text-[9px] uppercase tracking-[0.3em] text-white/10 group-hover:text-white/40 transition-colors">Digital Archive Influence</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Meta */}
                    <div className="pt-32 flex flex-col md:flex-row justify-between border-t border-white/5 gap-8 opacity-10">
                        <div className="flex flex-col gap-2 font-logo text-[8px] uppercase tracking-[0.3em]">
                            <span>NOMAD COLLECTIVE — ARCHIVE 2026</span>
                        </div>
                        <div className="flex flex-col gap-2 font-logo text-[8px] uppercase tracking-[0.3em] text-right">
                            <span>ORLEANS / FRANCE</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
