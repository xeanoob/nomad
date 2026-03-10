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

    // HUD Transition state based on scroll - CLAMPED to prevent scrolling off-screen
    const headerBg = useTransform(scrollY, [0, 50], ["rgba(0,0,0,0)", "rgba(0,0,0,0.4)"], { clamp: true });
    const headerBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"], { clamp: true });
    const headerBorder = useTransform(scrollY, [0, 50], ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.1)"], { clamp: true });
    const headerY = useTransform(scrollY, [0, 50], [32, 16], { clamp: true });

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
                        <div className="flex flex-col gap-10 md:gap-12 text-center font-display font-black text-4xl sm:text-5xl uppercase tracking-tighter">
                            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-nomad-pink transition-all cursor-pointer">À Propos</Link>
                            <Link href="/music" onClick={() => setIsMenuOpen(false)} className="hover:text-nomad-pink transition-all cursor-pointer">Musique</Link>
                            <Link href="/galerie" onClick={() => setIsMenuOpen(false)} className="hover:text-nomad-pink transition-all cursor-pointer">Galerie</Link>
                            <Link
                                href="/booking"
                                onClick={() => setIsMenuOpen(false)}
                                className={`px-8 py-3 border-2 border-nomad-pink rounded-full transition-all cursor-pointer ${pathname === '/booking'
                                    ? 'bg-nomad-pink text-black'
                                    : 'text-nomad-pink hover:bg-nomad-pink hover:text-black'
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
                style={{
                    backgroundColor: headerBg,
                    backdropFilter: headerBlur,
                    border: headerBorder,
                    x: "-50%",
                    y: headerY
                }}
                className="fixed top-0 left-1/2 w-[95%] max-w-6xl h-16 md:h-20 z-[95] mix-blend-normal pointer-events-none flex items-center justify-between px-8 rounded-full transition-shadow duration-300"
            >
                {/* Logo Section */}
                <div className="pointer-events-auto flex items-center gap-6">
                    <Link href="/" className="relative w-8 h-8 md:w-12 md:h-12 transition-transform active:scale-95">
                        <Image
                            src="/nomad-removebg-preview.png"
                            alt="Logo Nomad"
                            fill
                            className="object-contain [filter:brightness(0)_invert(1)]"
                            priority
                        />
                    </Link>
                    <div className="hidden sm:block w-[1px] h-6 bg-white/10" />
                    <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">Collective</span>
                </div>

                {/* Desktop Nav Center */}
                <div className="hidden md:flex pointer-events-auto gap-12 items-center text-[10px] font-mono tracking-[0.5em] uppercase">
                    <Link href="/about" className="hover:text-nomad-pink transition-colors cursor-pointer">À Propos</Link>
                    <Link href="/music" className="hover:text-nomad-pink transition-colors cursor-pointer">Musique</Link>
                    <Link href="/galerie" className="hover:text-nomad-pink transition-colors cursor-pointer">Galerie</Link>
                </div>

                {/* Action Right */}
                <div className="pointer-events-auto flex items-center gap-8">
                    <Link
                        href="/booking"
                        className={`hidden sm:flex px-6 py-2 md:px-8 md:py-3 rounded-full text-[10px] font-mono tracking-[0.3em] transition-all border border-white/15 hover:border-nomad-pink hover:bg-nomad-pink/10 ${pathname === '/booking' ? 'border-nomad-pink bg-nomad-pink/20' : ''}`}
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
