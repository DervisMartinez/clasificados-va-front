export default function Loader() {
    return (
        <div className="flex flex-col flex-1 space-y-4">
            <div className="h-12 w-32 bg-gray-200 rounded-md animate-pulse" />

            {/* Sections Skeleton */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <div className="space-y-2 mt-2">
                    <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
                </div>
                <div className="space-y-2 mt-2">
                    <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
                </div>
                <div className="space-y-2 mt-2">
                    <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
                </div>
                <div className="space-y-2 mt-2">
                    <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
                </div>
            </div>
            <div className="border-b border-gray-100 flex-grow" />

            {/* Buttons Skeleton */}
            <div className="flex justify-between mt-6">
                <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-12 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
        </div>
    )
}