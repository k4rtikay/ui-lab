"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Sidenav({...props}){

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
                    name: 'Shimmer Button',
                    href: '/components/shimmer-button'
                },
                {
                    name: 'Expanding Pill',
                    href: '/components/expanding-pill'
                },
                {
                    name: 'Theme Button',
                    href: '/components/theme-button'
                }
            ]
        },
        {
            category: 'Cards',
            items: [
                {
                    name: 'Card Stack',
                    href: '/components/card-stack'
                },
                {
                    name: 'Expanding Image',
                    href: '/components/expanding-image'
                },
                {
                    name: 'Lenticular Card',
                    href: '/components/lenticular-card'
                },
                {
                    name: 'FAQ Section',
                    href: '/components/faq-section'
                },
                {
                    name: 'Vibrant CTA Section',
                    href: '/components/vibrant-cta-section'
                },
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
                },
                {
                    name: 'Text along a Path',
                    href: '/components/path-text'
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
                },
                {
                    name: 'Animated Tabs',
                    href: '/components/animated-tabs'
                },
                {
                    name: 'OTP Input',
                    href: '/components/otp-input'
                },
            ]
        }
    ]

    return(
        <aside className="w-64 px-8 py-8 h-full text-sm overflow-y-auto">   
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
                                                    "text-[#DB2B39] opacity-100" : pathname === item.href
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