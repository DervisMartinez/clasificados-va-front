import Link from "next/link"

export default function Categories({ className,categories }) {
    return (
        <div className={`${className} w-full bg-white shadow-xl p-6 rounded-md z-10 self-start mt-4`}>
            <div className="border-b border-gray-200 pb-2 mb-2">
                <span className="block text-lg font-semibold text-gray-800">
                    Todas las categorías
                </span>
            </div>
            <ul className="space-y-2">
                {categories.map((cat) => (
                    <li key={cat.id} className="py-2 border-b-1 border-gray-300 border-dashed cursor-pointer">
                        <Link href={`/categoria/${cat.slug}`}>{cat.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}