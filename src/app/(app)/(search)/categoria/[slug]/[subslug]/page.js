// app/page.js
import { Suspense } from "react";
import { getSearchResults } from "@/lib/api/utils";

import Pagination from "../../../ui/Pagination";
import ResultsList from "../../../ui/ResultsList";
import Placeholder from "../../../ui/Placeholder";

export async function generateMetadata({ params, searchParams }) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tudominio.com';

  const categorySlug = params?.slug || "todos";
  const subcategorySlug = params?.subslug || "";
  const queryTitle = searchParams?.title || "";

  // Título dinámico
  const title = queryTitle
    ? `"${queryTitle}" en ${subcategorySlug || categorySlug} | Clasificados RA`
    : `${subcategorySlug || categorySlug} | Clasificados RA`;

  // Descripción dinámica
  const description = queryTitle
    ? `Explora anuncios de "${queryTitle}" en la categoría ${subcategorySlug || categorySlug} en Clasificados RA. Encuentra ofertas, precios y más.`
    : `Explora anuncios en la categoría ${subcategorySlug || categorySlug} en Clasificados RA. Encuentra los mejores anuncios y oportunidades.`;

  // URL canonical
  let canonicalUrl = `${SITE_URL}/categorias/${categorySlug}`;
  if (subcategorySlug) canonicalUrl += `/${subcategorySlug}`;
  if (queryTitle) canonicalUrl += `?title=${encodeURIComponent(queryTitle)}`;

  // URL de OG image
  const ogImageUrl = `${SITE_URL}/logo-ra.png`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Clasificados RA",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SearchPage({ params, searchParams }) {

    const { slug,subslug } = await params

    const queryParams = await searchParams;


    const { results, meta } = await getSearchResults({category: slug,subcategory: subslug,...queryParams});

    const metaKey = `${new URLSearchParams(queryParams).toString()}`

    return (
        <>
            <Suspense key={metaKey} fallback={<Placeholder />}>
                <ResultsList queryParams={{category: slug,subcategory: subslug,...queryParams}} results={results} meta={meta} />
            </Suspense>

            <Pagination meta={meta} />
        </>
    );
}