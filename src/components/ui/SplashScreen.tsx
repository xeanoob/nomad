"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
    isVisible: boolean;
}

export function SplashScreen({ isVisible }: SplashScreenProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 overflow-hidden pointer-events-none"
                >
                    {/* Dynamic Sunset Glow Center */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.5, 2], opacity: [0, 0.4, 0] }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-nomad-pink blur-[80px] rounded-full mix-blend-screen"
                    />

                    {/* Minimalist Logo Reveal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                        className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center z-10"
                    >
                        <Image
                            src="/nomad-removebg-preview.png"
                            alt="Nomad Logo"
                            fill
                            className="object-contain [filter:brightness(0)_invert(1)_drop-shadow(0_0_10px_rgba(255,255,255,0.2))]"
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
