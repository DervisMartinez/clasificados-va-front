// app/(search)/layout.jsx
import { getCategories } from "@/lib/api/utils";
import Link from "next/link";
import Filters from "./ui/Filters";

export default async function SearchLayout({ children }) {

    const categories = await getCategories()

    return (

        <div className="px-4 sm:px-6 lg:px-12 py-6 flex flex-col lg:flex-row gap-6">
            {/* Contenido principal primero en mobile */}
            
            <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-6">
                {/* Categorías */}
                <div className="bg-white p-4 rounded-md shadow">
                    <h2 className="font-semibold mb-2">Categorías</h2>
                    <ul className="flex flex-col gap-2">
                        {categories.map((cat) => (
                            <li key={cat.id}>
                                <Link
                                    href={`/categoria/${cat.slug}`}
                                    className="block py-2 border-b-2 border-transparent hover:border-orange-500 transition-colors text-gray-700 text-sm"
                                >
                                    {cat.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Filtros */}
              <Filters />
            </aside>

            <main className="flex-1">
                {children}
            </main>

            {/* Aside: pasa abajo en mobile, izquierda en desktop */}
            
        </div>



    );
}
