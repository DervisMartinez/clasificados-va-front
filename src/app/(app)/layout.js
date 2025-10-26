import "@/styles/globals.css";

import Header from "@/components/Base/Header";
import Footer from "@/components/Base/Footer";
import RadioPlayer from "@/components/RadioPlayer";


export default function MainLayout({ children }) {

  return (
    <>

      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <main className="flex flex-col">{children}</main>
          <RadioPlayer />
        </div>
        <Footer />
      </div>
    </>


  );
}
