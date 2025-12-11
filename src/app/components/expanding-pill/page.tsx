import ExpandingPill from "@/components/works/Expanding-pill/ExpandingPill"
import { SiX, SiGithub, SiInstagram, SiGmail } from "@icons-pack/react-simple-icons"

export default function ExpandingPillPage({
    children,
}:{children: React.ReactNode}){
    
    const icons = [
        {
            icon: <SiX size={18}></SiX>,
            href: ""
        },
        {
            icon: <SiInstagram size={18}></SiInstagram>,
            href: ""
        },
        {
            icon: <SiGithub size={18}></SiGithub>,
            href: ""
        },
        {
            icon: <SiGmail size={18}></SiGmail>,
            href: ""
        }
    ]
    
    return(
        <div className="flex justify-center">
           <ExpandingPill links={icons} text="CONTACT US"
           className="w-44 h-10 bg-neutral-800 text-neutral-100 font-semibold tracking-wide px-8 py-4 rounded-full cursor-pointer"></ExpandingPill>
        </div>
    )
}