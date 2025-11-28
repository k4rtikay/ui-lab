"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Tab = {
    label: string;
    id: string;
}

interface AnimatedTabsProps {
    tabs: Tab[];
    className?: string
}

export default function AnimatedTabs({tabs,className} : AnimatedTabsProps){
    const [selected, setSelected] = useState<string>(tabs[0].id);
    const [hovered, setHovered] = useState<string>(tabs[0].id);


    return(
        <div className="flex gap-4">
            {
                tabs.map((tab)=>{
                    const isActive = (selected===tab.id);
                    const isHovered = (hovered===tab.id)

                    return (
                    <button key={tab.id}
                    className={"relative px-2 py-1"}
                    onClick={()=>{setSelected(tab.id)}}
                    onMouseOver={()=>{setHovered(tab.id)}}
                    >
                        {
                            (isActive)&&
                            <motion.div
                            className="bg-[#E3F988] h-full -z-10 absolute inset-0 rounded-md"
                            layoutId="selectedTab"
                            transition={{type:"spring", stiffness:300, damping:25}}></motion.div>
                        }

                        {

                            (isHovered && !isActive)&&
                            <motion.div
                            className="bg-neutral-200/50 dark:bg-neutral-700/50 h-full -z-10 absolute inset-0 rounded-md"
                            layoutId="hoveredTab"
                            transition={{type:"spring", stiffness:300, damping:25}}
                            ></motion.div>
                        }
                        <motion.span
                        animate={{color: isActive ? "#000000" : ""}}
                        transition={{duration:0.3}}>{tab.label}</motion.span>
                    </button>
                    )
                })
            }
        </div>
    )
}