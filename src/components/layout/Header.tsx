"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";

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
                            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-nomad-pink transition-all">À Propos</Link>
                            <Link href="/music" onClick={() => setIsMenuOpen(false)} className="hover:text-nomad-pink transition-all">Musique</Link>
                            <Link href="/galerie" onClick={() => setIsMenuOpen(false)} className="hover:text-nomad-pink transition-all">Galerie</Link>
                            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-nomad-pink transition-all text-nomad-pink">Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header Mobile First */}
            <nav className="fixed top-0 left-0 w-full p-6 md:p-10 z-[95] flex justify-between items-start md:items-center mix-blend-difference pointer-events-none">

                {/* Logo Top Left - Hidden on Home since it's above the title now */}
                <div className={`pointer-events-auto relative w-16 h-16 md:w-24 md:h-24 -mt-2 md:-mt-4 -ml-1 md:-ml-2 transition-opacity duration-500 ${isHome ? "opacity-0 invisible" : "opacity-100"}`}>
                    <Link href="/">
                        <Image
                            src="/nomad-removebg-preview.png"
                            alt="Logo Nomad"
                            fill
                            className="object-contain [filter:brightness(0)_invert(1)_drop-shadow(0_0_1px_rgba(255,255,255,0.5))]"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav Right */}
                <div className="hidden md:flex pointer-events-auto gap-6 text-xs font-mono tracking-widest uppercase">
                    <Link href="/about" className="hover:text-nomad-pink transition-colors">À Propos</Link>
                    <Link href="/music" className="hover:text-nomad-pink transition-colors">Musique</Link>
                    <Link href="/galerie" className="hover:text-nomad-pink transition-colors">Galerie</Link>
                    <Link href="/contact" className="hover:text-nomad-pink transition-colors">Contact</Link>
                </div>

                {/* Mobile Hamburger Icon */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden pointer-events-auto w-10 h-10 flex flex-col items-end justify-center gap-2 z-[95] mix-blend-difference"
                >
                    <span className={`block w-8 h-[2px] bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-[10px]" : ""}`} />
                    <span className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-8 h-[2px] bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[10px]" : ""}`} />
                </button>
            </nav>
        </>
    );
}
