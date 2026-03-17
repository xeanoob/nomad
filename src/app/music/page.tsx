"use client";

import { motion } from "framer-motion";
import { Radio, Headphones } from "lucide-react";

export default function MusicPage() {
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
                        <h1 className="font-display font-black text-[25vw] sm:text-[20vw] md:text-[min(18vw,240px)] uppercase leading-[0.75] tracking-tighter text-white">
                            Sons.
                        </h1>
                        <div className="w-12 h-[0.5px] bg-white/20" />
                    </motion.div>
                </div>
            </section>

            {/* SLIDING CONTENT LAYER */}
            <div className="relative z-20 bg-black border-t border-white/5 pt-32 pb-48 px-6 sm:px-12 md:px-24">
                <div className="max-w-7xl mx-auto w-full flex flex-col gap-32 md:gap-48">
                    
                    {/* Home Sessions Focus */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="flex flex-col gap-10">
                            <div className="flex items-center gap-4 text-white/40">
                                <Radio size={16} />
                                <span className="font-logo text-[12px] uppercase tracking-[0.6em]">01 / Sessions</span>
                            </div>
                            <h2 className="font-display font-medium text-4xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
                                Textures <br /><span className="italic opacity-30">& Intimité.</span>
                            </h2>
                            <p className="font-logo font-light text-[15px] md:text-[17px] text-white/80 leading-[1.8] tracking-wide max-w-xl">
                                NOMAD HOME SESSION #001 <br />
                                Capturer l&apos;énergie brute de notre studio improvisé. Un enregistrement de 48h sans filtre, où chaque texture sonore raconte une partie de notre histoire.
                            </p>
                            <div className="flex gap-12 pt-4">
                                <div className="flex flex-col gap-1">
                                    <span className="font-logo text-[9px] text-white/30 uppercase tracking-widest">Setup</span>
                                    <span className="font-logo text-[12px] text-white/60">Analog Hardware</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-logo text-[9px] text-white/30 uppercase tracking-widest">Status</span>
                                    <span className="font-logo text-[12px] text-white/60">Post-Production</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-[4/5] border border-white/5 overflow-hidden group">
                           <div className="absolute inset-12 border border-white/5 pointer-events-none" />
                           <div className="absolute bottom-8 right-8 flex items-center gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40 animate-pulse" />
                               <span className="font-logo text-[10px] text-white/40 uppercase tracking-widest">Buffer_Active</span>
                           </div>
                        </div>
                    </div>

                    {/* Soundcloud Archive */}
                    <div className="flex flex-col gap-16 border-l border-white/5 pl-8 md:pl-20 py-12 relative overflow-hidden">
                        <span className="font-logo text-white/40 text-[12px] uppercase tracking-[0.6em]">02 / L&apos;archive</span>
                        <h2 className="font-display font-medium text-5xl md:text-9xl uppercase tracking-tighter opacity-5 leading-none">L&apos;Écho.</h2>
                        <h3 className="font-display font-medium text-4xl md:text-7xl uppercase tracking-tighter -mt-12 md:-mt-24">L&apos;Écho de la Nuit.</h3>
                        <p className="font-logo font-light text-[15px] md:text-[19px] text-white/80 leading-[1.8] tracking-wide max-w-2xl">
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
                                className="group relative inline-flex items-center gap-8 py-6 px-12 border border-white/10 overflow-hidden transition-all duration-700"
                            >
                                <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                                <span className="relative z-10 font-logo text-[12px] uppercase tracking-[0.4em] group-hover:text-black transition-colors">ACCÉDER À L&apos;ARCHIVE SOUNDCLOUD</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Footer Meta */}
                    <div className="pt-32 flex flex-col md:flex-row justify-between border-t border-white/5 gap-8 opacity-20">
                        <div className="flex flex-col gap-2 font-logo text-[9px] uppercase tracking-[0.3em]">
                            <span>AUDIO ARCHIVE — UNIT 02</span>
                        </div>
                        <div className="flex flex-col gap-2 font-logo text-[9px] uppercase tracking-[0.3em] text-right">
                             <span>STREAM_STATE: READY</span>
                             <span>© 2026 NOMAD PROJECT</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
