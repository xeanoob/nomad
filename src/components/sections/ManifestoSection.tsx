"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { StickyWrapper } from "@/components/layout/StickyWrapper";

export function ManifestoSection() {
    return (
        <StickyWrapper height="200vh" className="bg-black z-30">
            {(progress: MotionValue<number>) => {
                const scale = useTransform(progress, [0, 0.5, 1], [0.8, 1.2, 0.95]);
                const rotateX = useTransform(progress, [0, 1], [15, -15]);
                const titleOpacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
                
                // Quote comes from bottom, stays momentarily, goes up
                const quoteOpacity = useTransform(progress, [0.3, 0.5, 0.8, 1], [0, 1, 1, 0]);
                const quoteY = useTransform(progress, [0.3, 0.5, 0.8, 1], [30, 0, 0, -30]);

                return (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <motion.div
                            style={{ scale, rotateX, opacity: titleOpacity, transformStyle: "preserve-3d" }}
                            className="relative perspective-container flex flex-col items-center text-center px-6"
                        >
                            <span className="font-mono text-[10px] uppercase tracking-[1em] text-white/20 mb-12">
                                Processus_Manifeste
                            </span>

                            <h2 className="font-display font-black text-6xl md:text-[12vw] uppercase leading-[0.75] tracking-[-0.08em] text-white blend-excl">
                                Lâcher <br />
                                <span className="text-mask bg-gradient-to-br from-nomad-pink via-white to-nomad-sunset">Prise</span>
                            </h2>

                            <motion.div
                                style={{
                                    opacity: quoteOpacity,
                                    y: quoteY
                                }}
                                className="mt-24 max-w-2xl font-sans font-extralight text-2xl md:text-3xl text-white/40 leading-tight"
                            >
                                &quot;La nuit n&apos;est pas une absence de lumière, mais une autre forme de clarté. Nous sommes les guides de cette transition.&quot;
                            </motion.div>
                        </motion.div>
                    </div>
                );
            }}
        </StickyWrapper>
    );
}
