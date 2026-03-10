"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

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
        <div className="relative w-full min-h-screen bg-black text-white pt-32 pb-32 px-6 md:px-24 overflow-x-hidden">
            <NoiseOverlay />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <h1 className="font-display font-black text-[15vw] md:text-[min(12vw,200px)] uppercase leading-[0.8] tracking-tighter">Exposition.</h1>
                    <div className="flex flex-col items-end text-right">
                        <p className="font-mono text-[10px] md:text-sm tracking-[0.4em] uppercase text-nomad-pink">Esthétique & Textures</p>
                        <p className="font-sans text-[10px] uppercase opacity-40 mt-1">L&apos;univers visuel de NOMAD</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-32">
                    {images.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col gap-4 cursor-pointer"
                            onClick={() => setSelectedIndex(i)}
                        >
                            <div className={`relative overflow-hidden rounded-sm bg-white/5 border border-white/10 ${item.aspect}`}>
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-nomad-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Maximize2 size={16} className="text-white drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-1">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">{item.label}</span>
                                <span className="font-mono text-[8px] opacity-20">00{i + 1}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <NoiseOverlay />

                        {/* Close button */}
                        <button
                            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-[110] cursor-pointer"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation */}
                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-nomad-pink transition-all z-[110] cursor-pointer p-2 md:p-4"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <ChevronLeft size={48} strokeWidth={1} />
                        </button>
                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-nomad-pink transition-all z-[110] cursor-pointer p-2 md:p-4"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <ChevronRight size={48} strokeWidth={1} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            className="relative w-full h-full max-w-6xl max-h-[80vh] flex flex-col items-center justify-center gap-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={images[selectedIndex].src}
                                    alt={images[selectedIndex].label}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>

                            <div className="flex flex-col items-center gap-2 text-center">
                                <span className="font-display font-black text-2xl md:text-4xl uppercase tracking-tighter text-white">
                                    {images[selectedIndex].label}
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-nomad-pink">
                                    Archive 00{selectedIndex + 1}
                                </span>
                            </div>
                        </motion.div>

                        {/* Aesthetic Scroll Indicator */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-[110]">
                            {images.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-[1px] transition-all duration-500 ${i === selectedIndex ? "w-8 bg-nomad-pink" : "w-4 bg-white/10"}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
