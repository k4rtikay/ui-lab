import React from "react";
import Sidenav from "../ui/shared/Sidenav";

export default function Components({
    children,
}:{children: React.ReactNode}){

    return(

        <div className="flex h-screen">
            <Sidenav></Sidenav>
            <main className="flex-1 overflow-y-auto px-8 py-8">
                {children}
            </main>
        </div>
    )
}