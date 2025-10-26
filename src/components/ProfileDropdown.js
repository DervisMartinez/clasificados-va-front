"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { LiaUser } from "react-icons/lia";
import { LuLogOut, LuLogIn } from "react-icons/lu";
import { useAuth } from "@/context/AuthContext";

export default function ProfileDropdown() {
  
  const { user, logout, loading } = useAuth();
  
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {

      await logout();

      setOpen(false); // Cerrar el dropdown inmediatamente

    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer p-1 ml-4 text-gray-800 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-0"
        aria-label="Abrir menú de perfil"
        disabled={loading} // Deshabilitar el botón mientras loading es true
      >
        <LiaUser size="2rem" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {user ? (
            <>
              {!loading &&
                <Link
                  href="/perfil"
                  onClick={() => setOpen(false)}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Perfil
                </Link>
              }
              <button
                onClick={handleLogout}
                className="cursor-pointer w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                disabled={loading} // Deshabilitar solo este botón durante loading
              >
                <LuLogOut className="text-base" />
                {loading ? "Cerrando sesión..." : "Cerrar sesión"}
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="w-full text-left px-4 py-3 text-sm text-blue-600 hover:bg-blue-50 flex items-center gap-2"
            >
              <LuLogIn className="text-base" />
              Iniciar sesión
            </Link>
          )}
        </div>
      )}
    </div>
  );
}