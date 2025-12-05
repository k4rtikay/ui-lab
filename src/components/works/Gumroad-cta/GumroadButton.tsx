import clsx from "clsx";
import React from "react";

interface GumroadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function GumroadButton({
    children,
    className,
    ...props
}:GumroadButtonProps){
    return(
        <div className="relative w-fit group">
            <div className="bg-red-500 rounded-sm absolute border border-[#000000] inset-0 z-1 transition-transform group-hover:translate-2"></div>
            <div className="bg-yellow-300 rounded-sm absolute border border-[#000000] inset-0 z-2"></div>
            <button 
            {...props}
            className={clsx(
                "relative px-4 py-4 bg-[#000000] text-[#ffffff] rounded-sm z-3 transition-transform group-hover:-translate-2",className
            )}>
                {children}
            </button>
        </div>
    )
}