"use client";

import InputError from "../Error";
import * as LuIcons from "react-icons/lu";

export default function AuthSelect({
  id,
  options = [],       // array of { value, label }
  icon,               // icon name as string, e.g. "LuMail"
  label,
  hideLabel = true,
  value,
  onChange,
  placeholder,
  errors
}) {
  const IconComponent = icon ? LuIcons[icon] : null;

  const baseClasses =
    "text-sm w-full p-3 font-medium text-gray-400 rounded-md bg-gray-100  focus:outline-none focus:ring-1 focus:ring-red-500 transition duration-150 ease-in-out appearance-none";

  const inputPadding = IconComponent ? "pl-10" : "";

  return (
    <div className="w-full relative">
      {label && (
        <label
          htmlFor={id}
          className={hideLabel ? "sr-only" : "block text-sm font-medium text-gray-700 mb-1"}
        >
          {label}
        </label>
      )}

      {IconComponent && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
          <IconComponent className="w-5 h-5" />
        </span>
      )}

      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`${baseClasses} ${inputPadding}`}
      >
         <option value="">
            {placeholder}
          </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Optional down arrow */}
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
        ▼
      </span>

      <InputError messages={errors} className="mt-1" />

    </div>
  );
}
