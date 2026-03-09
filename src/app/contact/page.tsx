"use client";

import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "booking", message: "" });

    return (
        <div className="relative w-full min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-24 flex flex-col items-center">
            <NoiseOverlay />

            {/* Background Glow */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-nomad-pink opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

            <section className="relative w-full max-w-2xl z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-4">Contact.</h1>
                    <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-40">Laisse un message pour entrer dans l&apos;orbite</p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full flex flex-col gap-8"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-[10px] uppercase tracking-widest opacity-30 px-1">Nom / Structure</label>
                            <input
                                type="text"
                                placeholder="..."
                                className="w-full bg-white/5 border border-white/10 p-4 md:p-6 font-sans text-lg focus:outline-none focus:border-nomad-pink focus:bg-white/10 transition-all rounded-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-[10px] uppercase tracking-widest opacity-30 px-1">Email</label>
                            <input
                                type="email"
                                placeholder="nom@mail.com"
                                className="w-full bg-white/5 border border-white/10 p-4 md:p-6 font-sans text-lg focus:outline-none focus:border-nomad-pink focus:bg-white/10 transition-all rounded-sm"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 relative">
                        <label className="font-mono text-[10px] uppercase tracking-widest opacity-30 px-1">Sujet</label>
                        <select className="w-full bg-white/5 border border-white/10 p-4 md:p-6 font-sans text-lg focus:outline-none focus:border-nomad-pink focus:bg-white/10 transition-all rounded-sm appearance-none text-white cursor-pointer">
                            <option value="booking" className="bg-black text-white">Booking / Performance</option>
                            <option value="press" className="bg-black text-white">Presse & Management</option>
                            <option value="inquiry" className="bg-black text-white">Autre Demande</option>
                        </select>
                        <div className="absolute right-6 bottom-6 pointer-events-none opacity-30">
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] uppercase tracking-widest opacity-30 px-1">Message</label>
                        <textarea
                            rows={6}
                            placeholder="Décris ton projet..."
                            className="w-full bg-white/5 border border-white/10 p-4 md:p-6 font-sans text-lg focus:outline-none focus:border-nomad-pink focus:bg-white/10 transition-all rounded-sm resize-none"
                        />
                    </div>

                    <button className="w-full group relative overflow-hidden bg-white text-black p-6 md:p-8 font-display font-black text-2xl uppercase tracking-tighter hover:text-white transition-colors duration-500">
                        <div className="absolute inset-0 bg-nomad-pink translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative z-10">Envoyer le message</span>
                    </button>
                </motion.form>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-32 border-t border-white/10 pt-16 w-full">
                    <div className="flex flex-col gap-4 overflow-hidden">
                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-30">Management / Direct</span>
                        <a href="mailto:contactpro.nomad@gmail.com" className="text-xl sm:text-2xl md:text-3xl font-display hover:text-nomad-pink transition-colors break-all md:break-normal">contactpro.nomad@gmail.com</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-30">Follow the Journey</span>
                        <div className="flex gap-8 text-xl sm:text-2xl md:text-3xl font-display">
                            <a href="https://instagram.com/nomadcrue" target="_blank" rel="noopener noreferrer" className="hover:text-nomad-pink transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
