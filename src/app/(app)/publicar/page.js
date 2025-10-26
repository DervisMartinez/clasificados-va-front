
import AuthGuard from "@/components/Guards/AuthGuard"
import PostForm from "./Form/PostForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const defaultImage = `${siteUrl}/logo-ra.png`;

export const metadata = {
  title: "Publicar | Clasificados RA",
  description: "Publica tus anuncios de compra, venta y servicios en Clasificados RA.",
  keywords: [
    "publicar anuncio",
    "clasificados",
    "compra y venta",
    "servicios",
    "venezuela"
  ],
  authors: [{ name: "ZajRj Dev" }],
  creator: "ZajRj Dev",
  openGraph: {
    title: "Publicar | Clasificados RA",
    description: "Publica tus anuncios de compra, venta y servicios en Clasificados RA.",
    url: `${siteUrl}/publicar`,
    type: "website",
    images: [defaultImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Publicar | Clasificados RA",
    description: "Publica tus anuncios de compra, venta y servicios en Clasificados RA.",
    url: `${siteUrl}/publicar`,
    images: [defaultImage],
  },
  robots: { index: true, follow: true },
};


export default function Post() {

  return (
    <AuthGuard middleware="auth">
      
        <PostForm />
      
    </AuthGuard>
  );
}
