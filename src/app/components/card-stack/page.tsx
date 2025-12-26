"use client";

import React from "react";
import CardStack from "@/components/works/Card-stack/CardStack";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
export default function CardStackPage() {

    // 🚅 The Trip Data
    const items = [
        {
            id: 1,
            origin: "OSAKA",
            originCode: "OSA",
            dest: "TOKYO",
            destCode: "TYO",
            kanji: "東京",
            date: "OCT 24",
            time: "08:30 AM",
            seat: "12A",
            class: "FIRST",
            price: "¥14,500",
            color: "text-orange-500",
            border: "border-orange-500",
        },
        {
            id: 2,
            origin: "TOKYO",
            originCode: "TYO",
            dest: "KYOTO",
            destCode: "KYO",
            kanji: "京都",
            date: "NOV 02",
            time: "10:15 AM",
            seat: "04C",
            class: "BUSINESS",
            price: "¥11,200",
            color: "text-blue-500",
            border: "border-blue-500",
        },
        {
            id: 3,
            origin: "KYOTO",
            originCode: "KYO",
            dest: "HIROSHIMA",
            destCode: "HIJ",
            kanji: "広島",
            date: "DEC 12",
            time: "02:45 PM",
            seat: "08F",
            class: "STANDARD",
            price: "¥9,800",
            color: "text-emerald-500",
            border: "border-emerald-500",
        },
        {
            id: 4,
            origin: "TOKYO",
            originCode: "TYO",
            dest: "SHIBUYA",
            destCode: "SBY",
            kanji: "渋谷",
            date: "JAN 05",
            time: "11:00 PM",
            seat: "STD",
            class: "LOCAL",
            price: "¥240",
            color: "text-purple-500",
            border: "border-purple-500",
        },
    ];

    return (
        <div className="flex justify-center items-center py-20 min-h-[500px]">
            {/* Dimensions: Wide ticket shape */}
            <CardStack className="h-56 w-[340px] md:h-60 md:w-[500px]">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={cn(
                            "relative flex h-full w-full overflow-hidden rounded-3xl", // Rounded-3xl for smooth ticket corners
                            "bg-[#f0f0f0] dark:bg-neutral-900", // Off-white "Ticket Paper"
                            "border border-neutral-200 dark:border-neutral-800",
                            "shadow-sm",
                            // Group focus logic
                            "group-focus-visible:ring-2 group-focus-visible:ring-neutral-400 group-focus-visible:ring-offset-2 dark:ring-offset-neutral-950"
                        )}
                    >
                        {/* ==============================
                            LEFT SECTION (70%) - Main Info
                           ============================== */}
                        <div className="flex-1 flex flex-col justify-between p-6 pr-8">

                            {/* Header: Date & Class */}
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Date</span>
                                    <span className="text-sm font-bold text-neutral-800 dark:text-neutral-200">{item.date}</span>
                                </div>
                                <div className="flex items-center px-2 py-2 rounded border border-neutral-300 dark:border-neutral-700">
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">{item.class}</span>
                                </div>
                            </div>

                            {/* Main Route: OSA -> TYO */}
                            <div className="flex items-center gap-4 my-2">
                                <div>
                                    <div className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tighter">
                                        {item.originCode}
                                    </div>
                                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest text-center mt-1">
                                        {item.origin}
                                    </div>
                                </div>

                                {/* Arrow / Graphic */}
                                <div className="flex-1 h-[1.23px] bg-neutral-300 dark:bg-neutral-700 relative">
                                </div>

                                <div className="text-right">
                                    <div className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tighter">
                                        {item.destCode}
                                    </div>
                                    <div className="flex flex-col items-end mt-1">
                                        <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                                            {item.dest}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer: Time & Price */}
                            <div className="flex justify-between items-end">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Boarding</span>
                                    <span className="text-xl font-bold font-mono text-neutral-800 dark:text-neutral-200">{item.time}</span>
                                </div>
                                <span className="text-lg font-bold text-neutral-900 dark:text-white">{item.price}</span>
                            </div>
                        </div>


                        {/* ==============================
                            DIVIDER (The "Tear" Line)
                           ============================== */}
                        <div className="relative w-[1px] h-full bg-neutral-100 dark:bg-neutral-800 flex flex-col justify-between py-2">
                            {/* Top Notch */}
                            {/* <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-[#e5e5e5] dark:bg-neutral-950 z-10" /> */}

                            {/* Dashed Line Visual */}
                            <div className="h-full w-full border-l-2 border-dashed border-neutral-300 dark:border-neutral-700 opacity-50" />

                            {/* Bottom Notch */}
                            {/* <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-[#e5e5e5] dark:bg-neutral-950 z-10" /> */}
                        </div>


                        {/* ==============================
                            RIGHT SECTION (30%) - Seat & Barcode
                           ============================== */}
                        <div className="w-24 md:w-32 flex flex-col justify-between p-4 bg-neutral-50 dark:bg-neutral-800/50">

                            {/* Seat Number */}
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-mono uppercase text-neutral-400">Seat</span>
                                <span className="text-3xl font-black text-neutral-900 dark:text-white">{item.seat}</span>
                            </div>

                            {/* Kanji Stamp */}
                            <div className="flex flex-col items-center justify-center opacity-80">
                                <div className={cn("w-16 h-16 rounded-full border-2 flex items-center justify-center rotate-[-12deg]", item.border)}>
                                    <span className={cn("text-2xl font-black", item.color)}>
                                        {item.kanji}
                                    </span>
                                </div>
                            </div>

                            {/* Fake Barcode */}
                            <div className="flex gap-[2px] h-8 w-full"
                                style={{ background: "repeating-linear-gradient(90deg, #000, #000 1px, #fff 1px, #fff 3px, #000 3px, #000 4px)" }}>
                            </div>
                        </div>

                    </div>
                ))}
            </CardStack>
        </div>
    );
}