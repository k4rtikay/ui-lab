import React from "react";
import PathText from "@/app/ui/works/Path-text/PathText";

export default function PathTextPage({
    children,
}:{children: React.ReactNode}){

    const classes = "w-xl h-fit border-2 border-neutral-500 rounded-lg px-4 py-4";

    return(
        <div className=" w-full flex flex-col gap-4 justify-center">
            <div className={classes}>
                <PathText text={"let's work together"} variant={"wave"}></PathText>
            </div>
            <div className={classes}>
                <PathText text={"let's work together"} variant={"circle"}></PathText>
            </div>
        </div>
    )
}