"use client";

import { useRef } from "react";

export default function LenticularCard() {

    const boundingRef = useRef<DOMRect | null>(null);

    return (
        <div className="flex justify-center perspective-midrange">
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
                    const xRotation = (xPosPercent - 0.5) * 55;
                    const yRotation = (0.5 - yPosPercent) * 55;

                    e.currentTarget.style.setProperty("--x-rotation", `${xRotation}deg`);
                    e.currentTarget.style.setProperty("--y-rotation", `${yRotation}deg`);
                }}
                className="flex flex-col shadow-lg justify-center width-xl h-[280px] border border-red-200 bg-red-50 p-4 rounded-md text-zinc-900 hover:rotate-x-(--y-rotation) hover:rotate-y-(--x-rotation) hover:scale-110 transition-transform ease-out"

            >
                <h1>Lenticular Card</h1>
                <p>Come on - try hovering on it.</p>
            </div>
        </div>
    )
}