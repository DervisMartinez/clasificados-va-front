'use client';
import InputError from "../Error";
import { useState } from "react";
import { LuLock, LuEye, LuEyeOff } from "react-icons/lu";

export default function PasswordInput({
  id,
  name = '',
  value = '',
  placeholder = "Contraseña",
  autoComplete,
  onChange,
  errors
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 w-full">
      <div className="relative">
        {/* Left icon */}
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <LuLock className="w-5 h-5" />
        </span>

        {/* Input */}
        <input
          id={id}
          name={name}
          defaultValue={value}
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full pl-10 pr-9 p-3 rounded-md bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition duration-150 ease-in-out"
        />

        {/* Right toggle button */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          onMouseDown={(e) => e.preventDefault()}
          aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          className="cursor-pointer absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md p-1 transition"
        >
          {showPassword ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}
        </button>
      </div>

      <InputError messages={errors} className="mt-1" />
    </label>
  );
}