import clsx from "clsx";
import React from "react";

interface GumroadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function GumroadButton({
    children,
    className,
    ...props
}:GumroadButtonProps){
    return(
        <button className="px-2 py-2 bg-foreground text-background rounded-sm">
            {children}
        </button>
    )
}