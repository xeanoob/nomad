"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { scrollY } = useScroll();

    // Scroll-linked dynamic header styling
    const headerBg = useTransform(
        scrollY,
        [0, 50],
        ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)"]
    );

    const headerBlur = useTransform(
        scrollY,
        [0, 50],
        ["blur(0px)", "blur(12px)"]
    );

    const headerBorder = useTransform(
        scrollY,
        [0, 50],
        ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.1)"]
    );

    const headerY = useTransform(
        scrollY,
        [0, 50],
        [32, 16] // Starts at y=32 and drops to y=16 (tighter to the top) 
    );

    return (
        <>
            {/* MOBILE FULLSCREEN MENU OVERLAY */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col gap-10 md:gap-12 text-center font-display font-medium text-4xl sm:text-5xl uppercase tracking-tighter">
                            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-nomad-champagne transition-all cursor-pointer">À Propos</Link>
                            <Link href="/music" onClick={() => setIsMenuOpen(false)} className="hover:text-nomad-champagne transition-all cursor-pointer">Musique</Link>
                            <Link href="/galerie" onClick={() => setIsMenuOpen(false)} className="hover:text-nomad-champagne transition-all cursor-pointer">Galerie</Link>
                            <Link
                                href="/booking"
                                onClick={() => setIsMenuOpen(false)}
                                className={`px-8 py-3 border border-nomad-champagne/40 rounded-full transition-all cursor-pointer ${pathname === '/booking'
                                    ? 'bg-nomad-champagne text-black'
                                    : 'text-nomad-champagne hover:bg-nomad-champagne hover:text-black'
                                    }`}
                            >
                                Booking
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header / HUD - Now Fixed and Reactive */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
                style={{
                    backgroundColor: headerBg,
                    backdropFilter: headerBlur,
                    border: headerBorder,
                    y: headerY,
                    x: "-50%"
                }}
                className="fixed top-0 left-1/2 w-[95%] max-w-6xl h-16 md:h-20 z-[95] mix-blend-normal pointer-events-none flex items-center justify-between px-8 rounded-full transition-shadow duration-300"
            >
                {/* Logo Section */}
                <div className="pointer-events-auto flex items-center gap-6">
                    <Link href="/" className="relative w-8 h-8 md:w-12 md:h-12 transition-transform active:scale-95">
                        <Image
                            src="/nomad.png"
                            alt="Logo Nomad"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                    <div className="hidden sm:block w-[1px] h-6 bg-white/10" />
                    <div className="flex flex-col">
                        <span className="font-logo text-lg leading-none tracking-tighter font-bold">NOMAD</span>
                        <span className="font-logo text-[8px] uppercase tracking-[0.3em] text-white/40">Collective</span>
                    </div>
                </div>

                {/* Desktop Nav Center */}
                <div className="hidden md:flex pointer-events-auto gap-16 items-center text-[8px] md:text-[9px] font-logo font-light tracking-[0.6em] uppercase">
                    <Link href="/about" className="text-white/20 hover:text-nomad-ice transition-colors cursor-pointer">À Propos</Link>
                    <Link href="/music" className="text-white/20 hover:text-nomad-ice transition-colors cursor-pointer">Musique</Link>
                    <Link href="/galerie" className="text-white/20 hover:text-nomad-ice transition-colors cursor-pointer">Galerie</Link>
                </div>

                {/* Action Right */}
                <div className="pointer-events-auto flex items-center gap-10">
                    <Link
                        href="/booking"
                        className={`hidden sm:flex px-8 py-2 md:px-10 md:py-2.5 rounded-full text-[8px] font-logo font-light tracking-[0.4em] transition-all border border-nomad-blue/20 hover:bg-nomad-blue hover:text-white ${pathname === '/booking' ? 'bg-nomad-blue text-white' : 'text-nomad-blue/40'}`}
                    >
                        BOOKING
                    </Link>

                    {/* Mobile Hamburger Icon */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Ouvrir le menu"
                        className="md:hidden w-10 h-10 flex flex-col items-end justify-center gap-2 cursor-pointer group"
                    >
                        <span className={`block w-6 h-[2px] bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-[6px] w-8" : "group-hover:w-8 w-5"}`} />
                        <span className={`block w-6 h-[2px] bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-[6px] w-8" : "group-hover:w-5 w-8"}`} />
                    </button>
                </div>
            </motion.nav>
        </>
    );
}
