"use client";

import * as LuIcons from "react-icons/lu";
import InputError from "../Error";

export default function AuthInput({
  id,
  value = '',
  name='',
  type = "text",
  placeholder,
  autoComplete,
  icon,
  numericOnly = false,
  label,
  hideLabel = true,
  onChange,
  errors = {}
}) {
  const IconComponent = icon ? LuIcons[icon] : null;

  const baseClasses =
    "text-sm w-full p-3 rounded-md bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition duration-150 ease-in-out";

  const inputPadding = IconComponent ? "pl-10" : "";

  const handleKeyDown = (e) => {
    if (numericOnly) {
      const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"
      ];

      if (
        !allowedKeys.includes(e.key) &&
        !/^\d$/.test(e.key)
      ) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className={hideLabel ? "sr-only" : "block text-sm font-medium text-gray-700 mb-1"}
        >
          {label}
        </label>
      )}

      <div className="relative font-medium">
        {IconComponent && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <IconComponent className="w-5 h-5" />
          </span>
        )}
        <input
          id={id}
          name={name}
          defaultValue={value}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-label={label || placeholder}
          className={`${baseClasses} ${inputPadding}`}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <InputError messages={errors} className="mt-0.5" />
    </div>
  );
}