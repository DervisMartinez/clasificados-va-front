// app/page.js
import { Suspense } from "react";
import { getSearchResults } from "@/lib/api/utils";

import Pagination from "../ui/Pagination";
import ResultsList from "../ui/ResultsList";
import Placeholder from "../ui/Placeholder";


export async function generateMetadata({ searchParams }) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tudominio.com';
  const query = searchParams?.title || 'Todos';

  const title = `${query} | Clasificados RA`;
  const description = `Encuentra anuncios y clasificados de "${query}" en Clasificados RA. Explora categorías, precios y más.`;
  const canonicalUrl = `${SITE_URL}/busqueda?title=${encodeURIComponent(query)}`;

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
          url: `${SITE_URL}/logo-ra.png`,
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
      images: [`${SITE_URL}/logo-ra.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


export default async function SearchPage({ searchParams }) {
  const params = await searchParams;

  const { meta } = await getSearchResults(params);

  const metaKey = `${new URLSearchParams(params).toString()}`

  return (
    <>
      <Suspense key={metaKey} fallback={<Placeholder />}>
        <ResultsList queryParams={searchParams} />
      </Suspense>

      <Pagination meta={meta} />
    </>
  );
}