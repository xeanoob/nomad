"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
    isVisible: boolean;
}

export function SplashScreen({ isVisible }: SplashScreenProps) {
    return (
        <div 
            className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            {isVisible && (
                <>
                    {/* Minimalist Logo Container */}
                    <div className="relative flex flex-col items-center justify-center z-10">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-16 grayscale invert brightness-200 opacity-40">
                            <Image
                                src="/nomad.png"
                                alt="Nomad Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Luxurious Phrasing - Improved Readability */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="mt-8 font-logo font-light text-[11px] md:text-[13px] uppercase tracking-[1em] text-white/50 z-10"
                    >
                        Collection Nomad — Édition Orléans
                    </motion.div>
                </>
            )}
        </div>
    );
}
