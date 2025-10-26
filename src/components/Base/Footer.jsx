import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white px-4 py-10">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* Columna izquierda: Radio América */}
        <div className="lg:w-1/3">
          <h3 className="text-red-600 text-lg font-bold uppercase">
            Radio América
          </h3>
          <p className="mt-2 text-sm leading-relaxed">
            La Onda de la Alegría, 72 años de historia y trayectoria al servicio de Venezuela.
          </p>
          <img
            className="mt-4 h-32 w-auto"
            src="/logo-ra-blanco-cropped.png"
            alt="Radio América"
          />
        </div>

        {/* Columna derecha: Enlaces + Políticas + Contacto */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
           <div>
            <h3 className="text-red-600 text-lg font-bold uppercase">Políticas de uso</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/terminos-y-condiciones">Términos y condiciones</Link></li>
              <li><Link href="/politicas-de-publicacion">Políticas de publicación</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-red-600 text-lg font-bold uppercase">Enlaces rápidos</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/categoria/empleos">Empleos</Link></li>
              <li><Link href="/categoria/inmuebles">Inmuebles</Link></li>
              <li><Link href="/categoria/vehiculos">Vehículos</Link></li>
              <li><Link href="/categoria/servicios">Servicios</Link></li>
              <li><Link href="/categoria/comunidad">Comunidad</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-red-600 text-lg font-bold uppercase">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><LuMapPin className="inline mr-2" /> Avenida Michelena. Valencia, Carabobo</li>
              <li><LuPhone className="inline mr-2" /> (0422) 4302348</li>
              <li><LuMail className="inline mr-2" /> info@radioamerica.com.ve</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Línea divisoria + disclaimer */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
        <p>
          Radio América no se hace responsable de los eventos o acciones que se
          publiquen por estas vías. Los anuncios son responsabilidad exclusiva
          de sus autores.
        </p>
        <p className="mt-4">
          &copy; {currentYear} Clasificados RA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
