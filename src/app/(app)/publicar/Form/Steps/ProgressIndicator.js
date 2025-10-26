export default function ProgressIndicator({steps}) {
    return (
        <ul className="space-y-10 relative">
            {steps.map(({ index, title, description, status }) => (
                <li key={index} className="relative flex items-start">
                    {/* Step indicators */}
                    <div className="relative z-10 transition-all duration-300 ease-in-out">
                        {status === "completed" && (
                            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center transition-all duration-300 ease-in-out">
                                <svg
                                    className="w-3 h-3 text-white transition-opacity duration-300 ease-in-out opacity-100 scale-100"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}
                        {["active", "upcoming"].includes(status) && (
                            <div
                                className={`w-6 h-6 bg-gray-100 rounded-full border-2 flex items-center justify-center transition-all duration-300 ease-in-out ${status === "active" ? "border-red-500" : "border-gray-400"}`}
                            >
                                <div
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out scale-100 opacity-100 ${status === "active" ? "bg-red-500" : "bg-gray-400"}`}
                                />
                            </div>
                        )}

                    </div>

                    {/* Step content */}
                    <div
                        className={`ml-5 transition-all duration-300 ease-in-out ${status === "active" || status == "completed" ? "opacity-100 translate-x-0" : "opacity-60 translate-x-1"
                            }`}
                    >
                        <div className="text-sm font-semibold text-gray-800">{title}</div>
                        <div className="text-sm text-gray-500">{description}</div>
                    </div>

                    {/* Vertical connector */}
                    {index !== steps.length - 1 && (
                        <span className="absolute left-3 top-6 w-px h-[calc(100%+2.5rem)] bg-gray-300 transition-all duration-300 ease-in-out" />
                    )}
                </li>
            ))}
        </ul>
    )
}