import ShimmerButton from "@/app/ui/works/Shimmer-Button/ShimmerButton";
import { ChevronRightCircleIcon as RightIcon } from 'lucide-react';

export default function ShimmerButtonPage({
    children,
}:{children: React.ReactNode}){   

    const CATEGORY_TABS = [
        { id: "write", label: "Write" },
        { id: "design", label: "Design" },
        { id: "code", label: "Code" },
        { id: "ship", label: "Ship" },
    ];

    return(
        <div className="flex justify-center">
            <ShimmerButton className="flex gap-8">
                <p className="text-neutral-800 dark:text-neutral-50">Book an Appointment</p>
                <RightIcon ></RightIcon>
            </ShimmerButton>
        </div>
    )
}