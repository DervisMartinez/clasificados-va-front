import "@/styles/globals.css";
import Providers from "@/context/Providers";
import { Montserrat } from "next/font/google";
import ToastProvider from "@/context/ToastProvider";

import { getUserFromServer } from "@/lib/api/server_utils";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Clasificados RA",
  description: "Encuentra y publica anuncios de compra, venta y servicios en Venezuela.",
  keywords: [
    "clasificados",
    "compra y venta",
    "anuncios",
    "servicios",
    "venezuela",
    "Radio América",
    "Clasificados RA"
  ],
  authors: [{ name: "ZajRj Dev" }],
  creator: "ZajRj Dev"
};



export default async function MainLayout({ children }) {

  const data = await getUserFromServer(); // SSR

  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased flex flex-col min-h-screen bg-gray-100`}>
        <Providers initialAuthData={data}>
          {children}
          <ToastProvider />
        </Providers>
      </body>

    </html>
  );
}
