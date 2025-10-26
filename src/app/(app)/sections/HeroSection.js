'use client'

import SearchBar from "@/components/Base/SearchBar";
import Button from "@/components/Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section style={{ height: '720px' }} className="relative">

            <div className="absolute inset-0 ">

                <img className="h-[720px] w-full object-cover" src="4.jpg" alt="" />

              {/*   <Splide
                    options={{
                        type: 'loop',
                        interval: 6000,
                        rewind: true,
                        autoplay: true,
                        pagination: false,
                        arrows: false,
                        speed: 600,       // duración de la transición en ms
                        fade: true,        // activa el efecto fade
                    }}
                    aria-label="Galería Radio América"
                >
                    <SplideSlide>
                        <img className="h-[720px] w-full object-cover" src="1.jpg" alt="" />
                    </SplideSlide>

                    <SplideSlide>
                        <img className="h-[720px] w-full object-cover" src="2.jpg" alt="" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className="h-[720px] w-full object-cover" src="3.jpg" alt="" />
                    </SplideSlide>

                    <SplideSlide>
                        <img className="h-[720px] w-full object-cover" src="4.jpg" alt="" />
                    </SplideSlide>

                </Splide> */}

            </div>


            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-500/50"></div> */}

            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-red-500/50 backdrop-blur-xs"></div> */}


            <div className="absolute inset-0 bg-gradient-to-b from-black/30   via-red-500/30 to-red-500/60"></div>




            {/* Contenido */}
            <div className="mt-4 md:mt-18 relative max-w-4xl sm:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-center h-full gap-8 animate-fadeIn">
                {/* Columna izquierda: Título y descripción */}
                <div className="text-white flex flex-col gap-4">
                    <h1 className="mt-18 text-[1.8rem] lg:text-[2.6rem] font-extrabold ">
                        Conecta con confianza, encuentra lo que buscas
                    </h1>

                    <span
                        className="h-[2px] w-15 rounded-md duration-300  bg-gradient-to-r from-red-500 to-red-700 scale-x-100"
                    />

                    <h2 className="text-lg sm:text-xl font-extralight text-white">
                        Una plataforma de Radio América
                    </h2>

                    <div className="hidden md:flex flex-col max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8   gap-4">
                        <SearchBar className="border border-gray-200 rounded-lg" />
                        <div className="flex flex-col sm:flex-row w-full gap-4">
                            <Button
                                bgColor="bg-transparent"
                                borderColor="border-red-500"
                                textColor="text-red-500"
                                hoverBg="hover:bg-transparent"
                                hoverText="hover:text-white"
                                className="w-full transition-all duration-300"
                                label="Publica un anuncio"
                                href="publicar"
                            />
                            <Button
                                bgColor="bg-red-500"
                                textColor="text-white"
                                hoverBg="hover:bg-red-600"
                                borderColor=""
                                className="w-full transition-all duration-300"
                                label="Buscar ahora"
                            />
                        </div>




                    </div>
                </div>

                {/* Columna derecha: Caja de búsqueda y CTA */}
                <div className="flex flex-col max-w-md w-full gap-y-3">




               {/*      <div className="block xl:hidden mt-5 self-end p-3 rounded-md border-2 border-white">
                        <h2 className="text-white text-xl text-left font-extralight">Anuncios <span className="font-bold">confiables</span>  y  <span className="font-bold">actualizados</span></h2>
                        <h3 className="text-white font-extralight">
                            DESDE <span className="font-bold">1953</span>
                        </h3>
                    </div> */}

                    <div className="block xl:hidden absolute right-12 self-end">

                    <h2 className="text-white text-xl text-right font-extralight">Anuncios <span className="font-bold">confiables</span>  y  <span className="font-bold">actualizados</span></h2>
                    
                    <div className="px-3 py-2 rounded-md border-2 border-white w-max ml-auto mt-4">
                        <h3 className="text-white text-xl font-extralight">DESDE <span className="font-bold">1953</span></h3>
                    </div>
                </div>


                </div>


                <div className="hidden xl:block absolute right-12 self-end">

                    <h2 className="text-white text-xl text-left font-extralight">Anuncios <span className="font-bold">confiables</span>  y  <span className="font-bold">actualizados</span></h2>
                    
                    <div className="px-3 py-2 rounded-md border-2 border-white w-max ml-auto mt-4">
                        <h3 className="text-white text-xl font-extralight">DESDE <span className="font-bold">1953</span></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}