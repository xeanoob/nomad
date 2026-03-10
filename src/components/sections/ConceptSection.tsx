"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";

export function ConceptSection() {
    return (
        <section className="relative w-full bg-transparent py-48 px-6 md:px-24 flex items-center justify-center overflow-hidden z-10">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16 md:gap-32">
                {/* Visual - Premium Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative w-full md:w-1/2 aspect-square bg-white/[0.03] border border-white/10 overflow-hidden group"
                >
                    <NextImage
                        src="/vision.png"
                        alt="NOMAD Sound Vision"
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-nomad-pink opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-1000 pointer-events-none" />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 flex flex-col gap-10"
                >
                    <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl uppercase leading-[0.85] tracking-tighter text-white">
                        La Vision <br />
                        <span className="text-white">Derrière le Son.</span>
                    </h2>

                    <div className="w-20 h-[1px] bg-nomad-pink/50" />

                    <p className="font-sans font-light text-xl md:text-2xl leading-relaxed text-white/60">
                        Plus qu&apos;une série de morceaux, NOMAD est une exploration des textures sonores.
                        Nous sculptons chaque set pour transformer le dancefloor en une expérience immersive,
                        loin des standards classiques.
                    </p>
                </motion.div>
            </div>

        </section>
    );
}
