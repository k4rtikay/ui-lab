import LenticularCard from "@/components/works/Lenticular-Card/LenticularCard"

export default function LenticularCardPage({
    children,
}:{children: React.ReactNode}){

    return(
        <div className="flex justify-center">
            <LenticularCard>
                <h1>Lenticular Card</h1>
                <p>Come on - try hovering on it.</p>
            </LenticularCard>
        </div>
    )
}