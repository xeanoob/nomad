"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-nomad-dark via-nomad-dark to-nomad-pink opacity-80" />

            {/* Animated Glow Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-20%] left-1/2 -ml-[300px] h-[600px] w-[600px] rounded-full bg-nomad-pink blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-[-10%] left-1/4 h-[500px] w-[500px] rounded-full bg-nomad-sunset blur-[120px]"
            />

            <div className="z-10 flex flex-col items-center justify-center px-4 text-center">
                {/* Animated Logo / Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mb-8"
                >
                    <Image
                        src="/nomad-logo.svg"
                        alt="Nomad Logo"
                        width={120}
                        height={90}
                        className="drop-shadow-[0_0_15px_rgba(255,77,133,0.8)] invert"
                    />
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-glow text-6xl font-black tracking-tighter sm:text-8xl md:text-[12rem] leading-none"
                >
                    NOMAD
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    className="mt-6 text-xl tracking-widest text-nomad-foreground/80 sm:text-2xl uppercase"
                >
                    L&apos;écho de la nuit. Le rythme de l&apos;instant.
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-white/50">Découvrir</span>
                    <div className="h-10 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
