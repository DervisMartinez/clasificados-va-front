'use client';

import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { useLockScroll } from "@/hooks/useLockScroll";
import { useEffect, useState } from "react";

export default function Drawer({
  title,
  children,
  isOpen,
  onClose,
  side = 'right',
  width = 'w-80'
}) {
  const [show, setShow] = useState(false);    // Mantener en DOM
  const [active, setActive] = useState(false); // Animación
  const TRANSITION_DURATION = 300;

  useLockScroll(isOpen);

  useEffect(() => {
    let timeout;

    if (isOpen) {
      setShow(true);
      // Delay mínimo para asegurar que el DOM pinte antes de la transición
      timeout = setTimeout(() => setActive(true), 20);
    } else {
      setActive(false);
      timeout = setTimeout(() => setShow(false), TRANSITION_DURATION);
    }

    return () => clearTimeout(timeout);
  }, [isOpen]);

  if (!show || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel lateral */}
      <div
        className={`absolute top-0 ${side}-0 h-full ${width} bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          active
            ? "translate-x-0"
            : side === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="cursor-pointer p-2 rounded-md focus:outline-none"
          >
            <IoClose size="1.5rem" />
          </button>
        </div>

        {/* Contenido scrollable */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
