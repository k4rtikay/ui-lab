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

export default function PathText({text,variant,speed=5,className}:PathTextProps){

    const pathId = useId()

    const path_config = {
        wave: {
            path: "m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68",
            viewBox: "0 0 250 90",
            defaultClass: "w-full",
            spacing: 40
        },
        circle: {
            path: "M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0",
            viewBox: "0 0 100 100",
            defaultClass: "w-64 h-64 mx-auto",
            spacing:50
        } 
    };

    const { path, viewBox, defaultClass, spacing } = path_config[variant]

    return (
        <div className={clsx("overflow-visible", className, defaultClass)}>
            <svg viewBox={viewBox}>
                <path id={pathId} fill="none" d={path}/>
                <text className="text-[8px] uppercase  tracking-wide">
                    {
                        [...Array(4)].map((_,i)=>{
                            return (<textPath href={"#"+pathId} key={i} startOffset={i * spacing + "%"} method="stretch">
                                {text}
                                <animate
                                attributeName="startOffset"
                                from={i * spacing + "%"}
                                to={i * spacing - spacing + "%"}
                                begin={"0s"}
                                repeatCount={"indefinite"}
                                dur={`${speed}s`}
                                />
                            </textPath>);
                        })
                    }
                </text>
            </svg>
        </div>
    )
}