"use client";

import React, { useRef } from "react";
import clsx from "clsx";

interface LenticularCardProps{
    children?: React.ReactNode;
    className?: string;
    layers: React.ReactNode[];
    rotationSpeed?: number;
}

export default function LenticularCard({children, className, layers, rotationSpeed=30} : LenticularCardProps) {

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
                const xRotation = (xPosPercent - 0.5) * rotationSpeed;
                const yRotation = (0.5 - yPosPercent) * rotationSpeed;

                const n = layers.length;
                const step = 1 / (n - 1);
                
                for (let i = 0; i < n; i++) {
                    if (n === 1) {
                        e.currentTarget.style.setProperty("--op-0", "1");
                        return;
                    }

                    const center = i * step;
                    // Calculating distance from this layer's "peak" center
                    const distance = Math.abs(xPosPercent - center);
                    // Normalizing distance by step size and invert
                    const op = Math.max(0, 1 - (distance / step));
                    e.currentTarget.style.setProperty(`--op-${i}`, `${op}`);
                }

                e.currentTarget.style.setProperty("--x-rotation", `${xRotation}deg`);
                e.currentTarget.style.setProperty("--y-rotation", `${yRotation}deg`);
                e.currentTarget.style.setProperty("--x-pos", `${xPosPercent}`);
            }}
            onMouseLeave={(e)=>{
                boundingRef.current = null;
                e.currentTarget.style.setProperty("--x-rotation", "0deg");
                e.currentTarget.style.setProperty("--y-rotation", "0deg");
                layers.forEach((_, id)=>{
                    e.currentTarget.style.setProperty(`--op-${id}`, id===0 ? "1" : "0");
                });
            }}

            className={clsx("p-px perspective-midrange")}
        >
            <div
                className={clsx("relative flex flex-col rotate-x-(--y-rotation) rotate-y-(--x-rotation) hover:scale-105 transition-transform ease-out transform-3d", className)}
            >
                <div className="relative bg-black/35 w-full h-64 overflow-hidden">
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
                className="relative flex items-end -z-10"
                >
                    {children}
                </div>

                <div className="pointer-events-none absolute inset-0"
                style={{
                    background: "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.0) 60%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    backgroundPosition: "var(--x-percent) 0"
                }}
                ></div>

            </div>
        </div>
    )
}