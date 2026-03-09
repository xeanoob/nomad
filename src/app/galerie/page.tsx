"use client";

import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";

export default function GaleriePage() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white pt-32 pb-32 px-6 md:px-24 overflow-x-hidden">
            <NoiseOverlay />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <h1 className="font-display font-black text-7xl md:text-[min(12vw,200px)] uppercase leading-[0.8] tracking-tighter">Galerie.</h1>
                    <div className="flex flex-col items-end">
                        <p className="font-mono text-[10px] md:text-sm tracking-[0.4em] uppercase opacity-40">Documentation Vol. 1</p>
                        <p className="font-sans text-[10px] uppercase opacity-20">Depuis Orléans et l&apos;au-delà</p>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 pb-32">
                    {[
                        { aspect: "aspect-square", label: "Midnight Session" },
                        { aspect: "aspect-[4/5]", label: "Studio Flux" },
                        { aspect: "aspect-video", label: "Club Transmission" },
                        { aspect: "aspect-[3/4]", label: "Analog Soul" },
                        { aspect: "aspect-square", label: "Identity" },
                        { aspect: "aspect-[9/16]", label: "Vertical Flow" },
                        { aspect: "aspect-video", label: "Horizon" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`break-inside-avoid relative group rounded-xl bg-white/5 border border-white/10 overflow-hidden cursor-crosshair ${item.aspect}`}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-mono text-[8px] md:text-[10px] opacity-10 group-hover:opacity-100 transition-opacity duration-700 uppercase tracking-[0.5em]">
                                    [ {item.label} ]
                                </span>
                            </div>

                            {/* Glow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-nomad-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Border Glow */}
                            <div className="absolute inset-0 border border-nomad-pink opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
