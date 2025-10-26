import Link from "next/link";
import Image from "next/image";
import { BsImage } from "react-icons/bs"; // Importa el icono de React Icons

export default function AdComponent({ item }) {
    const date = item.date_start ? new Date(item.date_start).toLocaleDateString("es-VE", { day: "numeric", month: "long", year: "numeric", }) : "";

    const description = item.description.length < 250
        ? item.description
        : item.description.slice(0, 250) + "...";

    const firstImageUrl = item.photos && item.photos.length > 0 ? item.photos[0].url : null;
    const firstImageAlt = item.photos && item.photos.length > 0 ? item.photos[0].alt || item.title : 'Imagen del clasificado';

    return (
        <li className="flex gap-4 bg-white p-4 rounded-md shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            {/* Contenedor de la Imagen o Placeholder - a la izquierda */}
            <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden relative bg-gray-100 flex items-center justify-center">
                {firstImageUrl ? (
                   
                    <img className="w-full h-full object-cover" src={firstImageUrl} alt={firstImageAlt} srcset="" />
                ) : (
                    // Placeholder usando un icono de react-icons
                    <BsImage className="w-10 h-10 text-gray-400" />
                )}
            </div>

            {/* Contenedor del contenido del texto - a la derecha */}
            <div className="flex flex-col flex-grow">
                <div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                        <div className="flex gap-2 max-w-full overflow-x-auto hide-scrollbar">
                            {item.categories.map((cat) => (
                                <span
                                    key={`${cat.id}-${cat.name}`}
                                    className="flex-shrink-0 px-2 py-1 rounded-full text-[10px] font-medium bg-blue-100 text-blue-800"
                                >
                                    {cat.name}
                                </span>
                            ))}
                        </div>
                        {item.categories && item.categories.length > 0 && <span className="text-gray-300">•</span>}
                        <span>
                            {date}
                        </span>
                    </div>
                    <Link
                        href={`/clasificado/${item.slug}`}
                        className="text-gray-900 font-bold text-lg hover:text-red-500 transition-colors duration-150"
                    >
                        {item.title}
                    </Link>
                </div>

                <p className="text-gray-600 text-sm mt-1 line-clamp-3">
                    {description}
                </p>
            </div>
        </li>
    );
}