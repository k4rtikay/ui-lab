"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type SocialLinks = {
    icon: React.ReactNode;
    href: string;
    label?: string;
}

interface ExpandingPillProps{
    text?: string;
    links: SocialLinks[];
    className?: string;
}


export default function ExpandingPill({
    text="Contact us",
    links,
    className
}:ExpandingPillProps){

    const [isHovered, setIsHovered] = useState<Boolean>(false);

    return(
        <motion.div
        className="flex justify-center items-center bg-neutral-700 text-neutral-100 font-medium tracking-wide"
        onMouseEnter={()=>{setIsHovered(true)}}
        onMouseLeave={()=>{setIsHovered(false)}}
        layout
        transition={{type:"spring", stiffness:300, damping: 25}}
        style={{borderRadius:"999px"}}
        >
            <AnimatePresence mode="popLayout">
                {!isHovered ?(
                    <motion.div
                    key={"text"}
                    layout
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:-20}}
                    className="px-4 py-2">{text}</motion.div>
                ):(
                    <motion.div
                    className="flex justify-between items-center gap-6 px-6 py-6"
                    key={"icons"}
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:20}}>{
                        links.map((link, index)=>{
                            return <motion.a
                            whileHover={{opacity:0.6, scale:1.05}}
                            key={index}
                            aria-label={link.label || "Social Link"}
                            target="_blank"
                            rel="noreferrer noopener">{link.icon}</motion.a>;
                        })
                    }</motion.div>
                )}
            </AnimatePresence>
               
        </motion.div>
    )

}