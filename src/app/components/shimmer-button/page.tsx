import ShimmerButton from "@/components/works/Shimmer-Button/ShimmerButton";
import { ChevronRightCircleIcon as RightIcon } from 'lucide-react';

export default function ShimmerButtonPage({
    children,
}:{children: React.ReactNode}){   

    return(
        <div className="flex justify-center">
            <ShimmerButton className="flex px-2 gap-8 items-center group">
                <div className="flex flex-col gap-0.5 items-start">
                    <p className="text-neutral-100 tracking-wide">Book an Appointment</p>
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-radial from-green-200 to-green-500 animate-pulse group-hover:animate-none shadow-[0_0_15px_green]"></span>
                        <p className="text-xs tracking-wide text-neutral-100/60">Open</p>
                    </div>
                </div>
                <RightIcon className="group-hover:translate-x-1 group-hover:text-neutral-100 duration-150 ease-out text-neutral-100/60"></RightIcon>
            </ShimmerButton>
        </div>
    )
}