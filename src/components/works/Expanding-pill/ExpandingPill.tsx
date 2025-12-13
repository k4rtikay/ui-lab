"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, stagger, easeInOut } from "motion/react";

type SocialLinks = {
    icon: React.ReactNode;
    href: string;
    label?: string;
}

interface ExpandingPillProps {
    text?: string;
    links: SocialLinks[];
    className?: string;
}


export default function ExpandingPill({
    text = "Contact",
    links,
    className
}: ExpandingPillProps) {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const characters: string[] = text.split("");

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const eventHandlers = isMobile
        ? {
            onClick: () => setIsHovered(!isHovered),
        }
        : {
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false),
            onFocus: () => setIsHovered(true),
            onBlur: () => setIsHovered(false)
        };

    return (
        <motion.button
            className={clsx("flex justify-center gap-4 items-center select-none appearance-none border-none",
                "outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900",
                className)}
            {...eventHandlers}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            <AnimatePresence mode="wait">
                {!isHovered ? (
                    <motion.div
                        key={"text"}
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex"
                    >
                        {
                            characters.map((char, index) => {
                                return (
                                    <motion.span
                                        key={index}
                                        variants={letterVariants}
                                        aria-label={`${text} button`}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                )
                            })
                        }
                    </motion.div>
                ) : (
                    <motion.div
                        key="links"
                        className="flex gap-4"
                        variants={linksContainerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {
                            links.map((link, index) => {
                                return <motion.a
                                    variants={linkVariants}
                                    whileHover={{ opacity: 0.6 }}
                                    whileTap={{ scale: 0.95 }} 
                                    key={index}
                                    aria-label={link.label || "Social Link"}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                                    onClick={(e) => e.stopPropagation()}
                                // href={link.href}
                                >{link.icon}</motion.a>;
                            })
                        }
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.button>
    )

}


const containerVariants = {
    initial: {},
    animate: {
        transition: {
            ease: [0.76, 0, 0.24, 1] as const,
            delayChildren: stagger(0.025),
        },
    },
    exit: {
        transition: {
            ease: [0.76, 0, 0.24, 1] as const,
            delayChildren: stagger(0.025, { from: "last" }),
        },
    },
}

const linksContainerVariants = {
    initial: {},
    animate: {
        transition: {
            ease: [0.76, 0, 0.24, 1] as const,
            delayChildren: stagger(0.075),
        },
    },
    exit: {
        transition: {
            ease: [0.76, 0, 0.24, 1] as const,
            delayChildren: stagger(0.075, { from: "last" }),
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