import "./animacja.css";

export function Animacja(){

    const baseClass = "fixed inset-y-0 z-[-1] opacity-50 -left-[100%] -right-[50%] " 

    return(
        <div className="rotate-30">
            <div className={`${baseClass} bg-gradient-to-r from-purple-500 to-pink-500 animate-slide-1`}></div>
            <div className={`${baseClass} bg-gradient-to-r from-blue-900 to-cyan-400 animate-slide-2`}></div>
            <div className={`${baseClass} bg-gradient-to-r from-green-800 to-green-200 animate-slide-3`}></div>
        </div>
    )
}