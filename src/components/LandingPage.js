"use client";

import Circle from "./sub-components/Circle";
import { useRouter } from "next/navigation";

export default function LandingPage(){
    const router = useRouter();
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[80rem] h-[40rem] bg-slate-700 rounded-[5rem] relative overflow-visible">
                {/* Inner content with overflow-hidden */}
                <div className="relative w-[72rem] h-[35rem] bg-slate-950 left-[4rem] rounded-b-[3rem] flex flex-col items-center overflow-hidden">
                    <div className="flex-1 flex">
                        {/* content */}
                        {/* HeadLine */}
                        <div className="relative flex flex-row p-5 top-[2rem] gap-[5rem]">
                            <div className="flex-[2] w-2/3">
                                <span className="text-[5rem]">Keep Learning On Track</span>
                            </div>
                            <div className="relative flex-[1] w-1/3 top-[5rem]">
                                <span className="text-gray-500">Start Learning now</span>
                                <div className="relative top-[2rem]">
                                    <button 
                                    onClick={() => router.replace("/login")}
                                    className="w-[8rem] h-[3rem] bg-pink-700 rounded-4xl cursor-pointer">
                                        Start Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Blur circle */}
                        <Circle
                            gradient="bg-gradient-to-br from-yellow-500 via-yellow-700 to-black"
                            opacity="opacity-40"
                            blur="blur-3xl"
                            className="w-[490px] h-[490px] absolute left-[200px] bottom-0 -translate-x-1/2 translate-y-1/2"
                        />
                    </div>
                </div>
                {/* Overlapping circle OUTSIDE inner div */}
                <div className="absolute left-1/2 bottom-[2.6rem] -translate-x-1/2 translate-y-1/2 w-[10.5rem] h-[4.8rem] bg-slate-950 flex items-center justify-center text-white text-xl">
                    {/* Circle content */}
                </div>
                {/* SVG curve OUTSIDE inner div */}
                <svg
                    className="absolute bottom-[-1.2rem] left-1/2 -translate-x-1/2 w-[22rem] h-25 z-20"
                    viewBox="0 0 480 80"
                    preserveAspectRatio="none"
                >
                    <path
                        d="
                            M0,0 
                            H120 
                            C170,0 170,60 240,60 
                            C310,60 310,0 360,0 
                            H480 
                            V64 
                            H0  
                            Z
                        "
                        fill="#334155"
                    />
                </svg>
            </div>
        </div>
    )
}