"use client";

import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { Headphones, Radio } from "lucide-react";

export default function MusicPage() {
    return (
        <main className="relative w-full bg-black text-white selection:bg-nomad-pink/30">
            <NoiseOverlay />

            {/* Global Ambient Glow */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none select-none z-0">
                <div className="absolute top-[30%] left-[-10%] w-[100vw] h-[100vw] bg-nomad-pink/[0.02] blur-[150px] rounded-full animate-ambient-pulse" />
            </div>

            {/* HERO */}
            <section className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 sm:px-12 md:px-24 z-10 bg-black">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6"
                    >
                        <h1 className="font-display font-black text-[25vw] sm:text-[20vw] md:text-[min(18vw,240px)] uppercase leading-[0.75] tracking-tighter text-white">
                            SONS.
                        </h1>
                        <div className="w-12 h-[2px] bg-nomad-pink" />
                    </motion.div>
                </div>
            </section>

            {/* SLIDING CONTENT LAYER */}
            <div className="relative z-20 bg-black border-t border-white/10 pt-32 pb-48 px-6 sm:px-12 md:px-24 shadow-[0_-30px_60px_rgba(0,0,0,0.9)]">
                <div className="max-w-7xl mx-auto w-full flex flex-col gap-32 md:gap-48">
                    
                    {/* Home Sessions Focus */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <section className="flex flex-col gap-10">
                            <div className="flex items-center gap-4 text-nomad-pink">
                                <Radio size={16} className="animate-pulse" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.6em]">01 / Sessions</span>
                            </div>
                            <h2 className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
                                Textures <br />& Intimité.
                            </h2>
                            <p className="font-sans font-light text-xl text-white/50 leading-relaxed max-w-xl">
                                NOMAD HOME SESSION #001 <br />
                                Capturer l&apos;énergie brute de notre studio improvisé. Un enregistrement de 48h sans filtre, où chaque texture sonore raconte une partie de notre histoire.
                            </p>
                            <div className="flex gap-12 pt-4">
                                <div className="flex flex-col gap-1">
                                    <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Setup</span>
                                    <span className="font-mono text-[10px] text-white/60">Analog Hardware</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Status</span>
                                    <span className="font-mono text-[10px] text-white/60">Post-Production</span>
                                </div>
                            </div>
                        </section>

                        <div className="relative aspect-[4/5] bg-white/[0.02] border border-white/5 overflow-hidden group">
                           <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                               <Headphones size={120} strokeWidth={0.5} />
                           </div>
                           <div className="absolute inset-12 border border-white/5 pointer-events-none" />
                           <div className="absolute bottom-8 right-8 flex items-center gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-nomad-pink animate-ping" />
                               <span className="font-mono text-[9px] text-nomad-pink uppercase tracking-widest">Buffer_Active</span>
                           </div>
                        </div>
                    </div>

                    {/* Soundcloud Archive */}
                    <div className="flex flex-col gap-16 border-l border-white/10 pl-8 md:pl-20 py-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-nomad-pink via-white/10 to-transparent" />
                        <span className="font-mono text-nomad-pink text-[10px] uppercase tracking-[0.6em]">02 / L&apos;archive</span>
                        <h2 className="font-display font-black text-5xl md:text-9xl uppercase tracking-tighter opacity-10 leading-none">L&apos;Écho.</h2>
                        <h3 className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter -mt-12 md:-mt-24">L&apos;Écho de la Nuit.</h3>
                        <p className="font-sans font-light text-xl md:text-3xl text-white/40 leading-relaxed max-w-2xl">
                            Une sélection sans compromis des morceaux qui alimentent nos sets. Des pépites House trouvées au détour d&apos;un bac ou d&apos;un lien obscur.
                        </p>
                        
                        <motion.div
                            whileHover={{ x: 10 }}
                            className="pt-8"
                        >
                            <a
                                href="https://soundcloud.com/nomadcrue"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-8 py-6 px-12 border border-white/10 overflow-hidden transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                                <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.4em] group-hover:text-black transition-colors">ACCÉDER À L&apos;ARCHIVE SOUNDCLOUD</span>
                                <div className="relative z-10 w-2 h-2 rounded-full bg-nomad-pink group-hover:bg-black animate-pulse" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Footer Meta */}
                    <div className="pt-32 flex flex-col md:flex-row justify-between border-t border-white/5 gap-8 opacity-20">
                        <div className="flex flex-col gap-2 font-mono text-[8px] uppercase tracking-[0.3em]">
                            <span>AUDIO ARCHIVE — UNIT 02</span>
                            <span>FREQ: 20HZ - 22KHZ</span>
                        </div>
                        <div className="flex flex-col gap-2 font-mono text-[8px] uppercase tracking-[0.3em] text-right">
                             <span>STREAM_STATE: READY</span>
                             <span>© 2026 NOMAD PROJECT</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
