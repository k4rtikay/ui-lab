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
        className="w-fit flex justify-between px-4 py-4 items-center bg-neutral-700 text-neutral-100 font-medium tracking-wide rounded-full "
        onMouseEnter={()=>{setIsHovered(true)}}
        onMouseLeave={()=>{setIsHovered(false)}}
        layout
        transition={{type:"spring", stiffness:400, damping: 30}}
        >
            <AnimatePresence mode="popLayout">
                {!isHovered ?(
                    <motion.div
                    key={"text"}
                    layout
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:20}}>{text}</motion.div>
                ):(
                    <motion.div
                    className="flex justify-between items-center gap-6 px-2 py-2"
                    key={"icons"}
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:-20}}>{
                        links.map((link, index)=>{
                            return <motion.button whileHover={{opacity:0.6}} key={index}>{link.icon}</motion.button>;
                        })
                    }</motion.div>
                )}
            </AnimatePresence>
               
        </motion.div>
    )

}