"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { LiaSearchSolid } from "react-icons/lia";

export default function SearchBar({ className }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const value = e.target.elements.search?.value.trim();

    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set("title", value);

    // Determinar destino según pathname
 /*    if (pathname.startsWith("/categoria")) {
      
      router.push(`${pathname}?${params.toString()}`);
    
    } else { */
      
      const queryString = value ? `?${params.toString()}` : "";

      router.push(`/busqueda${queryString}`);
   /*  } */
  };

  return (
    <form
      className={`${className} relative w-full flex items-center`}
      onSubmit={handleSubmit}
    >
      <input
        name="search"
        type="text"
        placeholder="Buscar anuncios..."
        aria-label="Buscar anuncios"
        defaultValue={searchParams.get("title") || ""}
        autoComplete="off"
        inputMode="search"
        className="w-full bg-white pl-4 pr-12 py-2 border border-gray-300 rounded-lg outline-none focus:ring-0 focus:border-gray-500 transition-all duration-150 placeholder-gray-400 focus:placeholder-gray-400"
      />
      <button
        type="submit"
        className="absolute right-3 text-gray-500 hover:text-red-500 transition-colors"
        aria-label="Buscar"
      >
        <LiaSearchSolid size="1.5rem" />
      </button>
    </form>
  );
}
