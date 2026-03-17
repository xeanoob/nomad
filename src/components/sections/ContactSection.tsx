"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Music2 } from "lucide-react";
import { useState } from "react";
import { subscribeNewsletter } from "@/app/actions/contact";

export function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    return (
        <section id="contact" className="relative w-full py-80 bg-transparent z-40 overflow-hidden px-6 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-32 items-start justify-between">
                
                {/* Form Side */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex flex-col gap-24"
                >
                    <div className="flex flex-col gap-12">
                        <h2 className="font-display font-medium text-6xl md:text-8xl uppercase leading-none tracking-[-0.05em]">
                            Let&apos;s <br />
                            <span className="italic opacity-20">Connect.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-10">
                            <label className="font-logo font-light text-[11px] md:text-[13px] uppercase tracking-[0.6em] text-white/40">L&apos;Identité</label>
                            <input 
                                type="text" 
                                placeholder="Nom & Prénom" 
                                className="bg-transparent border-b border-white/20 py-5 font-logo font-light text-[13px] md:text-[14px] tracking-[0.15em] text-white focus:outline-none focus:border-white transition-all duration-700 placeholder:text-white/10"
                            />
                            <input 
                                type="email" 
                                placeholder="Adresse Électronique" 
                                className="bg-transparent border-b border-white/20 py-5 font-logo font-light text-[13px] md:text-[14px] tracking-[0.15em] text-white focus:outline-none focus:border-white transition-all duration-700 placeholder:text-white/10"
                            />
                        </div>

                        <div className="flex flex-col gap-10">
                            <label className="font-logo font-light text-[11px] md:text-[13px] uppercase tracking-[0.6em] text-white/40">La Vision</label>
                            <textarea 
                                placeholder="Décrivez votre projet..." 
                                rows={4}
                                className="bg-transparent border-b border-white/20 py-5 font-logo font-light text-[13px] md:text-[14px] tracking-[0.15em] text-white focus:outline-none focus:border-white transition-all duration-700 resize-none placeholder:text-white/10"
                            />
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-12 py-5 px-16 border border-white/20 rounded-full font-logo font-light text-[11px] md:text-[12px] uppercase tracking-[0.4em] text-white/60 hover:bg-white hover:text-black hover:border-white transition-all duration-700"
                        >
                            Transmettre
                        </motion.button>
                    </div>
                </motion.div>

                {/* Info Columns */}
                <div className="w-full md:w-1/3 flex flex-col gap-24 md:pl-24 border-l border-white/5">
                    <div className="flex flex-col gap-10">
                        <span className="font-logo font-light text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-white/30">Bureau</span>
                        <div className="flex flex-col gap-4">
                            <p className="font-logo font-light text-[13px] md:text-[14px] tracking-widest text-white/80 uppercase">Orléans — FR</p>
                            <p className="font-logo font-light text-[11px] tracking-widest text-white/40">Expansion Européenne</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <span className="font-logo font-light text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-white/30">Direct</span>
                        <a href="mailto:hello@nomad-music.com" className="font-logo font-light text-[13px] md:text-[14px] tracking-widest text-white/60 hover:text-white transition-colors">
                            Hello@nomad-music.com
                        </a>
                    </div>

                    <div className="flex flex-col gap-10 mt-auto">
                        <span className="font-logo font-light text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-white/30">Digital</span>
                        <div className="flex flex-col gap-5">
                            {['Instagram', 'SoundCloud', 'Vimeo'].map((social) => (
                                <a key={social} href="#" className="font-logo font-light text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
