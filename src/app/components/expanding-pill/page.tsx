import ExpandingPill from "@/components/works/Expanding-pill/ExpandingPill"
import { SiX, SiGithub, SiInstagram, SiGmail } from "@icons-pack/react-simple-icons"

export default function ExpandingPillPage({
    children,
}:{children: React.ReactNode}){
    
    const icons = [
        {
            icon: <SiX size={24}></SiX>,
            href: ""
        },
        {
            icon: <SiInstagram size={24}></SiInstagram>,
            href: ""
        },
        {
            icon: <SiGithub size={24}></SiGithub>,
            href: ""
        },
        {
            icon: <SiGmail size={24}></SiGmail>,
            href: ""
        }
    ]
    
    return(
        <div className="flex justify-center">
           <ExpandingPill links={icons} text="Contact Us"></ExpandingPill>
        </div>
    )
}