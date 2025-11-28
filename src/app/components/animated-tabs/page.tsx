import AnimatedTabs from "@/app/ui/works/Animated-tabs/AnimatedTabs"

export default function AnimatedTabsPage({
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
            <AnimatedTabs tabs={CATEGORY_TABS}></AnimatedTabs>
        </div>
    )
}