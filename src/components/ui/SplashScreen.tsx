"use client";

import { motion, AnimatePresence } from "framer-motion";
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
                    {/* Background Pulsing Ambient */}
                    <div className="absolute w-[150vw] h-[150vw] bg-nomad-pink/20 blur-[150px] rounded-full animate-ambient-pulse" />

                    {/* Logo Container */}
                    <div className="relative flex flex-col items-center justify-center z-10">
                        {/* Core glow behind logo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-nomad-pink/30 blur-2xl rounded-full animate-pulse" />
                        
                        <div className="relative w-32 h-32 md:w-44 md:h-44">
                            <Image
                                src="/nomad-removebg-preview.png"
                                alt="Nomad Logo"
                                fill
                                className="object-contain"
                                style={{ filter: "brightness(0) invert(1)" }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Subtle Loading Text */}
                    <div className="mt-8 font-mono text-[9px] uppercase tracking-[1em] text-white/40 animate-pulse z-10">
                        Synchronizing
                    </div>
                </>
            )}
        </div>
    );
}
