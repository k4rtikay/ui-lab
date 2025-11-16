import Link from "next/link"

export default function Components({
    children,
}:{children: React.ReactNode}){

    // const items = ['Getting Started', 'Buttons', 'Cards', 'Text Effects', 'Interactive' ]

    const comps = [
        {
            category: 'Getting Started',
            items: [
                {
                    name: 'Introduction',
                    href: '/components/introduction'
                },
                {
                    name: 'setup',
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
        <div className="px-8 py-8">
            <aside>
                <div>
                    <ul className="flex flex-col gap-8">
                        {
                            comps.map((comp)=>{
                              return (
                                <li key={comp.category} className="flex flex-col gap-4">
                                    <p className="font-medium">{comp.category}</p>
                                    <ul className="ml-4 flex flex-col gap-2">
                                        {comp.items.map((item)=>{
                                            return (
                                                <li key={item.name}><Link href={item.href}>{item.name}</Link></li>
                                            )
                                        })}
                                    </ul>
                                </li>
                              )  
                            })
                        }
                    </ul>


                </div>
            </aside>
        </div>
    )
}