"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { motion, AnimatePresence, stagger, easeInOut } from "motion/react";

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
    text="Contact",
    links,
    className
}:ExpandingPillProps){

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const characters:string[] = text.split("");

    return(
        <motion.div
        className={clsx("flex justify-center gap-4 items-center",className)}
        onMouseEnter={()=>{setIsHovered(true)}}
        onMouseLeave={()=>{setIsHovered(false)}}
        transition={{type:"spring", stiffness:300, damping: 25}}
        >
            <AnimatePresence mode="wait">
                {!isHovered ?(
                    <motion.div
                    key={"text"}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    >
                        {
                            characters.map((char,index)=>{
                                return (
                                    <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    aria-label={`${text} button`}
                                    className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                )
                            })
                        }
                    </motion.div>
                ):(
                    <motion.div
                    key="links"
                    className="flex gap-4"
                    variants={linksContainerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    >
                        {
                            links.map((link, index)=>{
                                return <motion.a
                                variants={linkVariants}
                                whileHover={{opacity:0.6}}
                                key={index}
                                aria-label={link.label || "Social Link"}
                                target="_blank"
                                rel="noreferrer noopener">{link.icon}</motion.a>;
                            })
                        }
                    </motion.div>
                )}
            </AnimatePresence>
               
        </motion.div>
    )

}


const containerVariants = {
    initial: {},
    animate: {
        transition: {
            ease: [0.76,0,0.24,1] as const,
            delayChildren: stagger(0.025),
        },
    },
    exit: {
        transition: {
            ease: [0.76,0,0.24,1] as const,
            delayChildren: stagger(0.035, {from: "last"}),
        },
    },
}

const linksContainerVariants = {
    initial: {},
    animate: {
        transition: {
            ease: [0.76,0,0.24,1] as const,
            delayChildren: stagger(0.1),
        },
    },
    exit: {
        transition: {
            ease: [0.76,0,0.24,1] as const,
            delayChildren: stagger(0.1, {from: "last"}),
        },
    },
}

const linkVariants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 10,
    },
}

const letterVariants = {
    initial: {
        opacity: 0,
        y: -10,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -10,
    },
}