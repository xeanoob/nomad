"use client";

import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { sendContactEmail } from "@/app/actions/contact";
import { ArrowRight, Zap } from "lucide-react";
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
        <div className="relative w-full min-h-screen bg-black text-white pt-40 pb-32 px-6 md:px-24 overflow-x-hidden">
            <NoiseOverlay />

            {/* Background Texture - Simplified */}
            <div className="fixed top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nomad-pink blur-[180px] rounded-full opacity-10" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-24">

                {/* Header Section - Cleaned up to avoid overlap */}
                <div className="max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-nomad-pink text-[10px] uppercase tracking-[0.5em] block mb-6 px-1"
                    >
                        Professional Inquiries
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display font-black text-6xl md:text-8xl lg:text-[10vw] uppercase leading-[0.85] tracking-tighter"
                    >
                        Booking.
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left Column - Simplified Info */}
                    <div className="flex flex-col gap-12 w-full">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-display font-bold text-3xl uppercase tracking-tight">Direct Access</h2>
                            <p className="font-sans text-white/50 leading-relaxed text-lg max-w-md">
                                Pour les festivals, clubs et événements. NOMAD propose une curation sonore immersive allant de la Deep Tech à la House organique.
                            </p>
                        </div>

                        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-sm w-full">
                            <p className="font-mono text-[9px] uppercase tracking-widest text-nomad-pink mb-3">Management Direct</p>
                            <a href="mailto:contactpro.nomad@gmail.com" className="font-display font-black text-base sm:text-lg md:text-xl lg:text-[1.3rem] hover:text-nomad-pink transition-colors cursor-pointer block truncate">
                                CONTACTPRO.NOMAD@GMAIL.COM
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Refined Form */}
                    <div className="relative">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white/5 border border-white/10 p-12 rounded-sm text-center backdrop-blur-sm"
                            >
                                <Zap size={40} className="text-nomad-pink mx-auto mb-6" />
                                <h3 className="font-display font-black text-3xl uppercase mb-4">Message Envoyé.</h3>
                                <p className="text-white/60 mb-8 font-sans">Nous reviendrons vers vous sous 48h.</p>
                                <button onClick={() => setIsSuccess(false)} className="font-mono text-[10px] uppercase tracking-widest text-nomad-pink hover:underline cursor-pointer">Envoyer un autre message</button>
                            </motion.div>
                        ) : (
                            <form action={handleSubmit} className="flex flex-col gap-8 bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-sm">
                                <div className="space-y-8">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 px-1">Structure / Nom</label>
                                        <input name="name" type="text" required className="w-full bg-transparent border-b border-white/10 py-3 font-sans text-lg focus:outline-none focus:border-nomad-pink transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 px-1">Email</label>
                                        <input name="email" type="email" required className="w-full bg-transparent border-b border-white/10 py-3 font-sans text-lg focus:outline-none focus:border-nomad-pink transition-all" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="flex flex-col gap-2">
                                            <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 px-1">Date</label>
                                            <input name="date" type="text" required placeholder="JJ/MM/AA" className="w-full bg-transparent border-b border-white/10 py-3 font-sans text-lg focus:outline-none focus:border-nomad-pink transition-all ml-0" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 px-1">Lieu</label>
                                            <input name="location" type="text" required className="w-full bg-transparent border-b border-white/10 py-3 font-sans text-lg focus:outline-none focus:border-nomad-pink transition-all" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 px-1">Détails</label>
                                        <textarea name="message" rows={3} className="w-full bg-transparent border-b border-white/10 py-3 font-sans text-lg focus:outline-none focus:border-nomad-pink transition-all resize-none" />
                                    </div>
                                </div>

                                <input type="hidden" name="subject" value="Booking Request" />

                                <button disabled={isSubmitting} className="group relative w-full bg-white text-black py-6 font-display font-black text-xl uppercase tracking-tighter overflow-hidden hover:text-white transition-colors cursor-pointer mt-4">
                                    <div className="absolute inset-0 bg-nomad-pink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        {isSubmitting ? "ENVOI..." : "Envoyer la demande"}
                                        {!isSubmitting && <ArrowRight size={20} />}
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
