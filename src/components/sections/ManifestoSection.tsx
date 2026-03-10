"use client";

import { motion } from "framer-motion";

export function ManifestoSection() {
    return (
        <section className="relative w-full py-32 md:py-48 px-6 md:px-24 z-10 bg-black flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-nomad-pink opacity-5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-8 md:gap-12"
                >
                    <span className="font-mono text-[10px] md:text-sm tracking-[0.6em] uppercase text-nomad-pink opacity-80">Manifeste</span>
                    <h2 className="font-display font-black text-4xl md:text-7xl uppercase leading-[0.9] tracking-tighter">
                        Nous croyons que la House est une exploration.
                    </h2>
                    <div className="w-12 h-[1px] bg-white/20 mx-auto" />
                    <p className="font-sans font-light text-xl md:text-3xl leading-relaxed text-white/70 italic">
                        &quot;NOMAD est né de la quête de l&apos;instant pur. Là où les textures organiques rencontrent la rigueur du beat. Nous ne jouons pas pour le dancefloor, nous jouons avec lui pour sculpter une émotion qui reste, bien après que les lumières se soient éteintes.&quot;
                    </p>
                    <div className="flex flex-col items-center gap-4 mt-8">
                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-30">Orléans — La Crue</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
