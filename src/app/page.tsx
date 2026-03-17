"use client";

import { useRef, useEffect, useState } from "react";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if splash has already been shown in this session
    const hasShownSplash = sessionStorage.getItem("nomad_splash_shown");
    
    if (hasShownSplash) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("nomad_splash_shown", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main ref={containerRef} className="relative w-full bg-black text-white">
      <SplashScreen isVisible={isLoading} />

      {/* Structured Sections - NO TOP PADDING/MARGIN */}
      <HeroSection />
      <ConceptSection />
      <AboutSection />
      <ManifestoSection />
      <MarqueeSection />
      <ContactSection />

      {/* Mobile Footer Links */}
      <div className="md:hidden w-full flex justify-between px-6 py-12 text-[10px] font-logo tracking-[0.4em] uppercase opacity-30">
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <span className="opacity-20">—</span>
        <span>Orléans</span>
      </div>
    </main>
  );
}

// Missing import from previous logic? Added AboutSection back to flow.
import { AboutSection } from "@/components/sections/AboutSection";
