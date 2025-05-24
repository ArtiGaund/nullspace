import Image from "next/image"
export default function Register(){
    return(
        <div className="flex items-center justify-center bg-gray-950 min-h-screen">
            <div className="relative w-[23rem] h-[25rem] bg-gray-900 rounded-2xl">
                <div className="flex flex-col items-center">
                    <div className="">
                        {/* Logo */}
                        <Image
                         src="/images/SigninLogo.PNG" 
                         alt="Logo" 
                         width={50}
                          height={50} 
                        className="relative rounded-2xl top-[2rem]"/>
                    </div>
                    <div className="">
                        {/* Heading */}
                        <h1>Welcome</h1>
                        <span>Already have   
                            <a href="/login">Signin</a>
                        </span>
                    </div>
                    <div className="">
                        {/* Form */}
                    </div>
                    <div className="">
                        {/* Social authentication */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}   