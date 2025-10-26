import Button from "@/components/Button"

export default function CtaSection() {
    return (
        <section className="bg-secondary py-20">
            <div className="max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center gap-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                    ¿Listo para publicar tu anuncio?
                </h2>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                    Empieza hoy mismo
                </p>

                
                <Button nav href="/registrate" label="Únete ahora" bgColor="bg-white" hoverBg="hover:bg-gray-100" textColor="text-orange-500" borderColor=""  />

               {/*  <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition">
                    Publicar mi anuncio
                </button> */}
            </div>
        </section>
    )
}