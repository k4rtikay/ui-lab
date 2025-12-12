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
           className="w-44 h-10 bg-slate-900 text-neutral-100 dark:bg-[#f1f0f0] dark:text-neutral-800/80 font-semibold tracking-wide px-8 py-4 rounded-full shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.05),0px_4px_8px_-1px_rgba(0,0,0,0.05),0px_8px_32px_-1px_rgba(0,0,0,0.05),inset_0px_2px_8px_rgba(255,255,255,0.2)] dark:shadow-[0px_0px_20px_rgba(255,255,255,0.35)] cursor-pointer"></ExpandingPill>
        </div>
    )
}