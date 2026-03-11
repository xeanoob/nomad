"use client";

import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { sendContactEmail } from "@/app/actions/contact";
import { ArrowRight, Zap, Mail, Calendar, MapPin, MessageSquare } from "lucide-react";
import { useState, useCallback } from "react";

export default function BookingPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = useCallback(async (formData: FormData) => {
        setIsSubmitting(true);
        const res = await sendContactEmail(formData);
        setIsSubmitting(false);
        if (res.success) {
            setIsSuccess(true);
        } else {
            alert(`Une erreur est survenue : ${res.error || "Erreur inconnue"}`);
        }
    }, []);

    return (
        <main className="relative w-full bg-black text-white selection:bg-nomad-pink/30">
            <NoiseOverlay />

            {/* Global Ambient Glow */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none select-none z-0">
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[80vw] h-[80vw] bg-nomad-pink/[0.03] blur-[150px] rounded-full animate-ambient-pulse" />
            </div>

            {/* HERO */}
            <section className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 sm:px-12 md:px-24 z-10 bg-black">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6"
                    >
                        <h1 className="font-display font-black text-[18vw] sm:text-[14vw] md:text-8xl lg:text-[12vw] uppercase leading-[0.8] tracking-tighter">
                            Booking.
                        </h1>
                        <div className="w-12 h-[2px] bg-nomad-pink" />
                    </motion.div>
                </div>
            </section>

            {/* SLIDING CONTENT LAYER */}
            <div className="relative z-20 bg-black border-t border-white/10 pt-32 pb-48 px-6 sm:px-12 md:px-24 shadow-[0_-30px_60px_rgba(0,0,0,0.9)]">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-24 items-start">
                        
                        {/* Information Column */}
                        <div className="flex flex-col gap-16 lg:sticky lg:top-32">
                            <section className="flex flex-col gap-10">
                                <div className="flex items-center gap-4 text-nomad-pink">
                                    <Mail size={16} className="animate-pulse" />
                                    <span className="font-mono text-[10px] uppercase tracking-[0.6em]">Inquiries</span>
                                </div>
                                <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9]">
                                    Direct <br />Access.
                                </h2>
                                <p className="font-sans font-light text-xl text-white/50 leading-relaxed max-w-md">
                                    Pour les festivals, clubs et événements privés. NOMAD propose une immersion sonore sans compromis, de la Deep Tech à la House organique.
                                </p>
                            </section>

                            <div className="group relative p-8 md:p-10 bg-white/[0.02] border border-white/5 overflow-hidden transition-all hover:bg-white/[0.04]">
                                <div className="absolute top-0 left-0 w-px h-full bg-nomad-pink/20 group-hover:bg-nomad-pink transition-colors" />
                                <p className="font-mono text-[8px] uppercase tracking-widest text-white/20 mb-4">Management Contact</p>
                                <a 
                                    href="mailto:contactpro.nomad@gmail.com" 
                                    className="font-display font-black text-[min(4.2vw,16px)] sm:text-2xl lg:text-3xl hover:text-nomad-pink transition-colors block md:overflow-visible md:whitespace-normal"
                                >
                                    CONTACTPRO.NOMAD@GMAIL.COM
                                </a>
                            </div>

                            <div className="flex flex-col gap-4 opacity-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-white" />
                                    <span className="font-mono text-[8px] uppercase tracking-widest">Response_Time: &lt; 48H</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-white" />
                                    <span className="font-mono text-[8px] uppercase tracking-widest">Global_Operations: Active</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="relative">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white/[0.02] border border-white/5 p-16 text-center backdrop-blur-md"
                                >
                                    <Zap size={48} className="text-nomad-pink mx-auto mb-8 animate-pulse" />
                                    <h3 className="font-display font-black text-4xl uppercase tracking-tighter mb-6">Transmis_</h3>
                                    <p className="font-sans font-light text-white/40 mb-10 text-lg">Votre demande est en cours de traitement par notre unité de management.</p>
                                    <button 
                                        onClick={() => setIsSuccess(false)} 
                                        className="font-mono text-[10px] uppercase tracking-[0.4em] text-nomad-pink hover:text-white transition-colors"
                                    >
                                        [ Envoyer un nouveau signal ]
                                    </button>
                                </motion.div>
                            ) : (
                                <form action={handleSubmit} className="flex flex-col gap-12 bg-white/[0.01] border border-white/5 p-8 md:p-12 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Zap size={80} strokeWidth={0.5} />
                                    </div>
                                    
                                    <div className="flex flex-col gap-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="flex flex-col gap-3 group/field">
                                                <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 group-focus-within/field:text-nomad-pink transition-colors px-1">Structure_Nom</label>
                                                <input name="name" type="text" required className="bg-transparent border-b border-white/10 py-4 font-sans text-xl focus:outline-none focus:border-nomad-pink transition-all placeholder:text-white/5" placeholder="Nom de l'organisation" />
                                            </div>
                                            <div className="flex flex-col gap-3 group/field">
                                                <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 group-focus-within/field:text-nomad-pink transition-colors px-1">Email_Contact</label>
                                                <input name="email" type="email" required className="bg-transparent border-b border-white/10 py-4 font-sans text-xl focus:outline-none focus:border-nomad-pink transition-all placeholder:text-white/5" placeholder="email@exemple.com" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="flex flex-col gap-3 group/field">
                                                <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 group-focus-within/field:text-nomad-pink transition-colors px-1">Date_Prévue</label>
                                                <div className="relative">
                                                    <Calendar size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/10" />
                                                    <input name="date" type="text" required placeholder="JJ / MM / AAAA" className="w-full bg-transparent border-b border-white/10 py-4 font-sans text-xl focus:outline-none focus:border-nomad-pink transition-all placeholder:text-white/5" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 group/field">
                                                <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 group-focus-within/field:text-nomad-pink transition-colors px-1">Localisation</label>
                                                <div className="relative">
                                                    <MapPin size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/10" />
                                                    <input name="location" type="text" required className="w-full bg-transparent border-b border-white/10 py-4 font-sans text-xl focus:outline-none focus:border-nomad-pink transition-all placeholder:text-white/5" placeholder="Ville, Pays" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 group/field">
                                            <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 group-focus-within/field:text-nomad-pink transition-colors px-1">Détails_Projet</label>
                                            <div className="relative">
                                                <MessageSquare size={14} className="absolute right-0 top-6 text-white/10" />
                                                <textarea name="message" rows={4} className="w-full bg-transparent border-b border-white/10 py-4 font-sans text-xl focus:outline-none focus:border-nomad-pink transition-all resize-none placeholder:text-white/5" placeholder="Parle-nous de ton événement..." />
                                            </div>
                                        </div>
                                    </div>

                                    <input type="hidden" name="subject" value="Booking Request" />

                                    <button 
                                        disabled={isSubmitting} 
                                        className="group relative w-full bg-white text-black py-8 font-display font-black text-2xl uppercase tracking-tighter overflow-hidden hover:text-white transition-all duration-500 ease-[0.16, 1, 0.3, 1] mt-8 outline-none"
                                    >
                                        <div className="absolute inset-0 bg-nomad-pink translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                                        <span className="relative z-10 flex items-center justify-center gap-6">
                                            {isSubmitting ? "TRANSMISSION..." : "Initialiser le Contact"}
                                            {!isSubmitting && <ArrowRight size={24} className="group-hover:translate-x-4 transition-transform duration-500" />}
                                        </span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Footer Meta */}
                    <div className="pt-48 flex flex-col md:flex-row justify-between border-t border-white/5 gap-8 opacity-20">
                        <div className="flex flex-col gap-2 font-mono text-[8px] uppercase tracking-[0.3em]">
                            <span>INQUIRY_UNIT — 04</span>
                            <span>ENCRYPTION: AES-256</span>
                        </div>
                        <div className="flex flex-col gap-2 font-mono text-[8px] uppercase tracking-[0.3em] text-right">
                             <span>TRANSMISSION: READY</span>
                             <span>© 2026 NOMAD PROJECT</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
