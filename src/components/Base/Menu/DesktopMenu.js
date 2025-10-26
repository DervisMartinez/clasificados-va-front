import Link from "next/link"

export default function DesktopMenu() {
    return (
        <>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
                <Link
                    href="/"
                    className="font-semibold text-gray-800 hover:text-red-500 transition-colors"
                >
                    Inicio
                </Link>
                <Link
                    href="/busqueda"
                    className="font-semibold text-gray-800 hover:text-red-500 transition-colors"
                >
                    Categorías
                </Link>
                <Link
                    href="/publicar"
                    className="font-semibold text-gray-800 hover:text-red-500 transition-colors"
                >
                    Publicar
                </Link>
            </div>

            {/* User Links Desktop */}
            <div className="hidden md:flex space-x-5">
                {/*    <Link
                            href="/perfil"
                            className="font-semibold text-gray-800 hover:text-red-500 transition-colors"
                        >
                            Contacto
                        </Link> */}
                <a
                    target="_blank"
                    href="https://radioamerica.com.ve/"
                    className="font-semibold text-gray-800 hover:text-red-500 transition-colors"
                >
                    Portal de noticias
                </a>

            </div>
        </>
    )
}