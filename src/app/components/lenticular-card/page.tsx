import LenticularCard from "@/components/works/Lenticular-Card/LenticularCard"
import Image from "next/image"

export default function LenticularCardPage({
    children,
}: { children: React.ReactNode }) {

    const layers: React.ReactNode[] = [
        <Image
            alt="image of a cyberpunk cityscape during the morning hours"
            src={"/cyberpunk-sky-morning.png"}
            width={360}
            height={240}
        />,

        <Image
            alt="image of a cyberpunk cityscape during the noon hours"
            src={"/cyberpunk-sky-noon.png"}
            width={360}
            height={240}
        />,

        <Image
            alt="image of a cyberpunk cityscape during the night hours"
            src={"/cyberpunk-sky-night.png"}
            width={360}
            height={240}
        />

    ]

    return (
        <div className="flex justify-center">
            <LenticularCard layers={layers} className="rounded-md shadow-lg overflow-hidden">
                <div className="px-4 flex flex-col gap-2">
                    <h1>Lenticular Card</h1>
                    <p>Come on - try hovering on it.</p>
                    <p>The images change as you tilt it side to side.</p>
                </div>
            </LenticularCard>
        </div>
    )
}