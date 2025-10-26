'use client'
import { Splide, SplideSlide } from "@splidejs/react-splide"

export default function Gallery({ clasificado }) {

    return (
        <Splide className="w-full" options={{
            perPage: 1,
            gap: '1rem',
        }}>
            {clasificado.photos.map((item, index) => (
                <SplideSlide key={`${clasificado.name}-gallery-${index}`} className="relative">
                    <img
                        className="rounded-md w-full h-full object-contain object-center max-h-[50vh] bg-zinc-900"
                        src={item.url}
                        alt={`${clasificado.slug}-imagen-${index}`}
                    />
                </SplideSlide>
            ))}
        </Splide>
    )
}