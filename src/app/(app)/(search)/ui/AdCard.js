import Link from "next/link";
import Image from "next/image";
import { BsImage } from "react-icons/bs"; // Import the BS Image icon

export default function AdCard({ item }) {
  const date = item.date_start
    ? new Date(item.date_start).toLocaleDateString("es-VE", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    : "";

  const description =
    item.description.length < 100
      ? item.description
      : item.description.slice(0, 100) + "...";

  const firstPhotoUrl = item.photos && item.photos.length > 0 ? item.photos[0].url : null;
  const firstPhotoAlt = item.photos && item.photos.length > 0 ? item.photos[0].alt || item.title : 'No image available';

  return (
    <div className="flex flex-col flex-1 bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 h-full">
      {/* Image or placeholder section */}
      <div className="w-full h-40 relative">
        {firstPhotoUrl ? (

          <img className="w-full h-full" src={firstPhotoUrl} alt={firstPhotoAlt} />

        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
            <BsImage className="w-10 h-10" />
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap gap-1">
          {item.categories.map((cat) => (
            <span
              key={`${cat.id}-${cat.name}`}
              className="text-[10px] font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
            >
              {cat.name}
            </span>
          ))}
        </div>

        <Link
          href={`/clasificado/${item.slug}`}
          className="font-semibold text-gray-900 text-base hover:text-red-500 transition-colors duration-150"
        >
          {item.title}
        </Link>

        <span className="text-xs text-gray-400">{date}</span>

        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
}