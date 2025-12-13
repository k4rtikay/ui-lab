import ExpandingPill from "@/components/works/Expanding-pill/ExpandingPill"
import { SiX, SiGithub, SiInstagram, SiGmail } from "@icons-pack/react-simple-icons"

export default function ExpandingPillPage({
    children,
}: { children: React.ReactNode }) {

    const icons = [
        {
            icon: <SiX size={16}></SiX>,
            href: ""
        },
        {
            icon: <SiInstagram size={16}></SiInstagram>,
            href: ""
        },
        {
            icon: <SiGithub size={16}></SiGithub>,
            href: ""
        },
        {
            icon: <SiGmail size={16}></SiGmail>,
            href: ""
        }
    ]

    return (
        <div className="flex justify-center">
            <ExpandingPill links={icons} text="CONTACT US"
                className="w-44 h-10 bg-slate-900 text-neutral-100 dark:bg-[#f1f0f0] dark:text-neutral-800/85 font-semibold
                tracking-wide px-6 rounded-full cursor-pointer
                shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.05),0px_4px_8px_-1px_rgba(0,0,0,0.05),0px_8px_32px_-1px_rgba(0,0,0,0.05),inset_0px_2px_8px_rgba(255,255,255,0.2)]
                dark:shadow-[0px_0px_20px_rgba(255,255,255,0.35)]">
            </ExpandingPill>
        </div>
    )
}