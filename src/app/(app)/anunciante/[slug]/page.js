//Server imports
import Title from "@/components/Base/Title";
import Button from "@/components/Button";
import Categories from "../../clasificado/[slug]/ui/Categories";
import { getCategories, getAuthor } from "@/lib/api/utils";
import AdComponent from "../../(search)/ui/AdComponent";
import { LuMapPin } from "react-icons/lu";

export async function generateMetadata({ params }) {
  
  const author = await getAuthor(params.slug);
  
  if (!author) return {};

  const authorType = author.document_type === "J" ? "Persona jurídica" : "Persona natural";

  const authorName =
    author.document_type === "J"
      ? `${author.name}`
      : `${author.name} ${author.last_name}`;

  return {
    title: `${authorName} | Clasificados RA`,
    description: `Consulta los anuncios publicados por ${authorName}, ${authorType} en Clasificados RA.`,
    openGraph: {
      title: `${authorName} | Clasificados RA`,
      description: `Consulta los anuncios publicados por ${authorName}, ${authorType} en Clasificados RA.`,
      url: `/anunciante/${params.slug}`,
      type: "profile",
      images: [
        {
          url: "/logo-ra.png",
          width: 1200,
          height: 630,
          alt: `${authorName}`,
        },
      ],
    },
  };
}

export default async function Advertiser({ params }) {
  const categories = await getCategories();
  const author = await getAuthor(params.slug);

  if (!author) notFound(); 
  

  const authorType =
    author.document_type === "J" ? "Persona jurídica" : "Persona natural";
  const authorName =
    author.document_type === "J"
      ? `${author.name}`
      : `${author.name} ${author.last_name}`;

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Info del anunciante */}
        <div className="w-full lg:w-2/6 space-y-8">
          <div className="w-full bg-white shadow-sm rounded-xl p-6 border border-gray-100">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-gray-200 pb-2 mb-2">
              <img
                className="rounded-full h-16 w-16 border border-gray-200"
                src="/logo-ra.png"
                alt={`Logo de ${authorName}`}
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {authorName}
                </h2>
                <p className="text-sm text-gray-500">{authorType}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <p className="text-xs text-gray-500">Miembro desde</p>
                <p className="text-lg font-semibold text-gray-800">
                  {new Date(author.created_at).getFullYear()}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Anuncios</p>
                <p className="text-lg font-semibold text-gray-800">
                  {author.clasificados.length}
                </p>
              </div>
              {author.ubication?.city && author.ubication?.state && (
                <div className="text-center">
                  <p className="text-xs text-gray-500">{`${author.ubication.city}, ${author.ubication.state}`}</p>
                  <LuMapPin className="mt-0.5 mx-auto text-xl" />
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6">
              <Button
                className="w-full"
                icon="Whatsapp"
                href={`https://api.whatsapp.com/send?phone=${author.phone_number}&text=Hola%2C%20estoy%20interesado%20en%20tu%20anuncio`}
                nav={false}
                label="Contactar por WhatsApp"
                bgColor="bg-green-500"
                focusRing="focus:ring-green-300"
                hoverBg="hover:bg-green-600"
                borderColor=""
              />
            </div>
          </div>

          <Categories className="hidden md:block" categories={categories} />
        </div>

        {/* Anuncios publicados */}
        <div className="w-full lg:w-4/6">
          <Title as="h1" size="2xl" title="Anuncios publicados" align="left" />
          <ul className="space-y-8 mt-5">
            {author.clasificados.length > 0 ? (
              author.clasificados.map((item) => (
                <AdComponent key={item.id} item={item} />
              ))
            ) : (
              <p className="text-gray-500 text-center">
                Este anunciante no tiene ningún anuncio publicado aún.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
