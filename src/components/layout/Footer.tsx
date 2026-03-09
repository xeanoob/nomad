"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/5 pt-24 pb-12 px-6 md:px-24 flex flex-col items-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

                {/* Branding */}
                <div className="flex flex-col gap-6">
                    <div className="relative w-24 h-24 -ml-2">
                        <Image
                            src="/nomad-removebg-preview.png"
                            alt="Nomad Logo"
                            fill
                            className="object-contain [filter:brightness(0)_invert(1)]"
                        />
                    </div>
                    <p className="font-sans font-light text-sm text-white/40 max-w-[200px] leading-relaxed">
                        Exploration des textures profondes de la House Music. Basé à Orléans.
                    </p>
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-30">Exploration</span>
                        <Link href="/" className="font-sans text-sm hover:text-nomad-pink transition-colors">Accueil</Link>
                        <Link href="/about" className="font-sans text-sm hover:text-nomad-pink transition-colors">À Propos</Link>
                        <Link href="/music" className="font-sans text-sm hover:text-nomad-pink transition-colors">Musique</Link>
                        <Link href="/galerie" className="font-sans text-sm hover:text-nomad-pink transition-colors">Galerie</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-30">Social & Légal</span>
                        <a href="https://instagram.com/nomadcrue" target="_blank" rel="noopener noreferrer" className="font-sans text-sm hover:text-nomad-pink transition-colors">Instagram</a>
                        <Link href="/confidentialite" className="font-sans text-sm hover:text-nomad-pink transition-colors">Confidentialité</Link>
                        <Link href="/cgu" className="font-sans text-sm hover:text-nomad-pink transition-colors">CGU</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-30">Contact</span>
                        <a href="mailto:contactpro.nomad@gmail.com" className="font-sans text-sm hover:text-nomad-pink transition-colors break-all">contactpro.nomad@gmail.com</a>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-center text-[10px] font-mono uppercase tracking-[0.2em] opacity-30">
                <span>© 2026 NOMAD MUSIC</span>
            </div>
        </footer>
    );
}
