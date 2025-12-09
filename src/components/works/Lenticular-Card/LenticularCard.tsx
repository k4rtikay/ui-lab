"use client";

import React, { useRef } from "react";
import clsx from "clsx";

interface LenticularcardProps{
    children?: React.ReactNode;
    className?: string;
}

export default function LenticularCard({children, className} : LenticularcardProps) {

    const boundingRef = useRef<DOMRect | null>(null);

    return (
        <div
            onMouseEnter={(e) => {
                boundingRef.current = e.currentTarget.getBoundingClientRect();
            }}
            onMouseMove={(e) => {
                if (!boundingRef.current) return;
                const xPos = e.clientX - boundingRef.current.left;
                const yPos = e.clientY - boundingRef.current.top;
                const xPosPercent = xPos / boundingRef.current.width;
                const yPosPercent = yPos / boundingRef.current.height;
                const xRotation = (xPosPercent - 0.5) * 25;
                const yRotation = (0.5 - yPosPercent) * 25;

                e.currentTarget.style.setProperty("--x-rotation", `${xRotation}deg`);
                e.currentTarget.style.setProperty("--y-rotation", `${yRotation}deg`);
            }}
            onMouseLeave={(e)=>{
                boundingRef.current = null;
                e.currentTarget.style.setProperty("--x-rotation", "0deg");
                e.currentTarget.style.setProperty("--y-rotation", "0deg");
            }}

            className={clsx("flex justify-center p-px w-fit perspective-midrange",className)}
        >
            <div
                className="flex flex-col shadow-lg justify-center width-xl h-[280px] border border-red-200 bg-red-50 p-4 rounded-md text-zinc-900 rotate-x-(--y-rotation) rotate-y-(--x-rotation) hover:scale-110 transition-transform ease-out transform-3d"
            >
                {children}   
            </div>
        </div>
    )
}