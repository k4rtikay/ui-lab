"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Sidenav(){

    const pathname = usePathname()

    const comps = [
        {
            category: 'Getting Started',
            items: [
                {
                    name: 'Introduction',
                    href: '/components/introduction'
                },
                {
                    name: 'Setup',
                    href: '/components/setup'
                }
            ]
        },
        {
            category: 'Buttons',
            items: [
                {
                    name: 'Gumroad CTA',
                    href: '/components/gumroad-cta'
                },
                {
                    name: 'Glowing Border',
                    href: '/components/glowing-border'
                }
            ]
        },
        {
            category: 'Cards',
            items: [
                {
                    name: 'Perspective Shift',
                    href: '/components/perspective-shift'
                },
                {
                    name: 'Expanding Image',
                    href: '/components/expanding-image'
                }
            ]
        },
        {
            category: 'Text Effects',
            items: [
                {
                    name: 'Blur Reveal',
                    href: '/components/blur-reveal'
                },
                {
                    name: 'Squeeze Effect',
                    href: '/components/squeeze-text'
                }
            ]
        },
        {
            category: 'Interactive',
            items: [
                {
                    name: 'Dock',
                    href: '/components/dock'
                },
                {
                    name: 'Scroll Progress',
                    href: '/components/scroll-progress'
                }
            ]
        }
    ]

    return(
        <aside className="w-64 overflow-y-auto px-8 py-8 text-sm">   
                <ul className="flex flex-col gap-8">
                    {
                        comps.map((comp)=>{
                            return (
                            <li key={comp.category} className="flex flex-col gap-4">
                                <p className="font-medium">{comp.category}</p>
                                <ul className="flex flex-col gap-2 border-l-2 border-l-[#C2C2C2] dark:border-l-[#525252] px-4">
                                    {comp.items.map((item)=>{
                                        return (
                                            <li key={item.name} className={clsx(
                                                "opacity-60 hover:opacity-100",
                                                {
                                                    "text-[#E4E986] opacity-100" : pathname === item.href
                                                },
                                            )}><Link href={item.href}>{item.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </li>
                            )  
                        })
                    }
                </ul>
        </aside>
    )
}