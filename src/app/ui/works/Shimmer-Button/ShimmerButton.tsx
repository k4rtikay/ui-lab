"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}


export default function ShimmerButton({
    shimmerColor = "#ffffff",
    shimmerSize = "0.05em",
    shimmerDuration = "4.5s",
    borderRadius = "999px",
    background = "linear-gradient(to bottom, #27272a, #09090b)",
    className,
    children,
    ...props
}: ShimmerButtonProps){

    return(
        <button
        style={
            {
                "--spread": "90deg",
                "--shimmer-color": shimmerColor,
                "--radius": borderRadius,
                "--speed": shimmerDuration,
                "--cut": shimmerSize,
                "--borderRadius": borderRadius,
            } as React.CSSProperties
        }
        className={clsx("relative w-fit px-4 py-4 overflow-hidden rounded-(--borderRadius) group",
            "transform-gpu transition-transform ease-in-out active:translate-y-px",
        )}>
            <div className={clsx("absolute -inset-[200%] animate-[spin_var(--speed)_linear_infinite]",
            "[background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]",
            "blur-lg")}></div>
            <div className="absolute inset-px rounded-[calc(var(--borderRadius)-1px)]"
            style={{"background" : background}}></div>
            <div className={clsx("relative z-10", className)}>{children}</div>
            <div
                className={clsx(
                    "absolute inset-0 -z-10 block rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
                    "p-px mask-exclude",
                    "bg-white/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                )}
            />
        </button>
    )
}