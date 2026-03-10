"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Simulate loading time 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative w-full max-w-[100vw] overflow-x-hidden bg-black text-white pb-20 md:pb-32">

      {/* SPLASH SCREEN - Sunset Experience */}
      <AnimatePresence>
        {isLoading && (
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

      <NoiseOverlay />

      {/* Global Sunset Glow Blob - Mobile scaling */}
      <div className="fixed top-1/4 md:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] bg-nomad-pink opacity-20 md:opacity-[0.10] blur-[80px] md:blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      {/* Desktop Bottom Corners */}
      <div className="hidden md:block fixed bottom-10 left-10 pointer-events-auto text-xs font-mono tracking-widest uppercase opacity-50 z-50 mix-blend-difference">
        Défiler pour explorer
      </div>
      <div className="hidden md:flex fixed bottom-10 right-10 pointer-events-auto gap-6 text-xs font-mono tracking-widest uppercase z-50 mix-blend-difference">
        <a href="https://instagram.com/nomadcrue" target="_blank" rel="noopener noreferrer" className="hover:text-nomad-pink transition-colors">IG</a>
      </div>

      {/* HERO - Mobile First Typography */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden z-10 px-6">

        {/* The Title is the anchor - perfectly centered */}
        <div className="relative flex flex-col items-center justify-center pt-4 md:pt-32">

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
            className="absolute bottom-full mb-8 md:mb-12 w-20 h-20 md:w-32 md:h-32"
          >
            <Image
              src="/nomad-removebg-preview.png"
              alt="Nomad Logo"
              fill
              className="object-contain [filter:brightness(0)_invert(1)_drop-shadow(0_0_15px_rgba(0,0,0,0.5))]"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
            className="font-display font-black text-[18vw] sm:text-[20vw] md:text-[min(22vw,320px)] leading-[0.85] tracking-tighter uppercase whitespace-nowrap"
          >
            NOMAD
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute top-full mt-12 flex flex-col items-center gap-5"
          >
            <p className="font-sans font-light text-sm md:text-base text-white/50 text-center tracking-wide mb-2">
              Collectif House Music & Événementiel
            </p>
            
            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/music" 
                className="px-8 py-3 bg-nomad-pink/10 border border-nomad-pink/50 text-white font-mono text-xs tracking-widest uppercase hover:bg-nomad-pink/20 transition-colors"
              >
                Écouter nos sets
              </Link>
              <a 
                href="mailto:contactpro.nomad@gmail.com" 
                className="px-8 py-3 border border-white/20 text-white font-mono text-xs tracking-widest uppercase hover:border-white/50 transition-colors"
              >
                Booking / Contact
              </a>
            </div>

            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.6em] opacity-40 mt-4">Orléans — Global</span>
          </motion.div>
        </div>
      </section>

      {/* NEW CONTENT: PHILOSOPHY/VISION */}
      <section className="relative w-full py-24 md:py-48 px-6 md:px-24 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center p-12"
          >
            <div className="absolute inset-0 bg-nomad-pink/5 blur-[80px]" />
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-20 text-center">[ Énergie Visuelle ]</div>
          </motion.div>

          <div className="flex flex-col gap-8 md:gap-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-4xl md:text-6xl uppercase leading-none"
            >
              La vision<br />derrière le son.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans font-light text-xl md:text-3xl leading-relaxed text-white/70"
            >
              Plus qu&apos;une série de morceaux, NOMAD est une exploration des textures sonores. Nous sculptons chaque set pour transformer le dancefloor en une expérience immersive, loin des standards classiques.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mobile Footer Links */}
      <div className="md:hidden w-full flex justify-between px-6 py-12 text-[10px] font-mono tracking-widest uppercase opacity-30">
        <a href="https://instagram.com/nomadcrue" target="_blank" rel="noopener noreferrer">Instagram</a>
        <span className="opacity-20">—</span>
        <span>Orléans</span>
      </div>

    </div>
  );
}
