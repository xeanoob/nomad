"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface StickyWrapperProps {
    children: (progress: MotionValue<number>) => ReactNode;
    height?: string; // e.g., "300vh" to control how long the section stays sticky
    className?: string;
}

export function StickyWrapper({ 
    children, 
    height = "300vh", 
    className = "" 
}: StickyWrapperProps) {
    // Le conteneur global qui définit la hauteur totale de scroll pour cette section
    const containerRef = useRef<HTMLDivElement>(null);

    // useScroll trace la progression de ce conteneur spécifique dans le viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // offset: 
        // "start start" = l'animation commence quand le haut du conteneur touche le haut de l'écran
        // "end end" = l'animation se termine quand le bas du conteneur touche le bas de l'écran (dépend de la hauteur)
        offset: ["start start", "end end"]
    });

    // Exemple de transformations génériques qu'on pourrait appliquer au wrapper global (si besoin)
    // Ici, on passe scrollYProgress à l'enfant (children function) pour qu'il gère ses propres animations internes.
    // L'effet d'empilement (stacking) se fera naturellement si la section SUIVANTE a un z-index supérieur
    // ou si on anime la section ACTUELLE pour qu'elle reste en arrière-plan.

    return (
        <section 
            ref={containerRef} 
            style={{ height }} 
            className={`relative w-full ${className}`}
        >
            {/* Le wrapper sticky (fixé à l'écran pendant qu'on scrolle dans le containerRef) */}
            <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
                {/* On passe la progression (0 à 1) aux composants enfants pour qu'ils animent leurs éléments internes */}
                {children(scrollYProgress)}
            </div>
        </section>
    );
}

/**
 * EXEMPLE D'UTILISATION :
 * 
 * import { StickyWrapper } from "@/components/layout/StickyWrapper";
 * import { motion, useTransform } from "framer-motion";
 * 
 * export function MaSection() {
 *   return (
 *     <StickyWrapper height="300vh">
 *       {(progress) => {
 *         // Définition des animations internes en fonction de la progression (0 -> 1)
 *         const scale = useTransform(progress, [0, 0.5, 1], [1, 1.5, 0.8]);
 *         const opacity = useTransform(progress, [0.8, 1], [1, 0]);
 *         const y = useTransform(progress, [0, 0.3], [100, 0]);
 *         
 *         return (
 *           <motion.div 
 *             style={{ opacity }} 
 *             className="w-full h-full flex items-center justify-center bg-black"
 *           >
 *              <motion.h1 style={{ y, scale }} className="text-white text-5xl">
 *                 MOUVEMENT FLUIDE
 *              </motion.h1>
 *           </motion.div>
 *         );
 *       }}
 *     </StickyWrapper>
 *   );
 * }
 */
