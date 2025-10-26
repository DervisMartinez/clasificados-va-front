// app/page.js
import { Suspense } from "react";
import { getSearchResults } from "@/lib/api/utils";

import Pagination from "../../ui/Pagination";
import ResultsList from "../../ui/ResultsList";
import Placeholder from "../../ui/Placeholder";

// Meta dinámica para la página de categorías
export async function generateMetadata({ params, searchParams }) {
  
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL; // Variable de entorno

  const categorySlug = params?.slug || "todos";
  const queryTitle = searchParams?.title || "";

  const title = queryTitle
    ? `"${queryTitle}" en ${categorySlug} | Clasificados RA`
    : `${categorySlug} | Clasificados RA`;

  const description = queryTitle
    ? `Explora anuncios de "${queryTitle}" en la categoría ${categorySlug} en Clasificados RA. Encuentra ofertas, precios y más.`
    : `Explora anuncios en la categoría ${categorySlug} en Clasificados RA. Encuentra los mejores anuncios, precios y oportunidades.`;

  const canonicalUrl = `${SITE_URL}/categorias/${categorySlug}${queryTitle ? `?title=${queryTitle}` : ""}`;
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
  const { slug } = await params;
  const queryParams = await searchParams;

  const { results, meta } = await getSearchResults({ category: slug, ...queryParams });

  const metaKey = `${new URLSearchParams(queryParams).toString()}`;

  return (
    <>
      <Suspense key={metaKey} fallback={<Placeholder />}>
        <ResultsList queryParams={{ category: slug, ...queryParams }} results={results} meta={meta} />
      </Suspense>

      <Pagination meta={meta} />
    </>
  );
}
