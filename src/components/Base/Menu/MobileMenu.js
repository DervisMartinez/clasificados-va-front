'use client';

import Link from "next/link";
import { useMenu } from "@/context/MenuContext";
import { useAuth } from "@/context/AuthContext";
import Drawer from "../Drawer/Drawer";


export default function MobileMenu() {
    const { isOpen, toggleMenu } = useMenu();
    const { user, logout } = useAuth();

    const handleLinkClick = () => {
        if (isOpen) toggleMenu();
    };

    return (
        <Drawer
            title="Menú"
            isOpen={isOpen}
            onClose={toggleMenu}
            side="left"
            width="w-64"
        >
            <div className="flex flex-col space-y-3">
                <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="font-semibold text-gray-800 hover:text-red-500 transition-colors"
                >
                    Inicio
                </Link>
                <Link
                    href="/categorias"
                    onClick={handleLinkClick}
                    className="font-semibold text-gray-800 hover:text-red-500 transition-colors"
                >
                    Categorías
                </Link>
                <Link
                    href="/publicar"
                    onClick={handleLinkClick}
                    className="font-semibold text-gray-800 hover:text-red-500 transition-colors"
                >
                    Publicar
                </Link>
                <Link
                    href="/perfil"
                    onClick={handleLinkClick}
                    className="font-semibold text-gray-800 hover:text-red-500 transition-colors"
                >
                    Perfil
                </Link>

                {user ? (
                    <button
                        onClick={() => {
                            logout();
                            toggleMenu();
                        }}
                        className="text-left font-semibold text-gray-800 hover:text-red-500 transition-colors"
                    >
                        Cerrar sesión
                    </button>
                ) : (
                    <Link
                        href="/login"
                        onClick={handleLinkClick}
                        className="font-semibold text-gray-800 hover:text-red-500 transition-colors"
                    >
                        Iniciar sesión
                    </Link>
                )}
            </div>
        </Drawer>
    );
}
