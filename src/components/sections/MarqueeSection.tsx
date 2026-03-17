import { motion } from "framer-motion";

export function MarqueeSection() {
    const marqueeVariant = {
        animate: {
            x: ["0%", "-50%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: 30,
                    ease: "linear" as const,
                },
            },
        },
    };

    const marqueeVariantReverse = {
        animate: {
            x: ["-50%", "0%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: 30,
                    ease: "linear" as const,
                },
            },
        },
    };

    return (
        <section className="relative w-full py-20 bg-black z-20 overflow-x-hidden bg-gradient-to-b from-transparent via-nomad-blue/5 to-transparent">
            <div className="flex flex-col justify-center gap-4 md:gap-8">
                {/* Marquee Line 1 */}
                <div className="flex whitespace-nowrap overflow-hidden">
                    <motion.div 
                        variants={marqueeVariant}
                        animate="animate"
                        className="flex items-center gap-8 shrink-0"
                    >
                        {[...Array(8)].map((_, i) => (
                            <h2 key={`m1-${i}`} className="font-display font-medium text-6xl md:text-[8vw] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
                                IMMERSIVE SOUNDSCAPES <span className="text-nomad-blue/40 mx-4">✦</span>
                            </h2>
                        ))}
                    </motion.div>
                </div>

                {/* Marquee Line 2 */}
                <div className="flex whitespace-nowrap overflow-hidden">
                    <motion.div 
                        variants={marqueeVariantReverse}
                        animate="animate"
                        className="flex items-center gap-8 shrink-0"
                    >
                        {[...Array(8)].map((_, i) => (
                            <h2 key={`m2-${i}`} className="font-display font-medium text-6xl md:text-[8vw] uppercase leading-none text-white">
                                NO SLEEP CLUB <span className="text-nomad-blue mx-4">✦</span> ORLÉANS
                            </h2>
                        ))}
                    </motion.div>
                </div>

                {/* Marquee Line 3 */}
                <div className="flex whitespace-nowrap overflow-hidden">
                    <motion.div 
                        variants={marqueeVariant}
                        animate="animate"
                        className="flex items-center gap-8 shrink-0"
                    >
                        {[...Array(8)].map((_, i) => (
                            <h2 key={`m3-${i}`} className="font-display font-medium text-6xl md:text-[8vw] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
                                BEYOND THE DECKS <span className="text-nomad-blue/40 mx-4">✦</span> 
                            </h2>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
