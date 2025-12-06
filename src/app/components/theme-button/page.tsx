import ThemeButton from "@/components/works/Theme-button/theme-button"

export default function ThemeButtonPage({
    children,
}:{children: React.ReactNode}){

    return(
        <div className="flex justify-center">
            <ThemeButton></ThemeButton>
        </div>
    )
}