import LenticularCard from "@/components/works/Lenticular-Card/LenticularCard"

export default function LenticularCardPage({
    children,
}:{children: React.ReactNode}){

    return(
        <div className="flex justify-center">
            <LenticularCard></LenticularCard>
        </div>
    )
}