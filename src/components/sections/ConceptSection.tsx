"use client";

import { motion } from "framer-motion";

export function ConceptSection() {
    return (
        <section className="relative w-full bg-nomad-dark py-32 px-4 sm:px-8 text-foreground z-10">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-glow text-4xl font-bold tracking-tight text-nomad-pink sm:text-6xl uppercase">
                        Au-delà du mix.
                        <br />
                        <span className="text-white">Une exploration sonore.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-nomad-pink/30 hover:bg-white/10"
                    >
                        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-nomad-pink opacity-20 blur-[50px] transition-all group-hover:opacity-40" />
                        <h3 className="mb-4 text-2xl font-bold text-white">Atmosphère</h3>
                        <p className="text-lg leading-relaxed text-white/70">
                            Nous ne faisons pas que jouer des morceaux, nous concevons des
                            atmosphères. Notre vision de la House est un voyage immersif où le
                            groove percutant rencontre une élégance sombre.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-nomad-sunset/30 hover:bg-white/10 mt-0 md:mt-16"
                    >
                        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-nomad-sunset opacity-20 blur-[50px] transition-all group-hover:opacity-40" />
                        <h3 className="mb-4 text-2xl font-bold text-white">Énergie</h3>
                        <p className="text-lg leading-relaxed text-white/70">
                            Chaque set est une histoire. Chaque nuit est unique. Une sélection
                            pointue pour créer une synergie physique et émotionnelle sur le
                            dancefloor.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
