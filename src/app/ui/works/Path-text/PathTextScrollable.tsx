"use client";

import { useId } from "react";
import clsx from "clsx";

type PathVariant = "wave" | "circle";

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
        circle: {
            path: "M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0",
            viewBox: "0 0 100 100",
            defaultClass: "w-64 h-64 mx-auto",
            defaultSpacing:50,
            defaultCopies: 4
        } 
    };

    const { path, viewBox, defaultClass, defaultSpacing, defaultCopies } = path_config[variant]

    const actualSpacing = defaultSpacing;
    const actualCopies = defaultCopies;

    return (
        <div className={clsx("overflow-y-auto h-[500px]", className, defaultClass)}>
            <div className="h-screen"></div>
            <footer>
                <svg viewBox={viewBox}>
                    <path id={pathId} fill="none" d={path}/>
                    <text className="text-[8px] uppercase  tracking-wide">
                        {
                            [...Array(actualCopies)].map((_,i)=>{
                                return (<textPath href={"#"+pathId} key={i} startOffset={i * actualSpacing + "%"} method="stretch">
                                    {text}
                                </textPath>);
                            })
                        }
                    </text>
                </svg>
            </footer>
        </div>
    )
}