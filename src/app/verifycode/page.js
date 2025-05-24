import Image from "next/image";
import { MailIcon } from "@/components/icons/mail-icon";
import { Input } from "@/components/ui/input";
import { IconLockAccess, IconBrandGoogle, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
function RectangleBlurBg({ gradient, blur, opacity = "opacity-40", shadow = "", className }) {
    return (
        <div className={`absolute rounded-full ${gradient} ${blur} ${opacity} ${shadow} ${className}`} />
    );
}

export default function Login(){
    return(
        <div className="flex items-center justify-center bg-gray-950 min-h-screen overflow-hidden overflow-y-hidden">
            {/* Background */}
            <RectangleBlurBg 
            gradient="bg-gradient-to-br from-blue-500 via-blue-700 to-black"
            opacity="opacity-40"
             blur="blur-3xl"
             className="absolute w-[25rem] h-[50rem] z-0 pointer-events-none left-[-5rem] bottom-[-10rem] transform rotate-[-225deg]"
            />
            <div className="relative w-[23rem] h-[23rem] bg-gray-900 rounded-2xl p-6 z-20">
                <div className="flex flex-col items-center gap-y-4">
                    <div className="flex items-center justify-center">
                        {/* Logo */}
                        <Image
                         src="/images/SigninLogo.PNG" 
                         alt="Logo" 
                         width={50}
                          height={50} 
                        className="relative rounded-2xl mt-1"/>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        {/* Heading */}
                        <div className="flex-1">
                            <h1 className="text-xl">Enter Verification Code</h1>
                        </div>
                        
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        {/* Form */}
                        <div className="flex-1 w-[20rem]">
                            {/* Verify code */}
                            <Input id="code" placeholder="verify code" type="text" className="w-full" icon={<MailIcon />}/>
                        </div>
                        <div className="flex-1 w-[20rem]">
                            {/* Submit button */}
                            <button
                            className="group/btn cursor-pointer relative block h-10 w-full rounded-md bg-gradient-to-br from-blue-800 via-blue-900 to-black font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit"
                            >
                            Verify &rarr;
                            </button>
                        </div>
                    </div>
                </div>
                 <RectangleBlurBg 
                gradient="bg-gradient-to-br from-blue-600 via-purple-800 to-black"
                opacity="opacity-40"
                blur="blur-3xl"
                className="absolute w-[25rem] h-[80rem] z-0 pointer-events-none right-[-20rem] bottom-[-15rem] transform rotate-[-225deg]"
            />
            </div>
        </div>
    )
}   