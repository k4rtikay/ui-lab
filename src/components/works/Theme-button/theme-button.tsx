import { Button } from "@/components/ui/button"
import { SunMoon } from "lucide-react"

export default function ThemeButton(){
    return (
        <div>
            <Button variant={"outline"} size={"icon"}>
                <SunMoon></SunMoon>
            </Button>
        </div>
    )
}