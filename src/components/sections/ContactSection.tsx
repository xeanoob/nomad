"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Music2 } from "lucide-react";
import { useState } from "react";
import { subscribeNewsletter } from "@/app/actions/contact";

export function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    return (
        <section id="contact" className="relative w-full bg-transparent py-32 px-4 sm:px-8 text-foreground">
            <div className="mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl uppercase">
                        Rejoindre la Crue
                    </h2>
                    <p className="mt-4 text-base text-white/60 font-light max-w-xl mx-auto">
                        Inscrivez-vous pour être les premiers informés de nos événements secrets et de nos nouvelles sessions. Pas de spam, juste l&apos;essentiel.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-black/50 p-8 md:p-12 backdrop-blur-md"
                >
                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-12 flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-full bg-nomad-pink/20 flex items-center justify-center text-nomad-pink">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white uppercase">Bienvenue dans la Crue</h3>
                            <p className="text-white/60 text-center">Votre email a été ajouté à notre liste de diffusion prioritaire.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-4 text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer"
                            >
                                Retour
                            </button>
                        </motion.div>
                    ) : (
                        <form
                            className="flex flex-col gap-8 text-left"
                            action={async (formData) => {
                                setStatus("loading");
                                const email = formData.get("email") as string;
                                const res = await subscribeNewsletter(email);
                                if (res.success) {
                                    setStatus("success");
                                    setTimeout(() => setStatus("idle"), 5000);
                                } else {
                                    setStatus("idle");
                                    alert("Une erreur est survenue.");
                                }
                            }}
                        >
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium tracking-wide text-white/50 uppercase">
                                    Email
                                </label>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="flex-1 border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder-white/20 transition-colors focus:border-nomad-pink focus:outline-none text-lg selection:bg-nomad-pink/30"
                                        placeholder="votre-email@domaine.com"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-white border border-transparent hover:border-white disabled:opacity-50 whitespace-nowrap cursor-pointer"
                                    >
                                        <span className="relative z-10 transition-colors group-hover:text-white">
                                            {status === "loading" ? "Envoi..." : "Rejoindre"}
                                        </span>
                                        <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-nomad-pink transition-transform duration-300 ease-out group-hover:translate-y-0" />
                                    </button>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5 flex flex-col gap-4 text-center">
                                <p className="text-xs text-white/30 uppercase tracking-[0.2em]">Pour toute demande de booking</p>
                                <a href="/booking" className="text-sm md:text-base font-mono text-white/60 hover:text-nomad-pink transition-colors cursor-pointer tracking-tight underline">ACCÉDER AU BOOKING</a>
                            </div>
                        </form>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-20 flex justify-center gap-8"
                >
                    <a href="https://instagram.com/nomadcrue" target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-nomad-pink cursor-pointer">
                        <Instagram size={28} />
                    </a>
                    <a href="https://soundcloud.com/nomadcrue" target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-nomad-pink cursor-pointer">
                        <Music2 size={28} />
                    </a>
                    <a href="mailto:contactpro.nomad@gmail.com" className="text-white/50 transition-colors hover:text-nomad-pink cursor-pointer">
                        <Mail size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
