export default function DotsLoader() {
    return (
        <div className="flex justify-center space-x-1 opacity-0 animate-fade-in">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce-delay delay-0"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce-delay delay-150"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce-delay delay-300"></div>
        </div>
    )
}