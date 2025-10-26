"use client";

import { useState } from "react";
import { useRouter, useSearchParams,usePathname } from "next/navigation";

export default function Filters() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h2 className="font-semibold mb-2">Filtros</h2>

      {/* Drawer toggle solo en mobile */}
      <button
        className="lg:hidden text-sm text-red-500"
        onClick={() => setOpen(!open)}
      >
        {open ? "Cerrar filtros" : "Abrir filtros"}
      </button>

      <div className={`${open ? "block" : "hidden"} lg:block mt-2 flex flex-col gap-2`}>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="desc"
            className="accent-red-500"
            defaultChecked={searchParams.get("sort") === "desc" || !searchParams.get("sort")}
            onChange={() => handleChange("desc")}
          />
          <span className="text-gray-700 text-sm">Más nuevos</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="asc"
            className="accent-red-500"
            defaultChecked={searchParams.get("sort") === "asc"}
            onChange={() => handleChange("asc")}
          />
          <span className="text-gray-700 text-sm">Más antiguos</span>
        </label>
      </div>
    </div>
  );
}
