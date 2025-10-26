"use client";

import * as LuIcons from "react-icons/lu";
import InputError from "../Error";
import { forwardRef } from "react";

import {FaInstagram , FaFacebook,FaYoutube,FaTiktok} from "react-icons/fa";

const Input = forwardRef(function Input(
  {
    id,
    name,
    type = "text",
    placeholder,
    autoComplete,
    icon,
    numericOnly = false,
    label,
    hideLabel = true,
    errors = {},
    ...rest // includes onChange, value, disabled, etc. from RHF
  },
  ref
) {

  let IconComponent = icon ? LuIcons[icon] : null;

  if(icon === "Instagram") IconComponent = FaInstagram;
  if(icon === "Facebook") IconComponent = FaFacebook;
  if(icon === "Youtube") IconComponent = FaYoutube;
  if(icon === "Tiktok") IconComponent = FaTiktok;
  

  const baseClasses = `
    w-full text-sm p-2 rounded-md
    border text-gray-700 placeholder-gray-400
    focus:outline-none focus:ring-1 focus:ring-red-500
    transition duration-150 ease-in-out
  `;

  const enabledClasses = `
    border-gray-300
    focus:border-red-500
  `;

  const disabledClasses = `
    bg-gray-100 border-gray-200 text-gray-400
    cursor-not-allowed placeholder-gray-300
  `;

  const inputPadding = IconComponent ? "pl-10" : "";

  const handleKeyDown = (e) => {
    if (numericOnly) {
      const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
        "Home",
        "End",
      ];
      if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key)) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className={
            hideLabel
              ? "sr-only"
              : "block text-sm font-medium text-gray-700 mb-1"
          }
        >
          {label}

          {rest.required && <span className="text-red-500"> *</span>}
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
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-label={label || placeholder}
          className={`${baseClasses} ${inputPadding} ${
            rest.disabled ? disabledClasses : enabledClasses
          }`}
          onKeyDown={handleKeyDown}
          ref={ref}
          {...rest} // includes value, onChange, onBlur, disabled
        />
      </div>

      <InputError messages={errors} className="mt-0.5" />
    </div>
  );
});

export default Input;
