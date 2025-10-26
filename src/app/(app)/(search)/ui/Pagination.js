"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Pagination({ meta }) {
  const pathname = usePathname(); // 👉 /busqueda o /categorias/x

  if (!meta?.links) return null;

  const [prevLink, ...rest] = meta.links;
  const nextLink = rest.pop();
  const pageLinks = rest;
  

  const buildHref = (url) => {
    if (!url) return "#";
    const search = new URL(url).searchParams.toString();
    return `${pathname}?${search}`;
  };

  return (
    <nav className="flex items-center justify-center mt-10">
      <ul className="flex items-center gap-2">
        {/* Botón anterior */}
        <li>
          <Link
            href={buildHref(prevLink?.url)}
            className={`rounded-full hover:bg-red-100 transition flex items-center gap-1 p-3 ${
              !prevLink?.url ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <LuChevronLeft size={16} />
            <span className="text-light text-sm">Anterior</span>
          </Link>
        </li>

        {/* Páginas */}
        {pageLinks.map((link, idx) => (
          <li className="hidden md:inline" key={idx}>
            <Link
              href={buildHref(link.url)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 border
                ${
                  link.active
                    ? "bg-red-500 text-white border-red-500 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-red-50 hover:border-red-400 hover:text-red-600"
                }`}
            >
              {link.label}
            </Link>
          </li>
        ))}

        {/* Botón siguiente */}
        <li>
          <Link
            href={buildHref(nextLink?.url)}
            className={`rounded-full hover:bg-red-100 transition flex items-center gap-1 p-3 ${
              !nextLink?.url ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <span className="text-light text-sm">Siguiente</span>
            <LuChevronRight size={16} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
