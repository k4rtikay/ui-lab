"use client";

import { Space_Grotesk } from "next/font/google";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500"],
});

export default function VibrantCtaSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="w-full max-w-5xl mx-auto mt-20 px-4">

            <div className="relative w-full h-[450px] bg-white rounded-[48px] overflow-hidden shadow-[1px_1px_4px_0_rgba(0,0,0,0.07),4px_4px_15px_0_rgba(0,0,0,0.04),8px_8px_25px_0_rgba(0,0,0,0.02)]">

                <motion.div
                    className={cn("absolute flex bg-[#1a472a] justify-between overflow-hidden", spaceGrotesk.className,
                        "bg-radial-[at_0%_0%] from-sky-50 via-sky-200 to-sky-500"
                    )}
                    initial={false}
                    animate={{
                        top: isHovered ? 0 : 32,
                        left: isHovered ? 0 : 32,
                        right: isHovered ? 0 : 32,
                        bottom: isHovered ? 0 : 32,
                        borderRadius: isHovered ? 48 : 32
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >

                    {/* Texture Overlay */}
                    <div
                        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                        }}
                    />

                    <div className="w-[480px] flex-shrink-0 flex flex-col gap-8 p-12 z-10 h-full">
                        <h1 className="text-4xl md:text-4xl font-medium leading-[1.1] text-black/90">
                            Where automation meets intuition.
                        </h1>

                        <motion.button
                            className="bg-black text-white px-4 py-2 w-fit rounded-md font-medium flex items-center gap-3 cursor-pointer"
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Get Started</span>
                        </motion.button>
                    </div>

                    <div className="flex-grow h-full relative flex items-center justify-center">
                        {/* <div className="w-32 h-32 bg-green-500/20 rounded-full blur-xl"/> */}
                    </div>

                </motion.div>
            </div>
        </div>
    );
}