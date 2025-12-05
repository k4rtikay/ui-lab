import GumroadButton from "@/components/works/Gumroad-cta/GumroadButton"

export default function GumroadCta({
    children,
}:{children: React.ReactNode}){    
    return(
        <div>
            <GumroadButton>
                <p>Hover Me Please!</p>
            </GumroadButton>
        </div>
    )
}