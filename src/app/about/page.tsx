"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { StickyWrapper } from "@/components/layout/StickyWrapper";

const INFLUENCES = ["Frankie Knuckles", "Larry Heard", "Kerri Chandler", "Masters At Work", "Daft Punk", "Motor City Drum Ensemble"];

export default function AboutPage() {
    return (
        <main className="relative w-full bg-black text-white selection:bg-nomad-pink/30">
            <NoiseOverlay />

            {/* Global Ambient Glow */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none select-none z-0">
                <div className="absolute top-[20%] left-[-10%] w-[100vw] h-[100vw] bg-nomad-pink/[0.03] blur-[150px] rounded-full animate-ambient-pulse" />
            </div>

            {/* STICKY HERO */}
            <StickyWrapper height="120vh" className="z-10 bg-black">
                {(progress: MotionValue<number>) => {
                    const opacity = useTransform(progress, [0, 0.8, 1], [1, 1, 0]);
                    const scale = useTransform(progress, [0, 1], [1, 0.92]);

                    return (
                        <motion.div style={{ opacity, scale }} className="relative w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-24">
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
                                    <div className="w-12 h-[2px] bg-nomad-pink" />
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                }}
            </StickyWrapper>

            {/* SLIDING CONTENT LAYER */}
            <div className="relative z-20 bg-black border-t border-white/10 pt-32 pb-48 px-6 sm:px-12 md:px-24 shadow-[0_-30px_60px_rgba(0,0,0,0.9)]">
                <div className="max-w-7xl mx-auto w-full flex flex-col gap-32 md:gap-48">
                    
                    {/* Genesis & Vision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <section className="flex flex-col gap-10">
                            <span className="font-mono text-nomad-pink text-[10px] uppercase tracking-[0.6em]">01 / Genèse</span>
                            <h2 className="font-sans font-extralight text-3xl md:text-5xl text-white/90 leading-[1.1] tracking-tight">
                                Une synergie née de la passion pure pour la House Music.
                            </h2>
                            <p className="font-sans font-light text-lg md:text-xl text-white/50 leading-relaxed max-w-xl">
                                Né à Orléans, NOMAD est un projet organique, une envie simple de partager des vibrations brutes. Nous organisons des parenthèses sonores où seule l&apos;énergie du dancefloor compte.
                            </p>
                        </section>

                        <section className="flex flex-col gap-10 md:mt-32">
                            <span className="font-mono text-nomad-pink text-[10px] uppercase tracking-[0.6em]">02 / Philosophie</span>
                            <h2 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter leading-[0.8] text-white">
                                La fête est <br /><span className="text-nomad-pink">un sentiment.</span>
                            </h2>
                            <p className="font-sans font-light text-xl md:text-2xl text-white/40 max-w-xl leading-relaxed italic">
                                &quot;Ramener de la chaleur et de l&apos;humain dans la nuit. Loin des line-ups froids, nous créons des espaces de déconnexion totale.&quot;
                            </p>
                        </section>
                    </div>

                    {/* Influences Grid */}
                    <div className="flex flex-col gap-20">
                        <div className="flex justify-between items-end border-b border-white/10 pb-8">
                            <h3 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter">Inspirations.</h3>
                            <span className="font-mono text-[10px] opacity-20 hidden sm:block tracking-[0.5em] uppercase">Chicago / New-York / Detroit</span>
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
                                    <div className="border-b border-white/5 pb-4 flex justify-between items-baseline group-hover:border-nomad-pink transition-colors duration-500">
                                        <span className="font-display font-medium text-3xl uppercase tracking-tight">{inf}</span>
                                        <span className="font-mono text-[8px] opacity-20">00{i+1}</span>
                                    </div>
                                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 group-hover:text-nomad-pink transition-colors">Digital Archive Influence</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Meta */}
                    <div className="pt-32 flex flex-col md:flex-row justify-between border-t border-white/5 gap-8 opacity-20">
                        <div className="flex flex-col gap-2 font-mono text-[8px] uppercase tracking-[0.3em]">
                            <span>NOMAD COLLECTIVE — ARCHIVE 2026</span>
                        </div>
                        <div className="flex flex-col gap-2 font-mono text-[8px] uppercase tracking-[0.3em] text-right">
                            <span>ORLEANS / FRANCE</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
