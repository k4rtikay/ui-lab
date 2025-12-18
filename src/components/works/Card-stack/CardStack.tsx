"use client";

import clsx from "clsx";
import React, { Children, useState } from "react";
import { motion } from "motion/react";

// type cardData = {
//   id: number | string;
//   title: string;
//   description: string;
//   category: string;
//   color: string;
// };

interface CardStackProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
};

export default function CardStack({
    children,
    className,
    ...props
}:CardStackProps){

    const cards = Children.toArray(children);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [hasClicked, setHasClicked] = useState<boolean>(false);
    const totalCards:number  = cards.length;


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
            transition:{ duration:0.35 },
        },
        transitionEnd: {
            y: 0,
            opacity: 0,
            zIndex: 0,
            filter: 'blur(0px)'
        }
    }
 
    return(
        <div className={clsx("relative ", className)} {...props}>
            {
                cards.map((item, index)=>{
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
                        <motion.div key={index}
                        variants={variants}
                        initial={anim}  
                        animate={anim}
                        transition={{type:"spring", damping:15 }}
                        whileTap={{y:'8px'}}
                        className={clsx("w-fit absolute inset-0",{ "pointer-events-none":(index!==activeIndex) })}
                        onClick={handleClick}>
                            {item}
                        </motion.div>
                    )
                })
            }
        </div>
    )
}