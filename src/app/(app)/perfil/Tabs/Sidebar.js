
export default function Sidebar({ activeTab, tabs, setActiveTabIndex }) {

    return (
        <aside className="w-full md:w-64 bg-white rounded-md  p-6 flex flex-col ">
            <nav className="flex md:flex-col flex-row gap-4 md:space-x-0 overflow-x-auto">
                {tabs.map(({ index, title }) => (
                    <button
                        key={index}
                        className={`whitespace-nowrap text-center md:text-left relative py-2 text-sm sm:text-base font-medium transition-all duration-300 ${activeTab.title === title ? "font-semibold" : "text-gray-500 hover:text-gray-700"}`}
                        onClick={() => setActiveTabIndex(index)}
                    >
                        {title}

                        {/* underline indicator */}
                        <span
                            className={`absolute left-0 bottom-0 h-[2px] w-full rounded-md transition-all origin-left duration-300 ${activeTab.title === title  ? "bg-gradient-to-r from-red-500 to-red-700 scale-x-100" : "bg-transparent scale-x-0"}`}
                        />
                    </button>

                ))
                }

            </nav>
        </aside>
    )
}