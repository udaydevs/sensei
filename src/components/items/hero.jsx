"use client"
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";
import { useRouter } from "next/navigation";
import Pattern from "../ui/pattern";

export default function Hero() {
    const router = useRouter()

return (
    <div className="relative w-full min-h-screen sm:h-screen flex flex-col items-center justify-end">
        <div className="absolute w-[98%] z-10 flex justify-center lg:justify-end flex-col items-center h-screen bg-white bottom-0 left-1/2 transform -translate-x-1/2 rounded-tl-3xl   rounded-tr-3xl border">
            <Pattern/>
            <div className="z-10 border rounded-4xl px-1 sm:px-5 text-gray-600 text-xs sm:text-md" style={{ fontFamily: 'Noto Sans JP', fontWeight: 600 }}>
                日本語を学ぶのは
                <span style={{ fontFamily: 'Noto Sans JP', fontWeight: 900 }} className="text-primary px-1 sm:px-2 ">楽しいです</span>。
            </div>

            <div className="font-bold z-10 flex flex-col items-center text-xl sm:text-3xl md:text-5xl lg:text-6xl">
                <div className="mb-1 sm:mb-3 text-center  text-[#1c1d26] ">Master Japanese Faster <br /> with <span className="bg-linear-to-r from-[#a17de9] via-[#ab90e0] to-[#d7d0e6] bg-clip-text text-transparent">AI Precision</span> Learning</div>
            </div>

            <div className="font-medium  text-[#5d5858]  z-10 flex justify-center items-center flex-col text-[17px]">
                <div className="w-[90%] sm:w-[65%] text-[9px] sm:text-sm text-center mt-4 sm:mt-6">
                    Learn Japanese with an AI tutor that adapts to your pace and goals. It personalizes lessons, corrects pronunciation in real time, and guides you through grammar, kanji, and conversation to help you speak confidently.
                </div>
            </div>

            <div className="flex flex-row mt-6 z-10 gap-2 sm:gap-4 items-center justify-center">
                <Button
                    className="bg-black hover:bg-black/75 font-semibold
                   text-xs sm:text-base
                   text-white rounded-xl sm:rounded-2xl
                   h-9 sm:h-12
                   px-4 sm:px-8
                   min-w-30"
                >
                    Start learning
                </Button>

                <Button
                    className="font-semibold
                   text-xs sm:text-base
                   rounded-xl sm:rounded-2xl
                   h-9 sm:h-12
                   px-4 sm:px-8
                   min-w-30
                   hover:bg-white"
                    onClick={() => router.push("/chat")}
                    variant="outline"
                >
                    Try a chat
                </Button>
            </div>


            <div className="relative z-9 mt-10 h-0  lg:h-[50%] w-full   flex justify-center overflow-hidden">
                <div className="w-full max-w-125 h-0 lg:h-87.5 hidden overflow-hidden lg:block">
                    <Globe className="mt-96 scale-[1.2] -translate-y-[30%]" />
                </div>
            </div>
        </div>
    </div>
);
}
