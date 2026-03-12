"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden px-6">
            {/* Ambient Ambient Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nomad-pink/10 blur-[120px] rounded-full animate-ambient-pulse" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center gap-12">
                <div className="flex flex-col gap-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.4, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-mono text-[10px] uppercase tracking-[1em] text-white"
                    >
                        Erreur_404
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter text-white"
                    >
                        Vous vous êtes perdu <br />
                        <span className="text-mask bg-gradient-to-r from-nomad-pink to-nomad-sunset">dans la nuit</span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-sans font-light text-xl text-white/60 max-w-md"
                >
                    L'obscurité est profonde ici. Rentrez à la source pour retrouver le rythme.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Link 
                        href="/" 
                        className="group relative px-10 py-4 glass rounded-full overflow-hidden flex items-center gap-4 active:scale-95 transition-transform"
                    >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white">Retour au Bercail</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
