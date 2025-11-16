import React from "react";

export default function Components({
    children,
}:{children: React.ReactNode}){
    return(
        <div>{children}</div>
    )
}