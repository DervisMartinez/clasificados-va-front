"use client";

import * as LuIcons from "react-icons/lu";
import InputError from "../Error";
import { useState, useEffect, forwardRef } from "react";

const TextArea = forwardRef(function TextArea(
  {
    id,
    value = "",
    name = "",
    placeholder,
    icon,
    label,
    hideLabel = true,
    onChange,
    errors = {},
    rows = 4,
    limit, // max words
  },
  ref
) {
  const [text, setText] = useState(value);
  const [wordCount, setWordCount] = useState(0);

  const IconComponent = icon ? LuIcons[icon] : null;

  const baseClasses = `
    w-full text-sm p-3 rounded-md
    border border-gray-300 text-gray-700 placeholder-gray-400
    focus:outline-none focus:ring-1 focus:ring-red-500
    transition duration-150 ease-in-out
    resize-y
  `;

  const inputPadding = IconComponent ? "pl-10" : "";



  const handleChange = (e) => {
    let val = e.target.value;

    // Use \p{L} with the 'u' flag to correctly handle Unicode characters (including accents)
    let words = val.replace(/[^\p{L}\s]/gu, " ").trim().split(/\s+/).filter(Boolean);

    if (limit && words.length > limit) {
      words = words.slice(0, limit);
      val = words.join(" ");
    }

  
    setText(val);
    setWordCount(words.length);

    onChange?.({ target: { name, value: val, wordCount: words.length } });
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
        </label>
      )}

      <div className="relative font-medium leading-0">
        {IconComponent && (
          <span className="absolute top-3 left-0 flex items-center pl-3 text-gray-400">
            <IconComponent className="w-5 h-5" />
          </span>
        )}

        <textarea
          ref={ref}
          id={id}
          name={name}
          value={text}
          placeholder={placeholder}
          aria-label={label || placeholder}
          rows={rows}
          className={`${baseClasses} ${inputPadding}`}
          onChange={handleChange}
        />

        <div className="flex justify-between mt-1">

        {limit && (
          <span
            className={`text-xs text-gray-500 ${
              wordCount == limit ? "text-red-500" : ""
            }`}
          >
            {wordCount}/{limit} palabras
          </span>
        )}
        {!limit && (
          <span className={`text-xs text-gray-500`}>{wordCount} palabras</span>
        )}
        <InputError messages={errors} className="mt-0.5" />
        </div>

      </div>

    </div>
  );
});

export default TextArea;