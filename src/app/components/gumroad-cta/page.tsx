import GumroadButton from "@/app/ui/works/Gumroad-cta/GumroadButton"

export default function GumroadCta({
    children,
}:{children: React.ReactNode}){    
    return(
        <div>
            <GumroadButton>
                <p>Hover Me!</p>
            </GumroadButton>
        </div>
    )
}