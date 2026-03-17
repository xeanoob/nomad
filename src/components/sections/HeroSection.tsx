"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
    const letters = "NOMAD".split("");

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center select-none bg-transparent z-10">
            {/* BACKGROUND "VOID" - Subtle depth only */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
            </div>

            {/* LOGO-ESQUE TITLE */}
            <div className="relative z-10 flex flex-col items-center justify-center mt-[-10vh]">
                <div className="flex gap-[0.8vw] md:gap-[0.5vw] mb-12 relative">
                    {letters.map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: i * 0.15, ease: [0.19, 1, 0.22, 1] }}
                            className="font-display font-black text-[16vw] md:text-[14vw] uppercase leading-none tracking-[-0.08em] text-white"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* SUBTITLE - Improved Readability */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className="mt-16 font-logo font-light text-[10px] md:text-[12px] uppercase tracking-[2em] text-white text-center max-w-[80vw] leading-loose"
                >
                    Collectif & Expériences Immersives
                </motion.p>
            </div>


            {/* ACTION HUD - Improved Readability */}
            <div className="absolute bottom-16 right-16 md:right-20 z-30 flex flex-col items-end gap-16 pointer-events-auto">
                <Link href="/music" className="group flex items-center gap-8 py-2">
                    <span className="font-logo font-light text-[11px] md:text-[13px] uppercase tracking-[0.6em] text-white/60 group-hover:text-white transition-all duration-700">Explorer la Musique</span>
                </Link>
                
                <div className="flex gap-12 items-center">
                    <Link href="/booking" className="px-10 py-3 border border-white/20 rounded-full font-logo font-light text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/80 hover:border-white hover:text-white transition-all duration-700">
                        Accès Privé
                    </Link>
                </div>
            </div>

            {/* FINE ARCHITECTURAL LINE */}
            <div className="absolute left-[50%] bottom-16 w-[1px] h-24 bg-white/20 -translate-x-1/2" />
        </section>
    );
}
