import "@/styles/globals.css";
import Providers from "@/context/Providers";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import AuthGuard from "@/components/Guards/AuthGuard";

const montserrat = Montserrat({
  subsets: ["latin"],
});

function Logo() {
  return (
    <Image
      src="/logo-ra.png"
      alt="Logo"
      height={100}
      width={100}
      priority // opcional: carga inmediata
    />
  );
}



export default function AuthLayout({ children }) {
  return (
    <AuthGuard middleware="guest">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="md:shadow-md rounded-md flex flex-col md:flex-row w-full max-w-md mx-auto text-center overflow-hidden">
          {children}
        </div>
      </div>
    </AuthGuard>
  );
}
