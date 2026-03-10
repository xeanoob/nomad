"use client";

import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { StickyWrapper } from "@/components/layout/StickyWrapper";

export function HeroSection() {
    const letters = "NOMAD".split("");

    return (
        <StickyWrapper height="250vh" className="z-10 bg-black">
            {(progress: MotionValue<number>) => {
                // Apply spring physics to the progress for smoother 3D transitions
                const springScroll = useSpring(progress, { stiffness: 45, damping: 30 });

                // HUD opacity fades out quickly as we scroll down
                const hudOpacity = useTransform(springScroll, [0, 0.2], [1, 0]);
                const bgScale = useTransform(springScroll, [0, 1], [1, 1.2]);
                const bgOpacity = useTransform(springScroll, [0, 1], [0.15, 0.4]);
                const subtitleOpacity = useTransform(springScroll, [0, 0.3], [0.6, 0]);
                const subtitleY = useTransform(springScroll, [0, 1], [0, 100]);
                const actionHudOpacity = useTransform(springScroll, [0, 0.2], [1, 0]);

                return (
                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center select-none">
                        {/* BACKGROUND "VOID" */}
                        <div className="absolute inset-0 z-0">
                            <motion.div
                                style={{
                                    scale: bgScale,
                                    opacity: bgOpacity
                                }}
                                className="absolute inset-0 bg-gradient-to-br from-nomad-pink via-black to-nomad-pink/20 blur-[120px]"
                            />
                        </div>

                        {/* THE MASKED TEXT / CORE OBJECT */}
                        <div className="relative perspective-container z-10 w-full h-full flex flex-col items-center justify-center">
                            <div className="flex gap-[2vw] md:gap-[1vw]">
                                {letters.map((letter, i) => {
                                    // Individual letter transformation in 3D space
                                    const rotateX = useTransform(springScroll, [0, 1], [0, i % 2 === 0 ? 45 : -45]);
                                    const rotateY = useTransform(springScroll, [0, 1], [0, i % 2 === 0 ? -45 : 45]);
                                    const z = useTransform(springScroll, [0, 1], [0, (i + 1) * 200]);
                                    const opacity = useTransform(springScroll, [0, 0.6, 1], [1, 0.8, 0]);
                                    const y = useTransform(springScroll, [0, 1], [0, i % 2 === 0 ? -100 : 100]);

                                    return (
                                        <motion.span
                                            key={i}
                                            style={{
                                                rotateX,
                                                rotateY,
                                                z,
                                                y,
                                                opacity,
                                                transformStyle: "preserve-3d"
                                            }}
                                            className="font-display font-black text-[25vw] md:text-[22vw] uppercase leading-none tracking-[-0.1em] text-white blend-excl origin-center"
                                        >
                                            {letter}
                                        </motion.span>
                                    );
                                })}
                            </div>

                            {/* SUBTITLE */}
                            <motion.p
                                style={{
                                    opacity: subtitleOpacity,
                                    y: subtitleY
                                }}
                                className="mt-8 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.8em] text-white/60 text-center max-w-[80vw]"
                            >
                                Collectif House Music & Expériences Immersives
                            </motion.p>
                        </div>

                        {/* HUD META (FADES OUT IMMEDIATELY) */}
                        <motion.div
                            style={{ opacity: hudOpacity }}
                            className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-between py-16"
                        >
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

                        </motion.div>

                        {/* ACTION HUD (Fades out earlier so it doesn't overlap text) */}
                        <motion.div
                            style={{ opacity: actionHudOpacity }}
                            className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-10 items-center pointer-events-auto"
                        >
                            <Link href="/music" className="group flex items-center gap-4 py-6 px-10 glass overflow-hidden transition-transform active:scale-95 border border-white/10">
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white">Fragments</span>
                            </Link>
                            <Link href="/booking" className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">
                                Connection
                            </Link>
                        </motion.div>
                    </div>
                );
            }}
        </StickyWrapper>
    );
}
