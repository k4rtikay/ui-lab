"use client";

import { Space_Grotesk } from "next/font/google";
import { motion } from "motion/react";
import { useState } from "react";
// import FlowerIcon from ...

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500"],
});

export default function VibrantCtaSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="w-full max-w-5xl mx-auto mt-20 px-4">
            
            <div className="relative w-full h-[450px] bg-[#EBF4CD] dark:bg-[#C3DF68] rounded-[48px] overflow-hidden">
                
                <motion.div
                    className={`absolute bg-[#DDEDAA] flex justify-between overflow-hidden ${spaceGrotesk.className}`}
                    initial={false}
                    animate={{
                        top: isHovered ? 0 : 32,
                        left: isHovered ? 0 : 32,
                        right: isHovered ? 0 : 32,
                        bottom: isHovered ? 0 : 32,
                        borderRadius: isHovered ? 48 : 32
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                >
                    
                    <div className="w-[480px] flex-shrink-0 flex flex-col gap-8 p-12 z-10 h-full">
                        <h1 className="text-4xl md:text-4xl font-medium leading-[1.1] text-black/90">
                            Where automation meets intuition.
                        </h1>
                        
                        <motion.button
                            className="bg-black text-white px-4 py-2 w-fit rounded-md font-medium flex items-center gap-3 cursor-pointer"
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                            whileTap={{ scale: 0.98 }}  
                        >
                            <span>Get Started</span>
                        </motion.button>
                    </div>

                    <div className="flex-grow h-full relative flex items-center justify-center">
                         <div className="w-32 h-32 bg-green-500/20 rounded-full blur-xl" />
                    </div>

                </motion.div>
            </div>
        </div>
    );
}