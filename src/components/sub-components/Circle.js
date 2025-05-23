export default function Circle({
    gradient,
    blur,
    opacity="opacity-40",
    shadow="",
    className
}){
    return(
        <div
        className={`rounded-full absolute ${gradient} ${blur} ${opacity} ${shadow} ${className}`}
        ></div>
    )
}