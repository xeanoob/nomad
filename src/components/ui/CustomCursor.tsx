"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('button, a, [role="button"]');
            const isText = target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'SPAN';
            
            setIsPointer(!!isClickable);
            setIsHovered(!!isText && !isClickable);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            style={{
                translateX: springX,
                translateY: springY,
                left: -12,
                top: -12,
            }}
            animate={{
                scale: isPointer ? 3 : isHovered ? 2.5 : 1,
                backgroundColor: isPointer ? "rgba(124, 58, 237, 0.3)" : "rgba(255, 255, 255, 1)",
                mixBlendMode: isHovered ? "difference" : "normal",
            }}
            className="fixed w-6 h-6 rounded-full pointer-events-none z-[9999] border border-white/20"
        />
    );
}
