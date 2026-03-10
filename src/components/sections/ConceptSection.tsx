"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { StickyWrapper } from "@/components/layout/StickyWrapper";

export function ConceptSection() {
    return (
        <StickyWrapper height="200vh" className="bg-black z-20">
            {(progress: MotionValue<number>) => {
                // Background text moves sideways
                const bgX = useTransform(progress, [0, 1], ["10%", "-10%"]);
                
                // Image container moves up and scales slightly
                const imgY = useTransform(progress, [0, 1], [50, -50]);
                const imgRotate = useTransform(progress, [0, 1], [-1, 1]);
                const imgScale = useTransform(progress, [0, 0.5, 1], [0.9, 1, 0.95]);

                // Text content comes from the bottom, settles, then fades slightly
                const textY = useTransform(progress, [0, 0.5, 1], [100, 0, -50]);
                const textOpacity = useTransform(progress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.2]);

                return (
                    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden px-6">
                        {/* FLOATING TEXTURE NAME */}
                        <motion.div
                            style={{ x: bgX }}
                            className="absolute top-1/2 left-0 w-full whitespace-nowrap pointer-events-none opacity-[0.03] hidden md:flex items-center -translate-y-1/2"
                        >
                            <span className="font-display font-black text-[30vw] uppercase leading-none text-white italic">TEXTURES_NOMADES</span>
                        </motion.div>

                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 w-full">
                            {/* Visual - Fragmented Image */}
                            <motion.div
                                style={{ y: imgY, rotate: imgRotate, scale: imgScale }}
                                className="md:col-span-7 relative aspect-[4/5] glass-dark overflow-hidden group border border-white/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-nomad-pink/20 to-transparent mix-blend-overlay z-10" />
                                <div className="absolute inset-0 w-full h-full scale-110 group-hover:scale-100 transition-transform duration-1000">
                                    <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                                        <span className="font-mono text-[10px] uppercase tracking-[1em] text-white/10">IMG_FRAGMENT_01</span>
                                    </div>
                                </div>

                                <div className="absolute top-8 left-8 flex flex-col gap-1 z-20">
                                    <span className="font-mono text-[8px] uppercase tracking-widest text-white/40">FRAG. TYPE // 01</span>
                                    <div className="w-12 h-[1px] bg-nomad-pink" />
                                </div>
                            </motion.div>

                            {/* Content - Editorial Layout */}
                            <motion.div
                                style={{ y: textY, opacity: textOpacity }}
                                className="md:col-span-5 flex flex-col justify-center gap-16 md:pl-12"
                            >
                                <div className="relative">
                                    <h2 className="font-display font-black text-7xl md:text-9xl uppercase tracking-tighter text-white leading-[0.8]">
                                        La Vision <br />
                                        <span className="text-mask bg-gradient-to-r from-nomad-pink to-nomad-sunset blend-excl">Derrière</span> <br />
                                        Le Son.
                                    </h2>
                                    <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/10" />
                                </div>

                                <div className="flex flex-col gap-10 max-w-sm">
                                    <p className="font-sans font-light text-2xl leading-[1.4] text-white/50 first-letter:text-6xl first-letter:font-display first-letter:mr-3 first-letter:float-left first-letter:text-white">
                                        Nous ne jouons pas seulement de la musique. Nous sculptons des environnements. Chaque transition est une collision délibérée entre le chaos et la précision.
                                    </p>

                                    <div className="flex items-center gap-6 group cursor-pointer transition-transform hover:translate-x-4">
                                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-nomad-pink transition-colors">
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="w-2 h-2 bg-nomad-pink rounded-full"
                                            />
                                        </div>
                                        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/30 group-hover:text-white transition-colors">Explorer l&apos;Origine</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                );
            }}
        </StickyWrapper>
    );
}
