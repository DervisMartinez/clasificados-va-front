import Title from "@/components/Base/Title"

export default function FeaturedAdsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-8">
        <Title as="h2" title="Anuncios destacados" align="center" />
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-md shadow hover:shadow-lg transition overflow-hidden">

            <div className="p-4 flex flex-col gap-2">
              <div className="flex gap-2 max-w-full overflow-scroll hide-scrollbar">
                <span
                  className={`cursor-pointer px-2 py-1 rounded-full text-[10px] font-medium bg-blue-100 text-blue-800`}
                >
                  CATEGORIA
                </span>
                
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Laptop de última generación</h3>
              
              <p className="text-sm text-gray-600 line-clamp-2">
                Potente, ligera y perfecta para trabajar o estudiar.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}