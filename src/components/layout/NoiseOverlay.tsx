"use client";

import { motion } from "framer-motion";

export function NoiseOverlay() {
    return (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden select-none">
            {/* BASE GRAIN - Softened for comfort */}
            <div className="absolute inset-0 bg-grain animate-texture opacity-[0.2]" />
        </div>
    );
}
