
import React from "react";
import PathText from "@/app/ui/works/Path-text/PathText";
import PathTextScrollable from "@/app/ui/works/Path-text/PathTextScrollable";
import clsx from "clsx";

export default function PathTextPage({
    children,
}:{children: React.ReactNode}){

    const classes = " relative border-2 border-neutral-500 rounded-lg px-4 py-4";

    return(
        <div className= "w-full flex flex-col gap-4 justify-center">
            <div className={classes}>
                <PathText text={"let's work together"} variant={"wave"}></PathText>
            </div>
            <div className={classes}>
                <PathText text={"let's work together"} variant={"circle"}></PathText>
            </div>
            <div className={clsx(classes, "w-full") }>
                <PathTextScrollable text={"let's work together"} variant={"wave"} className="relative"/>
            </div>
            <p>This component is a text animated on an svg path, inspired by the chivi chivi website that i have taken inspiration from please copy this and use it as you see free.</p>
        </div>
    )
}