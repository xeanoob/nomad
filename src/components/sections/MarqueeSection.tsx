"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { StickyWrapper } from "@/components/layout/StickyWrapper";

export function MarqueeSection() {
    return (
        <StickyWrapper height="200vh" className="bg-black z-20">
            {(progress: MotionValue<number>) => {
                // Fast parallax movement bound to scroll
                const x1 = useTransform(progress, [0, 1], ["0%", "-30%"]);
                const x2 = useTransform(progress, [0, 1], ["-30%", "0%"]);
                
                // Fade in and out to blend with previous/next sections
                const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

                return (
                    <motion.div 
                        style={{ opacity }}
                        className="relative w-full h-full flex flex-col justify-center gap-4 md:gap-8 overflow-hidden bg-gradient-to-b from-transparent via-nomad-pink/5 to-transparent"
                    >
                        {/* Marquee Line 1 */}
                        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap items-center gap-8">
                            {[...Array(4)].map((_, i) => (
                                <h2 key={`m1-${i}`} className="font-display font-black text-6xl md:text-[8vw] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
                                    IMMERSIVE SOUNDSCAPES <span className="text-nomad-pink/40 mx-4">✦</span>
                                </h2>
                            ))}
                        </motion.div>

                        {/* Marquee Line 2 */}
                        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap items-center gap-8">
                            {[...Array(4)].map((_, i) => (
                                <h2 key={`m2-${i}`} className="font-display font-black text-6xl md:text-[8vw] uppercase leading-none text-white">
                                    NO SLEEP CLUB <span className="text-nomad-pink mx-4">✦</span> ORLÉANS
                                </h2>
                            ))}
                        </motion.div>

                        {/* Marquee Line 3 */}
                        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap items-center gap-8">
                            {[...Array(4)].map((_, i) => (
                                <h2 key={`m3-${i}`} className="font-display font-black text-6xl md:text-[8vw] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
                                    BEYOND THE DECKS <span className="text-nomad-pink/40 mx-4">✦</span> 
                                </h2>
                            ))}
                        </motion.div>
                    </motion.div>
                );
            }}
        </StickyWrapper>
    );
}
