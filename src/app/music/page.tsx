"use client";

import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import Link from "next/link";

export default function MusicPage() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white pt-40 pb-40 px-6 md:px-24 overflow-x-hidden">
            <NoiseOverlay />

            {/* Subtle, gritty background highlight */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[100vw] h-[100vw] bg-nomad-pink opacity-[0.04] blur-[180px] rounded-full" />
            </div>

            <main className="max-w-7xl mx-auto relative z-10 flex flex-col gap-32">

                {/* Asymmetrical Header */}
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-nomad-pink">01 / DÉPOT SONORE</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-display font-black text-8xl md:text-[15rem] uppercase leading-[0.75] tracking-tighter"
                    >
                        SONS.
                    </motion.h1>
                </div>

                {/* Main Content Grid - Raw & Gritty */}
                <div className="flex flex-col md:flex-row gap-24 items-start">

                    {/* Left: Home Sessions (The Build) */}
                    <div className="w-full md:w-5/12 flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="aspect-[4/5] bg-white/[0.02] border border-white/5 relative group flex items-center justify-center"
                        >
                            <div className="absolute inset-4 border border-white/5 pointer-events-none" />
                            <div className="text-center p-8">
                                <span className="font-mono text-[8px] uppercase tracking-[0.4em] opacity-20 block mb-4">[ ANALOG SETUP — 48H RECORDING ]</span>
                                <p className="font-sans text-xs uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                                    NOMAD HOME SESSION #001
                                </p>
                            </div>
                            <div className="absolute bottom-6 right-6">
                                <span className="font-mono text-[10px] text-nomad-pink animate-pulse">FIXING GAIN...</span>
                            </div>
                        </motion.div>

                        <div className="flex flex-col gap-6">
                            <h2 className="font-display font-black text-4xl uppercase tracking-tighter">Textures & Groove.</h2>
                            <p className="font-sans font-light text-lg leading-relaxed text-white/50">
                                Pas de fioritures. Juste l&apos;intimité de notre studio improvisé, capturant le ronronnement des machines et l&apos;énergie du moment présent. <br />
                                <span className="text-white/80 italic">Bientôt disponible en streaming.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Curation (The Echo) */}
                    <div className="w-full md:w-7/12 flex flex-col gap-16 md:mt-48">
                        <div className="flex flex-col gap-8 border-l border-white/10 pl-8 md:pl-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-4"
                            >
                                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/30">02 / LA CRUE</span>
                                <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter text-white">L&apos;Écho de la Nuit.</h2>
                                <p className="font-sans font-light text-xl leading-relaxed text-white/40 max-w-xl">
                                    Une sélection sans compromis des morceaux qui alimentent nos sets. Des pépites House trouvées au détour d&apos;un bac ou d&apos;un lien obscur.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <a
                                    href="https://soundcloud.com/nomadcrue"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block py-4 px-10 border border-white/20 font-mono text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
                                >
                                    ACCÉDER AU SOUNDCLOUD
                                </a>
                            </motion.div>
                        </div>

                        {/* Technical Metadata Decoration */}
                        <div className="grid grid-cols-2 gap-8 opacity-20 invisible md:visible">
                            <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                                <span className="font-mono text-[8px] uppercase tracking-widest">Technics SL-1210</span>
                                <span className="font-mono text-[8px] uppercase tracking-widest">Xone:92 / Pioneer</span>
                            </div>
                            <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                                <span className="font-mono text-[8px] uppercase tracking-widest">Freq: 20Hz - 22kHz</span>
                                <span className="font-mono text-[8px] uppercase tracking-widest">Type: House / Raw / Deep</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Final CTA Spacer/Anchor */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            </main>
        </div>
    );
}
