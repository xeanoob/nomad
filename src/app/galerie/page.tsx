"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useTransform, MotionValue } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { StickyWrapper } from "@/components/layout/StickyWrapper";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Scan } from "lucide-react";

export default function GaleriePage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const images = [
        { src: "/gallery-1.png", aspect: "aspect-[4/5]", label: "Underground Sanctuary" },
        { src: "/gallery-2.png", aspect: "aspect-square", label: "Sonic Flux" },
        { src: "/gallery-3.png", aspect: "aspect-[4/5]", label: "The Alchemist" },
        { src: "/gallery-2.png", aspect: "aspect-video", label: "Curation I" },
        { src: "/gallery-1.png", aspect: "aspect-square", label: "Deep Resonance" },
        { src: "/gallery-3.png", aspect: "aspect-[9/16]", label: "Identity" }
    ];

    const nextImage = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex + 1) % images.length);
    }, [selectedIndex, images.length]);

    const prevImage = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }, [selectedIndex, images.length]);

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") setSelectedIndex(null);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, nextImage, prevImage]);

    return (
        <main className="relative w-full bg-black text-white selection:bg-nomad-pink/30">
            <NoiseOverlay />

            {/* Global Ambient Glow */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none select-none z-0">
                <div className="absolute top-[10%] right-[-5%] w-[100vw] h-[100vw] bg-nomad-pink/[0.04] blur-[180px] rounded-full animate-ambient-pulse" />
            </div>

            {/* STICKY HERO */}
            <StickyWrapper height="120vh" className="z-10 bg-black">
                {(progress: MotionValue<number>) => {
                    const opacity = useTransform(progress, [0, 0.8, 1], [1, 1, 0]);
                    const scale = useTransform(progress, [0, 1], [1, 0.92]);

                    return (
                        <motion.div style={{ opacity, scale }} className="relative w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-24">
                            <div className="max-w-7xl mx-auto w-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col gap-6"
                                >
                                    <h1 className="font-display font-black text-[15vw] md:text-[min(12vw,200px)] uppercase leading-[0.8] tracking-tighter">
                                        Exposition.
                                    </h1>
                                    <div className="w-12 h-[2px] bg-nomad-pink" />
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                }}
            </StickyWrapper>

            {/* SLIDING CONTENT LAYER */}
            <div className="relative z-20 bg-black border-t border-white/10 pt-32 pb-48 px-6 sm:px-12 md:px-24 shadow-[0_-30px_60px_rgba(0,0,0,0.9)]">
                <div className="max-w-7xl mx-auto w-full flex flex-col gap-32">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
                        {images.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group flex flex-col gap-6 cursor-pointer"
                                onClick={() => setSelectedIndex(i)}
                            >
                                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                                    <div className="flex items-center gap-2">
                                        <Scan size={10} className="text-nomad-pink opacity-40 group-hover:opacity-100 transition-opacity" />
                                        <span className="font-mono text-[8px] uppercase tracking-widest text-white/20 group-hover:text-nomad-pink transition-colors">Digital_Scan_{i+100}</span>
                                    </div>
                                    <span className="font-mono text-[8px] text-white/5">00{i + 1} // Visual</span>
                                </div>

                                <div className={`relative overflow-hidden rounded-sm bg-white/5 border border-white/10 ${item.aspect}`}>
                                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none border-4 border-nomad-pink/10" />
                                    <Image
                                        src={item.src}
                                        alt={item.label}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-nomad-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>

                                <div className="flex justify-between items-center px-1">
                                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">{item.label}</span>
                                    <Maximize2 size={12} className="text-white opacity-0 group-hover:opacity-20 transition-opacity" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Meta */}
                    <div className="pt-48 flex flex-col md:flex-row justify-between border-t border-white/5 gap-8 opacity-20">
                        <div className="flex flex-col gap-2 font-mono text-[8px] uppercase tracking-[0.2em]">
                            <span>VISUAL_LOG — UNIT 03</span>
                            <span>RESOLUTION: ULTRA_HIGH</span>
                        </div>
                        <div className="flex flex-col gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-right">
                            <span>INDEXING: COMPLETE</span>
                            <span>© 2026 NOMAD PROJECT</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedIndex(null)}
                    >
                        {/* Lightbox Controls & Index */}
                        <div className="absolute top-8 left-8 flex items-center gap-6 z-[110]">
                            <div className="flex flex-col gap-1">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-nomad-pink">Digital_Viewer</span>
                                <span className="font-mono text-[8px] uppercase tracking-widest text-white/30">Index: {selectedIndex + 1} / {images.length}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute top-8 right-8 z-[110] p-2 text-white/40 hover:text-white hover:rotate-90 transition-all duration-300"
                        >
                            <X size={24} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 md:left-8 z-[110] p-4 text-white/50 hover:text-white transition-colors group"
                        >
                            <ChevronLeft size={40} strokeWidth={1} className="group-hover:-translate-x-2 transition-transform" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 md:right-8 z-[110] p-4 text-white/50 hover:text-white transition-colors group"
                        >
                            <ChevronRight size={40} strokeWidth={1} className="group-hover:translate-x-2 transition-transform" />
                        </button>

                        <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
                            <div className="relative w-full h-full">
                                <motion.div
                                    key={selectedIndex}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={images[selectedIndex].src}
                                        alt={images[selectedIndex].label}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                key={selectedIndex + "_label"}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <p className="font-display text-2xl uppercase tracking-[0.2em] font-medium">{images[selectedIndex].label}</p>
                                <div className="w-12 h-px bg-nomad-pink/30" />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
