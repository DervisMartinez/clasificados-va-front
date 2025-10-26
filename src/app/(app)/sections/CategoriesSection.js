
import { LuLaptop, LuHeart, LuUsers, LuVolleyball, LuHouse } from "react-icons/lu";
import Button from "@/components/Button";
import Title from "@/components/Base/Title";
import Link from "next/link";

export default function CategoriesSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col gap-8">
        <Title as="h2" title="Categorías populares" align="center" />

        <div className="text-center text-xl font-light">
          <p className="max-w-2xl mx-auto">
            ¡Encuentra en segundos lo que buscas!
          </p>
          <p className="max-w-2xl mx-auto">
            Acá tienes las categorías <span className="font-bold">más buscadas</span>
          </p>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          <Link href="/categoria/tecnologia" className="flex flex-col items-center gap-2 p-6 rounded-md border bg-white hover:shadow-md hover:scale-105 transition cursor-pointer">
            <LuLaptop size={36} className="text-red-500" />
            <span className="font-medium text-gray-700">Tecnología</span>
          </Link>
          <Link href="/categoria/empleo" className="flex flex-col items-center gap-2 p-6 rounded-md border bg-white hover:shadow-md hover:scale-105 transition cursor-pointer">
            <LuHeart size={36} className="text-red-500" />
            <span className="font-medium text-gray-700">Empleo</span>
          </Link>
          <Link href="/categoria/inmuebles" className="flex flex-col items-center gap-2 p-6 rounded-md border bg-white hover:shadow-md hover:scale-105 transition cursor-pointer">
            <LuHouse size={36} className="text-red-500" />
            <span className="font-medium text-gray-700">Inmuebles</span>
          </Link>
          <Link href="/categoria/comunidad" className="flex flex-col items-center gap-2 p-6 rounded-md border bg-white hover:shadow-md hover:scale-105 transition cursor-pointer">
            <LuUsers size={36} className="text-red-500" />
            <span className="font-medium text-gray-700">Comunidad</span>
          </Link>
          <Link href="/categoria/deportes" className="flex flex-col items-center gap-2 p-6 rounded-md border bg-white hover:shadow-md hover:scale-105 transition cursor-pointer">
            <LuVolleyball size={36} className="text-red-500" />
            <span className="font-medium text-gray-700">Deportes</span>
          </Link>
        </div>

        <div className="text-center">
          <Button nav href="/busqueda" label="Ver todas las categorías" borderColor="" />
        </div>
      </div>
    </section>
  )
}