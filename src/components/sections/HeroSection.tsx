"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
    const letters = "NOMAD".split("");

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center select-none bg-black z-10">
            {/* BACKGROUND "VOID" */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-nomad-pink via-black to-nomad-pink/20 blur-[120px] opacity-20" />
            </div>

            {/* THE MASKED TEXT / CORE OBJECT */}
            <div className="relative perspective-container z-10 w-full h-full flex flex-col items-center justify-center">
                <div className="flex gap-[2vw] md:gap-[1vw]">
                    {letters.map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display font-black text-[18vw] sm:text-[20vw] md:text-[22vw] uppercase leading-none tracking-[-0.1em] text-white blend-excl origin-center"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* SUBTITLE */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-8 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.8em] text-white/60 text-center max-w-[80vw]"
                >
                    Collectif House Music & Expériences Immersives
                </motion.p>
            </div>

            {/* HUD META */}
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-between py-16">
                <div className="w-full px-8 pt-24 mt-8 flex justify-between items-start font-mono text-[8px] uppercase tracking-[0.4em] text-white/40">
                    <div className="flex flex-col gap-1">
                        <span className="text-nomad-pink opacity-60">NOMAD_ARCHIVE</span>
                        <span>VER_2.3.0</span>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                        <span>47.9030° N, 1.9093° E</span>
                        <span>ORLEANS / FR</span>
                    </div>
                </div>
            </div>

            {/* ACTION HUD */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-10 items-center pointer-events-auto">
                <Link href="/music" className="group flex items-center gap-4 py-6 px-10 glass overflow-hidden transition-transform active:scale-95 border border-white/10">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white">Fragments</span>
                </Link>
                <Link href="/booking" className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">
                    Connection
                </Link>
            </div>
        </section>
    );
}
