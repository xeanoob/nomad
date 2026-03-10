"use client";

import { motion, useScroll } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { useRef, useEffect, useState } from "react";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Initial loading state managed by SplashScreen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // User requested 1.5s

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative w-full max-w-[100vw] overflow-x-hidden bg-black text-white pb-20 md:pb-32">
      <SplashScreen isVisible={isLoading} />

      <NoiseOverlay />

      {/* Global Background Glows - Increased intensity for visibility */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] bg-nomad-pink opacity-[0.12] blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[80%] left-1/4 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-nomad-pink opacity-[0.10] blur-[120px] rounded-full mix-blend-screen" />
      </div>


      {/* Structured Sections */}
      <HeroSection />
      <ConceptSection />
      <ContactSection />

      {/* Mobile Footer Links */}
      <div className="md:hidden w-full flex justify-between px-6 py-12 text-[10px] font-mono tracking-widest uppercase opacity-30">
        <a href="https://instagram.com/nomadcrue" target="_blank" rel="noopener noreferrer">Instagram</a>
        <span className="opacity-20">—</span>
        <span>Orléans</span>
      </div>
    </div>
  );
}
