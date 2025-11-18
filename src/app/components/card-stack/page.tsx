import React from "react";
import CardStack from "@/app/ui/works/Card-stack/CardStack";

export default function CardStackPage({
    children,
}:{children: React.ReactNode}){

    const MOCK_CARDS = [
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
            description: "Verify that all gray text colors pass WCAG AA standards when in dark mode.",
            category: "Accessibility",
            color: "bg-red-100 text-red-800",
        },
    ];


    return(
        <div>
            <CardStack items={MOCK_CARDS}></CardStack>
        </div>
    )
}