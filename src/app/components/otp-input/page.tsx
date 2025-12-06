import Otp from "@/components/works/Otp-input/Otp"

export default function OtpInputPage({
    children,
}:{children: React.ReactNode}){

    return(
        <div className="flex justify-center">
            <Otp></Otp>
        </div>
    )
}