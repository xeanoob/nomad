"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="relative w-full bg-nomad-dark py-32 px-4 sm:px-8 text-foreground pb-40">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Decorative Visual Content, replacing an image for now */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="relative w-full md:w-1/2 aspect-square max-w-md rounded-sm overflow-hidden bg-[#111]"
                    >
                        {/* High contrast placeholder style */}
                        <div className="absolute inset-0 opacity-40 mix-blend-color-dodge bg-gradient-to-tr from-nomad-purple to-nomad-sunset" />
                        <div className="absolute inset-0 bg-grain opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center border border-white/10 m-4">
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">NMD_DUO_IMG</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 flex flex-col justify-center"
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl uppercase mb-8">
                            Deux esprits. <br />
                            <span className="text-nomad-sunset">Une seule fréquence.</span>
                        </h2>

                        <p className="text-lg leading-relaxed text-white/70 mb-6 font-light">
                            Nés de la culture club et passionnés par l&apos;art du rythme, nous avons uni nos forces pour redéfinir l&apos;expérience du dancefloor.
                        </p>
                        <p className="text-lg leading-relaxed text-white/70 mb-8 font-light">
                            Une complicité brute derrière les platines nous permet de construire des sets évolutifs, communiquant une énergie authentique face au public.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-nomad-pink" />
                            <span className="text-sm font-semibold tracking-widest text-white uppercase">Paris / Worldwide</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
