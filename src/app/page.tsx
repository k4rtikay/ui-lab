import Image from "next/image";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-24 px-8 py-8">
      <header className="w-full flex justify-between text-sm">
        <p className="tracking-wide">MiraUI</p>
        <span className="flex gap-8"> 
          <button><SiGithub size={20}></SiGithub></button>
          <button><SiX size={20}></SiX></button>
        </span> 
      </header>
      <main className="flex flex-col items-center gap-12">
        <span className="flex flex-col items-center gap-2">
          <h1 className="text-3xl md:text-5xl font-medium">Build Beautiful Components, Faster.</h1>
          <p className="opacity-70 tracking-wide">Hand-picked components you can copy, remix, and drop straight into your next project.</p>
        </span>
        <button className="bg-[#E4E986] hover:bg-[#E8EC98] text-[#1A1A1A] font-medium px-2 py-1 rounded-md shadow-sm tracking-wide">Explore Now</button>
      </main>
    </div>
  );
}


