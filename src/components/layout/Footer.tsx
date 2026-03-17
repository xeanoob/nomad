"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-transparent border-t border-white/5 pt-32 md:pt-64 pb-20 px-6 md:px-24 flex flex-col items-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

                {/* Branding */}
                <div className="flex flex-col gap-16 md:gap-24">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 grayscale invert brightness-200 opacity-20">
                        <Image
                            src="/nomad.png"
                            alt="Nomad Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 md:gap-32 w-full md:w-auto text-white">
                    <div className="flex flex-col gap-12">
                        <span className="font-logo text-[11px] md:text-[12px] uppercase tracking-[0.8em] text-white/40">Explorer</span>
                        <div className="flex flex-col gap-6">
                            {['Accueil', 'À Propos', 'Musique', 'Galerie', 'Booking'].map((item) => (
                                <Link 
                                    key={item}
                                    href={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`} 
                                    className="font-logo font-light text-[12px] md:text-[13px] text-white/60 hover:text-white transition-colors cursor-pointer uppercase tracking-[0.3em]"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-12">
                        <span className="font-logo text-[11px] md:text-[12px] uppercase tracking-[0.8em] text-white/40">Édition</span>
                        <div className="flex flex-col gap-6">
                            <a href="mailto:hello@nomad-music.com" className="font-logo font-light text-[11px] md:text-[12px] text-white/50 hover:text-white transition-colors tracking-[0.2em] uppercase">Hello@nomad-music.com</a>
                            <div className="flex flex-col gap-6">
                                <a href="#" className="font-logo font-light text-[12px] md:text-[13px] text-white/50 hover:text-white transition-colors uppercase tracking-[0.3em]">Instagram</a>
                                <a href="#" className="font-logo font-light text-[12px] md:text-[13px] text-white/50 hover:text-white transition-colors uppercase tracking-[0.3em]">Soundcloud</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto mt-12 md:mt-24 pt-8 border-t border-white/5 flex justify-center text-[11px] font-logo uppercase tracking-[0.4em] opacity-30 text-white">
                <span>© 2026 NOMAD MUSIC</span>
            </div>
        </footer>
    );
}
