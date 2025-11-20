"use client";

import { useEffect, useId, useRef } from "react";
import clsx from "clsx";
import { useScroll } from "motion/react";

type PathVariant = "wave" | "arch";

interface PathTextProps{
    text: string;
    variant: PathVariant;
    speed?: number;
    path?: string;
    className?: string;
}

export default function PathTextScrollable({text,variant,speed=5,className}:PathTextProps){

    const pathId = useId()

    const path_config = {
        wave: {
            path: "m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68",
            viewBox: "0 0 250 90",
            defaultClass: "w-full",
            defaultSpacing: 40,
            defaultCopies: 4,
        },
        arch: {
            path: "M 25 140 A 125 125 0 0 1 275 140",
            viewBox: "0 0 300 150",
            defaultClass: "w-full mx-auto",
            defaultSpacing: 30,
            defaultCopies: 4
        } 
    };

    const { path, viewBox, defaultClass, defaultSpacing, defaultCopies } = path_config[variant]

    const actualSpacing = defaultSpacing;
    const actualCopies = defaultCopies;

    const container = useRef<HTMLDivElement>(null);
    const texts = useRef<(SVGTextPathElement | null)[]>([]);

    const { scrollYProgress } = useScroll({
        container: container,
        offset: ['start end', 'end end']
    })

    useEffect(()=>{
        const unsubscribe =
        scrollYProgress.on('change', e => {
            texts.current.forEach((text,i) => {
                text?.setAttribute("startOffset", -actualSpacing + (i*actualSpacing) + (e*actualSpacing) + "%");
            });
        })
        
        return () => unsubscribe()
    },[scrollYProgress, actualSpacing])

    

    return (
        <div  ref={container} className={clsx("overflow-y-auto h-[600px] w-full", className, defaultClass)}>
            <div className="h-screen"></div>
            <footer>
                <svg viewBox={viewBox}>
                    <path id={pathId} fill="none" d={path}/>
                    <text className="text-[8px] uppercase  tracking-wide">
                        {
                            [...Array(actualCopies)].map((_,i)=>{
                                return (<textPath href={"#"+pathId} key={i} startOffset={i * actualSpacing + "%"} method="stretch" ref={(ref) => {texts.current[i] = ref}}>
                                    {text}
                                </textPath>);
                            })
                        }
                    </text>
                </svg>
                <div className="h-[150px] w-ful"></div>
            </footer>
        </div>
    )
}