import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { LuMenu } from "react-icons/lu";

const variantStyles = {
    primary: "text-blue-600 hover:bg-blue-50",
    danger: "text-red-600 hover:bg-red-50",
    neutral: "text-gray-700 hover:bg-gray-100",
};

export default function ActionDropdown({ actions = [], label = "⋯" }) {

    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef(null);
    const dropdownRef = useRef(null);

 useEffect(() => {
  if (open && triggerRef.current && dropdownRef.current) {
    const rect = triggerRef.current.getBoundingClientRect();
    const dropdownWidth = dropdownRef.current.offsetWidth;

    setPosition({
      top: rect.bottom + window.scrollY + 4,
      left: rect.right + window.scrollX - dropdownWidth,
    });
  }
}, [open]);



    // Cierra al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                !triggerRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };
        if (open) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <>
            <button
                ref={triggerRef}
                onClick={() => setOpen((prev) => !prev)}
                className="cursor-pointer px-2 py-1 text-xl font-medium"
            >
                <LuMenu />
            </button>

            {open &&
                createPortal(
                    <div
                        ref={dropdownRef}
                        style={{
                            position: "absolute",
                            top: position.top,
                            left: position.left,
                            zIndex: 1000,
                            width: "12rem",
                        }}
                        className="bg-white border border-gray-200 rounded shadow-lg"
                    >
                        <ul className="py-1">
                            {actions.map((action, index) => {
                                const variant = variantStyles[action.variant || "neutral"];
                                const commonStyles = `flex items-center gap-2 w-full text-left px-4 py-2 text-sm ${variant}`;

                                const Icon = action.icon;

                                if (action.href) {
                                    return (
                                        <li key={index}>
                                            <a
                                                href={action.href}
                                                target={action.target || "_self"}
                                                className={commonStyles}
                                            >
                                                {Icon && <Icon className="w-4 h-4" />}
                                                {action.label}
                                            </a>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={index}>
                                        <button
                                            onClick={() => {
                                                setOpen(false);
                                                action.onClick?.();
                                            }}
                                            className={`cursor-pointer ${commonStyles}`}
                                        >
                                            {Icon && <Icon className="w-4 h-4" />}
                                            {action.label}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>,
                    document.body
                )}
        </>
    );
}