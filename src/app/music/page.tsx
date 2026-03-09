"use client";

import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";

const RELEASES = [
    { title: "Lunar Grooves", label: "Orbit Records", year: "2024", type: "EP" },
    { title: "Midnight Session", label: "Nomad Self-Release", year: "2023", type: "Single" },
    { title: "Orléans Nights", label: "Underflow", year: "2023", type: "EP" },
    { title: "Concrete Pulse", label: "Deep City", year: "2022", type: "Album" },
];

export default function MusicPage() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white pt-32 pb-32 overflow-x-hidden p-6 md:px-24">
            <NoiseOverlay />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
            >
                <h1 className="font-display font-black text-7xl md:text-[12vw] uppercase leading-[0.8] tracking-tighter">Musique.</h1>
                <p className="font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase opacity-40 max-w-[200px] text-right">Exploration sonore de l&apos;univers House Music</p>
            </motion.div>

            {/* RELEASES GRID */}
            <section className="w-full max-w-7xl mx-auto mb-32">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-[1px] flex-grow bg-white/10" />
                    <span className="font-mono text-xs uppercase tracking-widest opacity-30">Sorties</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/5 overflow-hidden">
                    {RELEASES.map((release, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative aspect-[4/3] bg-black p-8 flex flex-col justify-end border border-white/5 hover:border-nomad-pink/30 transition-colors pointer-events-auto cursor-pointer"
                        >
                            <div className="absolute top-8 right-8 font-mono text-[10px] opacity-20 group-hover:opacity-100 transition-opacity">[{release.type}]</div>
                            <div className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight mb-2">{release.title}</div>
                            <div className="flex justify-between items-center font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                                <span>{release.label}</span>
                                <span>{release.year}</span>
                            </div>
                            <div className="absolute inset-0 bg-nomad-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* MARQUEE */}
            <div className="w-full overflow-hidden py-12 md:py-24 whitespace-nowrap border-y border-white/5 bg-black z-10 relative -mx-6 md:-mx-24 mb-32">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    className="inline-block font-display font-black text-[12vw] md:text-[8vw] uppercase tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
                >
                    ÉCOUTER SUR SOUNDCLOUD • SPOTIFY • APPLE MUSIC • ÉCOUTER SUR SOUNDCLOUD • SPOTIFY • APPLE MUSIC •
                </motion.div>
            </div>

            <div className="w-full text-center mt-12 z-10">
                <p className="font-sans font-light text-sm text-white/40">Discographie complète disponible sur tous les miroirs digitaux.</p>
            </div>
        </div>
    );
}
