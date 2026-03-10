"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
            {/* Background Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-nomad-pink opacity-[0.07] blur-[150px] rounded-full" />
            </div>

            <div className="z-10 flex flex-col items-center justify-center px-4 text-center w-full max-w-7xl">
                {/* Giant Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="font-display font-black text-[16vw] sm:text-[18vw] md:text-[min(22vw,400px)] uppercase leading-[0.8] tracking-[-0.05em] text-white"
                >
                    NOMAD
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-8 text-xs md:text-sm font-light tracking-[0.3em] text-white/60 uppercase"
                >
                    Collectif House Music & Évènementiel
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-12 flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        href="/music"
                        className="px-8 py-3 bg-nomad-pink/20 border border-nomad-pink/50 text-white font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-nomad-pink/40 transition-all rounded-sm cursor-pointer"
                    >
                        ÉCOUTER NOS SETS
                    </Link>
                    <Link
                        href="/booking"
                        className="px-8 py-3 border border-white/20 text-white font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all rounded-sm cursor-pointer"
                    >
                        RÉSERVER / CONTACT
                    </Link>
                </motion.div>

                {/* Bottom Meta */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-12"
                >
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">ORLÉANS — GLOBAL</span>
                </motion.div>
            </div>

        </section>
    );
}
