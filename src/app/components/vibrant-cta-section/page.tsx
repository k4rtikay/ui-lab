import { Space_Grotesk } from "next/font/google";
import { ArrowBigRight } from "lucide-react";

const instrumentSerif = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400"],
});

export default function VibrantCtaSection() {
    return (
        <div className="bg-[#EBF4CD] p-8 rounded-4xl">
            <div className="w-full flex justify-between h-[400px] bg-[#DDEDAA] p-8 rounded-3xl">
                <div className={`w-1/2 flex flex-col gap-8  ${instrumentSerif.className}`}>
                    <h1 className="text-4xl font-medium">Where automation meets intuition, and busy work becomes history.</h1>
                    <button className="bg-black flex gap-2 text-white p-2 w-fit rounded-sm">Get Started</button>
                </div>
                <div className="w-1/2 h-full">
                </div>
            </div>
        </div>
    )
}
