export default function NavIcon({close, onClick}) {
    return (
        <div onClick={onClick} className={`flex flex-col items-center justify-center h-5 w-5 md:h-10 md:w-10 md:m-6 `}>
            <div className={`bg-nav-icon h-[2px] w-5 md:w-10 ${close ? "-rotate-[135deg]" : "translate-y-1.5 md:translate-y-3"} transition-all duration-500`}>
            </div>
            <div className={`bg-nav-icon h-[2px] w-5 md:w-10 ${close ? "rotate-[135deg] ": "-translate-y-1.5 md:-translate-y-3"} transition-all duration-500`}>
            </div>
        </div>
    )
}