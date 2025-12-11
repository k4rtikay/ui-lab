"use client";

import React, { useRef } from "react";
import clsx from "clsx";

interface LenticularcardProps{
    children?: React.ReactNode;
    className?: string;
    layers: React.ReactNode[];
}

export default function LenticularCard({children, className, layers} : LenticularcardProps) {

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
                const xRotation = (xPosPercent - 0.5) * 30;
                const yRotation = (0.5 - yPosPercent) * 30;

                // Layer 1 (Left): 1 at start, 0 at center
                const op1 = Math.max(0, 1 - (xPosPercent * 2));
                
                // Layer 2 (Center): 0 at edges, 1 at center
                const op2 = 1 - Math.abs(xPosPercent - 0.5) * 2;
                
                // Layer 3 (Right): 0 at center, 1 at end
                const op3 = Math.max(0, (xPosPercent - 0.5) * 2);
                
                // 2. Set Variables
                e.currentTarget.style.setProperty("--op-0", `${op1}`);
                e.currentTarget.style.setProperty("--op-1", `${op2}`);
                e.currentTarget.style.setProperty("--op-2", `${op3}`);

                e.currentTarget.style.setProperty("--x-rotation", `${xRotation}deg`);
                e.currentTarget.style.setProperty("--y-rotation", `${yRotation}deg`);
            }}
            onMouseLeave={(e)=>{
                boundingRef.current = null;
                e.currentTarget.style.setProperty("--x-rotation", "0deg");
                e.currentTarget.style.setProperty("--y-rotation", "0deg");
                e.currentTarget.style.setProperty("--op-0", "0");
                e.currentTarget.style.setProperty("--op-1", "1");
                e.currentTarget.style.setProperty("--op-2", "0");
            }}

            className={clsx("p-px perspective-midrange",className)}
        >
            <div
                className="relative rotate-x-(--y-rotation) rotate-y-(--x-rotation) hover:scale-105 transition-transform ease-out transform-3d"
            >
                <div>
                    {
                        layers.map((item, id)=>{
                            return (
                                <div key={id}
                                className="absolute inset-0"
                                style={{opacity:`var(--op-${id})`}}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>

                <div
                className="relative h-full flex items-end -z-10"
                >
                    {children}
                </div>

            </div>
        </div>
    )
}