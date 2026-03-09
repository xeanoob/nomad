"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Music2 } from "lucide-react";

export function ContactSection() {
    return (
        <section className="relative w-full bg-nomad-dark py-32 px-4 sm:px-8 text-foreground">
            <div className="mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl uppercase">
                        Prenez le contrôle <br /> de la nuit
                    </h2>
                    <p className="mt-6 text-lg text-white/60 font-light">
                        Prêts à faire vibrer votre prochain événement ? Discutons de votre scène.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-md"
                >
                    <form className="flex flex-col gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium tracking-wide text-white/50 uppercase">
                                Nom / Organisation
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border-b border-white/20 bg-transparent px-0 py-2 text-white placeholder-white/20 transition-colors focus:border-nomad-pink focus:outline-none"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium tracking-wide text-white/50 uppercase">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border-b border-white/20 bg-transparent px-0 py-2 text-white placeholder-white/20 transition-colors focus:border-nomad-pink focus:outline-none"
                                placeholder="hello@exemple.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium tracking-wide text-white/50 uppercase">
                                Projet / Date
                            </label>
                            <textarea
                                id="message"
                                rows={3}
                                className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-2 text-white placeholder-white/20 transition-colors focus:border-nomad-pink focus:outline-none"
                                placeholder="Parlez-nous de l'événement..."
                            />
                        </div>

                        <button className="group relative mt-4 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-white border border-transparent hover:border-white">
                            <span className="relative z-10 transition-colors group-hover:text-white">Envoyer la demande</span>
                            <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-nomad-pink transition-transform duration-300 ease-out group-hover:translate-y-0" />
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-20 flex justify-center gap-8"
                >
                    <a href="#" className="text-white/50 transition-colors hover:text-nomad-pink">
                        <Instagram size={28} />
                    </a>
                    <a href="#" className="text-white/50 transition-colors hover:text-nomad-pink">
                        <Music2 size={28} />
                    </a>
                    <a href="mailto:contact@nomaddjs.com" className="text-white/50 transition-colors hover:text-nomad-pink">
                        <Mail size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
