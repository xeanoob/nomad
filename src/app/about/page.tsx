"use client";

import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";

const INFLUENCES = ["Frankie Knuckles", "Larry Heard", "Kerri Chandler", "Masters At Work", "Daft Punk", "Motor City Drum Ensemble"];

export default function AboutPage() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white pt-40 pb-32 px-6 md:px-24 overflow-x-hidden">
            <NoiseOverlay />

            {/* Global Glow */}
            <div className="fixed top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-nomad-pink opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

            <section className="relative w-full max-w-7xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 md:mb-40">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-display font-black text-7xl md:text-[14vw] lg:text-[12vw] uppercase leading-[0.75] tracking-tighter">L&apos;Esprit<br />Nomad.</h1>
                        </div>
                        <div className="flex flex-col gap-2 font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] opacity-30">
                            <span>Orléans, FR — Résidence</span>
                            <span>Collectif House</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
                        {/* Column Left: Main Story */}
                        <div className="md:col-span-7 flex flex-col gap-16">
                            <section className="flex flex-col gap-8">
                                <h2 className="font-mono text-nomad-pink text-[10px] uppercase tracking-[0.5em]">01. Le Collectif</h2>
                                <p className="font-sans font-light text-2xl md:text-4xl text-white/90 leading-snug">
                                    NOMAD, c&apos;est avant tout une histoire de potes passionnés par la House Music. Un projet né d&apos;une envie simple : se retrouver et vibrer ensemble.
                                </p>
                                <p className="font-sans font-light text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
                                    On organise des événements pensés pour le dancefloor, avec une sélection toujours pointue et une vraie volonté de créer de bonnes ondes. Pas de chichis, juste de la bonne musique et une énergie communicative.
                                </p>
                            </section>

                            <section className="flex flex-col gap-8">
                                <h2 className="font-mono text-nomad-pink text-[10px] uppercase tracking-[0.5em]">02. Notre vision</h2>
                                <blockquote className="font-display italic text-4xl md:text-6xl text-white leading-tight border-l-2 border-nomad-pink pl-8 py-4">
                                    &quot;La House est un sentiment. On est là pour le partager.&quot;
                                </blockquote>
                            </section>
                        </div>

                        {/* Column Right: Details & Lists */}
                        <div className="md:col-span-5 flex flex-col gap-12 md:pt-[20vh]">
                            <section className="flex flex-col gap-8 p-10 bg-white/5 border border-white/5 rounded-sm relative overflow-hidden backdrop-blur-sm">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-nomad-pink opacity-[0.05] blur-[40px]" />
                                <h2 className="font-mono text-nomad-pink text-[9px] uppercase tracking-[0.4em]">03. Nos Influences</h2>
                                <ul className="flex flex-col gap-5 font-sans text-base md:text-lg text-white/70">
                                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-nomad-pink" /> Classic Deep House</li>
                                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-nomad-pink/50" /> Minimal & Dub</li>
                                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-nomad-pink" /> Groove Analogique</li>
                                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-nomad-pink/50" /> Chicago & Detroit</li>
                                </ul>
                            </section>

                            <section className="flex flex-col gap-6 px-4">
                                <h2 className="font-mono text-nomad-pink text-[9px] uppercase tracking-[0.4em]">04. Booking</h2>
                                <p className="font-sans text-sm text-white/40 leading-relaxed italic">
                                    Toujours chauds pour de nouvelles collaborations. Plateaux, soirées, ou événements : on est à votre écoute.
                                </p>
                            </section>
                        </div>
                    </div>
                </motion.div>

                {/* VISION TEXT SECTION */}
                <div className="w-full py-40 md:py-64 border-t border-white/5 mt-40">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl"
                    >
                        <h2 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tighter mb-16 opacity-10">Lâcher prise.</h2>
                        <p className="font-sans font-light text-2xl md:text-5xl leading-[1.05] text-white/80 mb-16">
                            &quot;Le but c&apos;est de s&apos;oublier le temps d&apos;une soirée. De créer un espace bienveillant où seule la musique compte.&quot;
                        </p>
                        <div className="w-24 h-[1px] bg-nomad-pink mb-16" />
                        <p className="font-sans font-light text-lg md:text-2xl leading-relaxed text-white/50 max-w-3xl">
                            Notre idée de la fête est simple : ramener de la chaleur et de la proximité dans les soirées. Loin des line-ups froids et standardisés, NOMAD veut remettre le groove et l&apos;humain au centre du dancefloor.
                        </p>
                    </motion.div>
                </div>

                {/* INFLUENCES */}
                <div className="w-full border-t border-white/10 pt-24">
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-30 mb-12 block">Inspirations</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {INFLUENCES.map((inf, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group py-6 border-b border-white/5 flex justify-between items-center hover:border-nomad-pink transition-colors"
                            >
                                <span className="font-display font-medium text-2xl uppercase tracking-tight">{inf}</span>
                                <span className="font-mono text-[8px] opacity-0 group-hover:opacity-30 transition-opacity">INFLUENCE</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
