import React from "react";
import CardStack from "@/components/works/Card-stack/CardStack";
import clsx from "clsx";

export default function CardStackPage({
    children,
}:{children: React.ReactNode}){

    const items = [
        {
            id: 1,
            title: "Typography Guidelines",
            description: "Establish a consistent type scale for headings, body text, and captions to ensure readability across all devices.",
            category: "Design System",
            color: "bg-blue-100 text-blue-800",
        },
        {
            id: 2,
            title: "Authentication Flow",
            description: "Refactor the login component to support OAuth providers including Google, GitHub, and Twitter.",
            category: "Development",
            color: "bg-green-100 text-green-800",
        },
        {
            id: 3,
            title: "User Research Synthesis",
            description: "Analyze the results from the 15 user interviews and identify the top 3 pain points for the dashboard.",
            category: "Research",
            color: "bg-purple-100 text-purple-800",
        },
        {
            id: 4,
            title: "Mobile Responsive Audit",
            description: "Check all landing pages on iPhone SE and Pixel sizes to ensure no horizontal scrolling issues.",
            category: "QA",
            color: "bg-orange-100 text-orange-800",
        },
        {
            id: 5,
            title: "Dark Mode Contrast",
            description: "Verify that all gray text colors pass WCAG AA standards when in dark mode of the website.",
            category: "Accessibility",
            color: "bg-red-100 text-red-800",
        },
    ];


    return(
        <div className="flex justify-center">
            <CardStack className="h-40 w-72 md:w-96">
                {
                    items.map((item)=>(
                        <div key={item.id} className={clsx("flex flex-col justify-center gap-2 h-full w-full px-4 rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.05),0_8px_12px_rgba(0,0,0,0.025),inset_0_2px_4px_rgba(0,0,0,0.03)] dark:shadow-none bg-white dark:bg-[#121212] dark:border dark:border-zinc-800",
                        "group-focus-visible:ring-2 group-focus-visible:ring-blue-400 group-focus-visible:ring-offset-2")}>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                                <span className={clsx("px-2 py-1 w-fit text-sm rounded-md",item.color)}>{item.category}</span>
                            </div>  
                        </div>
                    ))
                }
            </CardStack>
        </div>
    )
}