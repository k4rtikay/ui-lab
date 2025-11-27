"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { motion } from "motion/react";

type cardData = {
  id: number | string;
  title: string;
  description: string;
  category: string;
  color: string;
};

interface CardStackProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    items: cardData[];
};

export default function CardStack({
    items,
    className,
    ...props
}:CardStackProps){

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [hasClicked, setHasClicked] = useState<boolean>(false);
    const totalCards:number  = items.length;


    const lastIndex:number = (activeIndex - 1 + totalCards) % totalCards;


    const  handleClick = () =>{

        setHasClicked(true)

        setActiveIndex((prevIndex)=>{
            return (prevIndex+1)%totalCards ;
        })
    }

    const variants = {
        'top':{
            scale:1,
            y: 0, 
            zIndex: 30,
            opacity: 1 
        },
        'second':{
            scale: 0.9, 
            y: 20,
            zIndex: 20, 
            opacity: 1
        },
        'third':{
            scale: 0.8, 
            y: 40, 
            zIndex: 10,
            opacity: 1
        },
        'hidden':{
            scale: 0.8, 
            y: -60, 
            zIndex: 0, 
            opacity: 0,
        },
        'exit':{
            y: -240,
            opacity: 0,
            zIndex: 50,
            filter: "blur(4px)",
            transition:{ duration:0.4 },
        },
        transitionEnd: {
            y: 0,
            opacity: 0,
            zIndex: 0,
            filter: 'blur(0px)'
        }
    }
 
    return(
        <div className="relative">
            {
                items.map((item, index)=>{
                    let anim;

                    if(index === activeIndex){
                        anim='top';
                    }
                    else if(index === lastIndex && hasClicked){
                        anim='exit'
                    }
                    else if(index === (activeIndex+1)%totalCards){
                        anim='second'
                    }
                    else if(index === (activeIndex+2)%totalCards){
                        anim = 'third'
                    }else{
                        anim = 'hidden'
                        console.log(activeIndex)
                    }

                    return(
                        <motion.div key={item.id}
                        variants={variants}
                        initial={anim}  
                        animate={anim}
                        transition={{type:"spring", damping:15 }}
                        whileTap={{y:'8px'}}
                        className={clsx("h-fit max-w-lg px-4 py-6 flex flex-col gap-2 absolute inset-0 rounded-2xl bg-white dark:bg-[#181818] text-foreground shadow-[0px_10px_25px_rgba(0,0,0,0.1)] dark:shadow-none dark:border dark:border-zinc-800",{ "pointer-events-none":(index!==activeIndex) })}
                        onClick={handleClick}>
                            <h1 className="text-xl font-medium">{item.title}</h1>
                            <p className="text-sm opacity-70 tracking-wide">{item.description}</p>
                            <span className={clsx("px-2 py-1 w-fit text-sm rounded-lg",item.color)}>{item.category}</span>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}