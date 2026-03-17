"use client";

import { motion } from "framer-motion";
import { sendContactEmail } from "@/app/actions/contact";
import { ArrowRight, Mail, Calendar, MapPin, MessageSquare } from "lucide-react";
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
        <main className="relative w-full bg-black text-white selection:bg-white/10">

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
                        <div className="w-12 h-[0.5px] bg-white/20" />
                    </motion.div>
                </div>
            </section>

            {/* SLIDING CONTENT LAYER */}
            <div className="relative z-20 bg-black border-t border-white/5 pt-32 pb-48 px-6 sm:px-12 md:px-24">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-24 items-start">
                        
                        {/* Information Column */}
                        <div className="flex flex-col gap-16 lg:sticky lg:top-32">
                            <section className="flex flex-col gap-10">
                                <div className="flex items-center gap-4 text-white/40">
                                    <Mail size={16} />
                                    <span className="font-logo text-[12px] uppercase tracking-[0.6em]">Inquiries</span>
                                </div>
                                <h2 className="font-display font-medium text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9]">
                                    Direct <br /><span className="italic opacity-30">Access.</span>
                                </h2>
                                <p className="font-logo font-light text-[15px] md:text-[17px] text-white/70 leading-[1.8] tracking-wide max-w-md">
                                    Pour les festivals, clubs et événements privés. NOMAD propose une immersion sonore sans compromis, de la Deep Tech à la House organique.
                                </p>
                            </section>

                            <div className="group relative p-8 md:p-10 border border-white/5 transition-all hover:bg-white/[0.02]">
                                <div className="absolute top-0 left-0 w-px h-full bg-white/20 group-hover:bg-white transition-colors" />
                                <p className="font-logo text-[10px] uppercase tracking-widest text-white/30 mb-4">Management Contact</p>
                                <a 
                                    href="mailto:contactpro.nomad@gmail.com" 
                                    className="font-display font-medium text-[min(4.2vw,18px)] sm:text-2xl lg:text-3xl hover:text-white transition-colors block tracking-tight"
                                >
                                    CONTACTPRO.NOMAD@GMAIL.COM
                                </a>
                            </div>

                            <div className="flex flex-col gap-4 opacity-30">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-white" />
                                    <span className="font-logo text-[10px] uppercase tracking-widest">Response_Time: &lt; 48H</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-white" />
                                    <span className="font-logo text-[10px] uppercase tracking-widest">Global_Operations: Active</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="relative">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="border border-white/5 p-16 text-center"
                                >
                                    <h3 className="font-display font-medium text-4xl uppercase tracking-tighter mb-6">Transmis_</h3>
                                    <p className="font-logo font-light text-white/60 mb-10 text-lg">Votre demande est en cours de traitement par notre unité de management.</p>
                                    <button 
                                        onClick={() => setIsSuccess(false)} 
                                        className="font-logo text-[11px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
                                    >
                                        [ Envoyer un nouveau signal ]
                                    </button>
                                </motion.div>
                            ) : (
                                <form action={handleSubmit} className="flex flex-col gap-12 bg-white/[0.01] border border-white/5 p-8 md:p-12 relative group">
                                    <div className="flex flex-col gap-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="flex flex-col gap-3 group/field">
                                                <label className="font-logo text-[11px] uppercase tracking-[0.3em] text-white/30 group-focus-within/field:text-white transition-colors px-1">Structure_Nom</label>
                                                <input name="name" type="text" required className="bg-transparent border-b border-white/20 py-4 font-logo font-light text-xl focus:outline-none focus:border-white transition-all placeholder:text-white/10" placeholder="Nom de l'organisation" />
                                            </div>
                                            <div className="flex flex-col gap-3 group/field">
                                                <label className="font-logo text-[11px] uppercase tracking-[0.3em] text-white/30 group-focus-within/field:text-white transition-colors px-1">Email_Contact</label>
                                                <input name="email" type="email" required className="bg-transparent border-b border-white/20 py-4 font-logo font-light text-xl focus:outline-none focus:border-white transition-all placeholder:text-white/10" placeholder="email@exemple.com" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="flex flex-col gap-3 group/field">
                                                <label className="font-logo text-[11px] uppercase tracking-[0.3em] text-white/30 group-focus-within/field:text-white transition-colors px-1">Date_Prévue</label>
                                                <div className="relative">
                                                    <Calendar size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/10" />
                                                    <input name="date" type="text" required placeholder="JJ / MM / AAAA" className="w-full bg-transparent border-b border-white/20 py-4 font-logo font-light text-xl focus:outline-none focus:border-white transition-all placeholder:text-white/10" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 group/field">
                                                <label className="font-logo text-[11px] uppercase tracking-[0.3em] text-white/30 group-focus-within/field:text-white transition-colors px-1">Localisation</label>
                                                <div className="relative">
                                                    <MapPin size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/10" />
                                                    <input name="location" type="text" required className="w-full bg-transparent border-b border-white/20 py-4 font-logo font-light text-xl focus:outline-none focus:border-white transition-all placeholder:text-white/10" placeholder="Ville, Pays" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 group/field">
                                            <label className="font-logo text-[11px] uppercase tracking-[0.3em] text-white/30 group-focus-within/field:text-white transition-colors px-1">Détails_Projet</label>
                                            <div className="relative">
                                                <MessageSquare size={14} className="absolute right-0 top-6 text-white/10" />
                                                <textarea name="message" rows={4} className="w-full bg-transparent border-b border-white/20 py-4 font-logo font-light text-xl focus:outline-none focus:border-white transition-all resize-none placeholder:text-white/10" placeholder="Parle-nous de ton événement..." />
                                            </div>
                                        </div>
                                    </div>

                                    <input type="hidden" name="subject" value="Booking Request" />

                                    <button 
                                        disabled={isSubmitting} 
                                        className="group relative w-full bg-white text-black py-8 font-display font-medium text-2xl uppercase tracking-tighter overflow-hidden hover:bg-white/90 transition-all duration-500 ease-[0.16, 1, 0.3, 1] mt-8 outline-none"
                                    >
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
                        <div className="flex flex-col gap-2 font-logo text-[9px] uppercase tracking-[0.3em]">
                            <span>INQUIRY_UNIT — 04</span>
                        </div>
                        <div className="flex flex-col gap-2 font-logo text-[9px] uppercase tracking-[0.3em] text-right">
                             <span>TRANSMISSION: READY</span>
                             <span>© 2026 NOMAD PROJECT</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
