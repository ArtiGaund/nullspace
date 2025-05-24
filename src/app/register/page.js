import Image from "next/image";
import { MailIcon } from "@/components/icons/mail-icon";
import { Input } from "@/components/ui/input";
import { IconLockAccess, IconBrandGoogle, IconBrandGithub, IconBrandLinkedin, IconUser } from "@tabler/icons-react";

function RectangleBlurBg({ gradient, blur, opacity = "opacity-40", shadow = "", className }) {
    return (
        <div className={`absolute rounded-full ${gradient} ${blur} ${opacity} ${shadow} ${className}`} />
    );
}

export default function Register(){
    return(
        <div className="flex items-center justify-center bg-gray-950 min-h-screen overflow-hidden overflow-y-hidden">
            {/* Background */}
            <RectangleBlurBg 
            gradient="bg-gradient-to-br from-blue-500 via-blue-700 to-black"
            opacity="opacity-40"
             blur="blur-3xl"
             className="absolute w-[25rem] h-[50rem] z-0 pointer-events-none left-[-5rem] bottom-[-10rem] transform rotate-[-225deg]"
            />
            <div className="relative w-[23rem] h-[30rem] bg-gray-900 rounded-2xl p-6 z-20">
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
                            <h1 className="text-xl">Welcome</h1>
                        </div>
                        <div className="flex-1">
                            <span className="text-xs text-gray-500">Already have an account ? &nbsp;  
                                <a href="/login" className="text-white">Signin</a>
                             </span>
                        </div>
                        
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        {/* Form */}
                         <div className="flex-1 w-[20rem]">
                            {/* User name */}
                            <Input id="name" placeholder="username" type="text" className="w-full" icon={<IconUser />}/>
                        </div>
                        <div className="flex-1 w-[20rem]">
                            {/* Email */}
                            <Input id="email" placeholder="email address" type="email" className="w-full" icon={<MailIcon />}/>
                        </div>
                        <div className="flex-1 w-[20rem]">
                            {/* Password */}
                            <Input id="password" placeholder="password" type="password" className="w-full" icon={<IconLockAccess />}/>
                        </div>
                        <div className="flex-1 w-[20rem]">
                            {/* Submit button */}
                            <button
                            className="group/btn cursor-pointer relative block h-10 w-full rounded-md bg-gradient-to-br from-blue-800 via-blue-900 to-black font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit"
                            >
                            Create Account &rarr;
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-4">
                        {/* Divider */}
                        <div className="flex-1">
                            <div className="w-[8rem] h-[1px] bg-zinc-500" />
                        </div>
                        <div className="flex-1">
                            <span className="text-zinc-500">OR</span>
                        </div>
                        
                        <div className="flex-1">
                            <div className="w-[8rem] h-[1px] bg-zinc-500" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-4">
                        {/* Social authentication */}
                        <div className="flex-1 w-[5.5rem] h-[2rem]">
                            <button
                            className="flex cursor-pointer items-center justify-center group/btn relative h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit"
                            >
                                <IconBrandGoogle />
                            </button>
                        </div>
                        <div className="flex-1 w-[5.5rem] h-[2rem]">
                            <button
                            className="flex cursor-pointer items-center justify-center group/btn relative h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit"
                            >
                                <IconBrandGithub />
                            </button>
                        </div>
                        <div className="flex-1 w-[5.5rem] h-[2rem]">
                            <button
                            className="flex cursor-pointer items-center justify-center group/btn relative h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit"
                            >
                                <IconBrandLinkedin />
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