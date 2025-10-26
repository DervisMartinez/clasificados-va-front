"use client";

import { useState } from "react";
import Link from "next/link";

export default function State({clasificado }) {
    const [open, setOpen] = useState(false);

    // Dentro del componente, antes del return
    const stateMap = {
        pending: { label: 'En revisión', color: 'bg-yellow-100 text-yellow-800' },
        rejected: { label: 'Rechazado', color: 'bg-red-100 text-red-700' },
        approved: { label: 'Aprobado', color: 'bg-green-100 text-green-800' },
        canceled: { label: 'Finalizado', color: 'bg-gray-100 text-gray-800' },
    };

    const badge = clasificado?.state ? stateMap[clasificado.state] || { label: clasificado.state, color: 'bg-gray-100 text-gray-800' } : null;

    return (
        <div className="absolute top-4 right-4 w-64 z-50">
            {/* Botón */}
            <div className="flex justify-end">
                <button
                    className={`cursor-pointer ml-auto px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}
                    onClick={() => setOpen(!open)}
                >
                    {badge.label}
                </button>
            </div>

            {/* Tooltip con transición */}
            <div
                className={`mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-4 
                transition-all duration-300 ease-out transform
                ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
            >
                {clasificado.state === 'pending' && (
                    <p className="text-xs text-gray-500 mb-1">
                        Tu clasificado está en revisión, pronto recibirás una respuesta.
                    </p>
                )}
                {clasificado.state === 'rejected' && (
                    <>
                    <p className="text-xs text-gray-500 mb-1">
                        Tu clasificado ha sido rechazado. Apela o crea un nuevo clasificado <br /> <strong>Motivo:</strong> {clasificado.rejected.rejection_reason}
                    </p>

                    <div className="flex justify-end">
                        <Link className="text-sm text-gray-600 hover:text-gray-800 transition underline" target="_blank" href={`/perfil?tab=anuncios&estado=rejected&apelar=${clasificado.id}`}>Apelar</Link>
                    </div>
                    </>
                )}
                {clasificado.state === 'canceled' && (
                    <>
                    <p className="text-xs text-gray-500 mb-1">
                        Has marcado este anuncio como finalizado
                    </p>

                   
                    </>
                )}
                {clasificado.date_start && (
                    <p className="text-xs text-gray-500">
                        Publicado: {new Date(clasificado.date_start).toLocaleDateString()}
                    </p>
                )}
                {clasificado.date_end && (
                    <p className="text-xs text-gray-500">
                        Válido hasta: {new Date(clasificado.date_end).toLocaleDateString()}
                    </p>
                )}
            </div>
        </div>
    );
}
