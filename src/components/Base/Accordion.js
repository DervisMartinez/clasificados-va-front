'use client'

import { LuChevronUp, LuChevronDown } from "react-icons/lu";
import { useState, useRef, useEffect } from "react";

export default function Accordion({ title, children, id, level = "h2" }) {
    const [isOpen, setIsOpen] = useState(true); // abierto desde inicio
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    // Calcula altura real al abrir/cerrar
    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    // Dinámicamente renderiza el heading según nivel (h2, h3, etc.)
    const Heading = level;

    return (
        <div
            className="bg-white border border-gray-300 shadow-sm rounded-md mb-3"
            id={id}
        >
            <Heading className="m-0">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-left flex justify-between items-center font-semibold text-lg px-4 py-3 hover:bg-gray-50 transition-colors rounded-md"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-content`}
                    id={`${id}-button`}
                >
                    {title}

                    {isOpen ? (
                        <LuChevronUp className="shrink-0 text-gray-600" size={20} />
                    ) : (
                        <LuChevronDown className="shrink-0 text-gray-600" size={20} />
                    )}
                </button>
            </Heading>

            <div
                ref={contentRef}
                style={{ maxHeight }}
                className="overflow-hidden transition-all duration-300 ease-in-out px-4 text-gray-700"
                id={`${id}-content`}
                role="region"
                aria-labelledby={`${id}-button`}
            >
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}
