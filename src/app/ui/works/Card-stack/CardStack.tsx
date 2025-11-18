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
    const totalCards  = items.length;


    const TOP_CARD_STYLE = { 
        scale: 1, 
        y: 0, 
        zIndex: 30,
        opacity: 1 
    };
  
    const SECOND_CARD_STYLE = { 
        scale: 0.9, 
        y: 20,
        zIndex: 20, 
        opacity: 1 
    };
    
    const THIRD_CARD_STYLE = { 
        scale: 0.8, 
        y: 40, 
        zIndex: 10,
        opacity: 1 
    };
    
    const HIDDEN_STYLE = { 
        scale: 0.8, 
        y: -60, 
        zIndex: 0, 
        opacity: 0 
    };


    const  handleClick = () =>{
        setActiveIndex((prevIndex)=>{
            return (prevIndex+1)%totalCards ;
        })
    }
 
    return(
        <div className="relative">
            {
                items.map((item, index)=>{
                    let style;

                    if(index === activeIndex){
                        style=TOP_CARD_STYLE;
                    }
                    else if(index === (activeIndex+1)%totalCards){
                        style=SECOND_CARD_STYLE;
                    }
                    else if(index === (activeIndex+2)%totalCards){
                        style=THIRD_CARD_STYLE;
                    }else{
                        style="opacity-0";
                        console.log(activeIndex)
                    }

                    return(
                        <motion.div key={item.id}
                        animate={style}
                        className="h-fit max-w-lg px-4 py-4 flex flex-col gap-2 absolute inset-0 rounded-2xl bg-white dark:bg-zinc-900 text-foreground shadow-[0px_10px_25px_rgba(0,0,0,0.1)] dark:shadow-none dark:border dark:border-zinc-800"
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