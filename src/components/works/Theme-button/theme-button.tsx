"use client";

import { Button } from "@/components/ui/button"
import { Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeButton(){

    const { theme, setTheme } = useTheme()
    const isDark:Boolean = theme==="dark"

    return (
        <div>
            <Button
            variant={"outline"}
            size={"icon"}
            onClick={()=>{setTheme(isDark? "light": "dark")}}
            >
                <Sun></Sun>
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    )
}

