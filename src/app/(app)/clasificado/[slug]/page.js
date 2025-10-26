//Server imports
import { notFound } from "next/navigation";
import { getClasificado, getRelatedAds } from "@/lib/api/server_utils.js";
import { getCategories } from "@/lib/api/utils.js";

//client imports
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import Actions from "./ui/Actions.js";
import State from "./ui/Status.js";
import Categories from "./ui/Categories.js";
import RelatedAds from "./ui/RelatedAds.js";
import Gallery from "./ui/Gallery.js";
import Link from "next/link.js";

// Metadata enriquecida
export async function generateMetadata({ params }) {
    const { slug } = params;

    const clasificado = await getClasificado(slug);

    if (!clasificado) return {};


    let robotsMeta = { index: true, follow: true };

    if (clasificado.state !== "approved") {
        robotsMeta = { index: false, follow: true };
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const image = `${siteUrl}/logo-ra.png`; // Imagen por defecto

    return {
        title: `${clasificado.title} | Clasificados RA`,
        description: clasificado.description,
        openGraph: {
            title: clasificado.title,
            description: clasificado.description,
            url: `${siteUrl}/clasificado/${slug}`,
            type: "website",
            images: clasificado.image ? [clasificado.image] : [image],
        },
        twitter: {
            card: "summary_large_image",
            title: clasificado.title,
            description: clasificado.description,
            url: `${siteUrl}/clasificado/${slug}`,
            images: clasificado.image ? [clasificado.image] : [image],
        },
        robots: robotsMeta,
    };
}

export default async function Clasificado({ params }) {

    const { slug } = await params;

    const clasificado = await getClasificado(slug);

    const relatedAds = await getRelatedAds(slug)

    const categories = await getCategories();

    const hasSocialLinks = clasificado?.social_links?.instagram || clasificado?.social_links?.tiktok || clasificado?.social_links?.facebook

    if (!clasificado) notFound();

    let user = clasificado.user;
    if (user.document_type === "V") user.name = `${user.name} ${user.last_name}`;

    return (
        <div className="w-full pb-10">

            {/* Header */}
            <div className="relative h-60 md:h-52 bg-secondary shadow-lg overflow-hidden p-6 flex flex-col justify-end pb-18 px-10">
                <span className="text-white text-sm">
                    {clasificado.categories.map((cat, i) => (
                        <span key={cat.id}>
                            {cat.name}
                            {i < clasificado.categories.length - 1 && " | "}
                        </span>
                    ))}
                </span>

                {/* Título principal */}
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                    {clasificado.title}
                </h1>

                {/* Ubicación */}
                <span className="mt-4 flex gap-1 text-white">
                    <LuMapPin className="shrink-0" size={20} />
                    <a
                        href={`https://www.google.com/maps/search/?q=${encodeURIComponent(clasificado.ubication)}`}
                        target="_blank"
                        className="hover:underline"
                        rel="noopener noreferrer"
                    >
                        {`${clasificado.ubication.slice(0, 70)}...`}
                    </a>

                </span>

                {clasificado?.user_is_author && <State clasificado={clasificado} />}
            </div>

            {/* Contenido principal */}
            <div className="flex flex-col md:flex-row gap-10 px-8 md:px-12 mt-6">
                {/* Sidebar desktop: contacto + categorías */}
                <div className="md:w-6/8 xl:w-3/8 flex flex-col gap-5 order-1 md:order-1">
                    {/* Contacto */}
                    <div className="-mt-20 w-full bg-white shadow-xl p-6 rounded-md z-10 self-start">
                        <div className="flex items-center gap-4 border-b border-gray-200 pb-2 mb-2">
                            <img
                                className="rounded-full h-12 border-1 border-gray-200 p-0.5"
                                src="/logo-ra.png"
                                alt={`Logo de ${user.name}`}
                            />
                            <div className="flex flex-col">
                                <span className=" text-lg font-semibold text-gray-800">
                                    {user.name}
                                </span>
                                <Link href={`/anunciante/${user.id}`} className="text-sm text-gray-500 cursor-pointer hover:underline">
                                    Ver detalles
                                </Link>
                            </div>
                        </div>

                        {/* Phone */}
                        {/*   <div className="space-y-2 mt-4">
                            <div className="flex items-center space-x-2 text-gray-500 text-xs md:text-base">
                                <LuPhone className="w-5 h-5 text-gray-600" />
                                <span className="font-medium">{user.phone_number}</span>
                            </div>

                            <div className="flex items-center space-x-2 text-gray-500 text-xs md:text-base">
                                <LuMail className="w-5 h-5 text-gray-600" />
                                <span className="font-medium ">{user.email}</span>
                            </div>
                        </div> */}

                        <div className="space-y-2 mt-4">
                            {/* <MessageAction clasificado={clasificado} /> */}
                            <Button
                                className="w-full"
                                icon="Whatsapp"
                                href={`https://api.whatsapp.com/send?phone=${clasificado.phone}&text=Hola%2C%20estoy%20interesado%20en%20tu%20anuncio`}
                                nav={false}
                                label="Contactar por WhatsApp"
                                bgColor="bg-green-500"
                                borderColor=""
                                focusRing="focus:ring-green-300"
                                hoverBg="hover:bg-green-600"
                            />
                        </div>
                    </div>

                    {/* Categorías desktop */}
                    <Categories className="hidden md:block" categories={categories} />

                </div>

                {/* Contenido principal (descripción + video) */}
                <div className="flex flex-col w-full gap-5 order-2 md:order-2">
                    {/* Icon buttons y acciones */}
                    <div className="flex justify-between">
                        {hasSocialLinks && (
                            <div className="flex flex-col gap-2 my-4">
                                <span className="text-sm text-gray-600">
                                    Redes del anunciante
                                </span>
                                <div className="flex gap-3">
                                    {clasificado.social_links?.instagram && (
                                        <IconButton
                                            href={clasificado.social_links.instagram}
                                            icon="Instagram"
                                            textColor="text-red-500"
                                            bgColor="bg-white"
                                            hoverBg="hover:bg-gray-50"
                                        />
                                    )}
                                    {clasificado.social_links?.facebook && (
                                        <IconButton
                                            href={clasificado.social_links.facebook}
                                            icon="Facebook"
                                            textColor="text-blue-500"
                                            bgColor="bg-white"
                                            hoverBg="hover:bg-gray-50"
                                        />
                                    )}
                                    {clasificado.social_links?.tiktok && (
                                        <IconButton
                                            href={clasificado.social_links.tiktok}
                                            icon="Tiktok"
                                            textColor="text-gray-800"
                                            bgColor="bg-white"
                                            hoverBg="hover:bg-gray-50"
                                        />
                                    )}
                                </div>
                            </div>
                        )}

                        <Actions clasificado={clasificado} />
                    </div>



                    {/* Descripción */}
                    <div className="flex flex-col xl:flex-row gap-4">


                        {clasificado.photos.length > 0 &&
                            <div className="w-full">
                                <Gallery clasificado={clasificado} />
                            </div>
                        }

                        <div className="w-full bg-white shadow-xl rounded-md p-4 space-y-4">
                            <h2 className="text-lg text-gray-800 font-semibold">Descripción</h2>
                            <p>{clasificado.description}</p>
                        </div>

                        {/* Video */}
                        {/* {clasificado.social_links?.video_url && (
                            <div className="w-full xl:w-2/3  bg-white shadow-xl rounded-md p-4 self-start ">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                    Video relacionado
                                </h2>
                                <div className="rounded-md overflow-hidden shadow-md">
                                    <iframe
                                        className="w-full h-72"
                                        src={clasificado.social_links.video_url}
                                        title={`Video relacionado: ${clasificado.title}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )} */}
                    </div>

                    {/* Categorías mobile */}

                    <Categories className="block md:hidden" categories={categories} />
                </div>
            </div>

            {/* Anuncios relacionados */}
            <div className="px-10 mt-10">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Anuncios relacionados
                </h2>
                <RelatedAds related={relatedAds} />

            </div>

            {/* JSON-LD para rich snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        name: clasificado.title,
                        description: clasificado.description,
                        category: clasificado.categories.map(c => c.name),
                        offers: {
                            "@type": "Offer",
                            price: clasificado.price || "0",
                            priceCurrency: "VES",
                        },
                    }),
                }}
            />
        </div>
    );
}
