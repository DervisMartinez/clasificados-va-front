'use client'

import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import AdCard from "@/app/(app)/(search)/ui/AdCard";

export default function RelatedAds({ related }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Skeleton tipo grid simulando carrusel
        return (
            <div className="grid grid-flow-col auto-cols-[16rem] gap-4 overflow-hidden py-2 mx-auto">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-64 bg-gray-200 rounded-md animate-pulse flex flex-col">
                        {/* Simula imagen */}
                        <div className="h-36 bg-gray-300 rounded-t-md"></div>
                        {/* Simula título */}
                        <div className="h-4 bg-gray-300 rounded mt-2 mx-2"></div>
                        {/* Simula descripción */}
                        <div className="h-3 bg-gray-300 rounded mt-1 mx-2 w-5/6"></div>
                        <div className="h-3 bg-gray-300 rounded mt-1 mx-2 w-3/4"></div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <Splide
            options={{
                type: "slide",
                perPage: 5,
                gap: "1rem",
                pagination: false,
                arrows: true,
                breakpoints: {
                    1024: { perPage: 3 },
                    768: { perPage: 2 },
                    480: { perPage: 1 },
                },
            }}
            className="my-4"
        >
            {related.map((item) => (
                <SplideSlide key={item.id} className="h-full flex">
                    <AdCard item={item} className="h-full flex flex-col" />
                </SplideSlide>
            ))}

           
        </Splide>
    );
}
