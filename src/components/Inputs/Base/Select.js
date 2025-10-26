"use client";

import { useState, useRef, useEffect, useMemo, forwardRef, useCallback } from "react";
import { createPortal } from "react-dom";
import InputError from "../Error";

const Select = forwardRef(function Select({
  id,
  name,
  options = [],
  multiple = false,
  placeholder = "Seleccione una opción",
  value = multiple ? [] : null,
  onChange,
  label,
  hideLabel = true,
  errors = {},
  disabled = false,
  onInputChange = null,
}, ref) {
  const containerRef = useRef();
  const dropdownRef = useRef();
  const [selected, setSelected] = useState(multiple ? [] : null);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [expandedParentId, setExpandedParentId] = useState(null);

  // Busca recursivamente una opción por value
  const findOptionRecursively = useCallback((opts, val) => {
    for (const opt of opts) {
      if (opt.value === val) return opt;
      if (opt.children) {
        const found = findOptionRecursively(opt.children, val);
        if (found) return found;
      }
    }
    return null;
  }, []);

  // Normaliza selected
  const normalizedSelected = useMemo(() => {
    if (multiple && Array.isArray(value)) {
      return value.map((val) => findOptionRecursively(options, val)).filter(Boolean);
    }
    if (!multiple && value != null) {
      return findOptionRecursively(options, value) || null;
    }
    return multiple ? [] : null;
  }, [value, options, multiple, findOptionRecursively]);

  // Inicializa selected y expande padre si es necesario
  useEffect(() => {
    setSelected(normalizedSelected);

    if (multiple) {
      const parentSelected = normalizedSelected.find((s) => s.parentId == null && s.isParent);
      if (parentSelected) setExpandedParentId(parentSelected.value);
    }
  }, [normalizedSelected, multiple]);

  // Click fuera cierra dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Posición dropdown
  useEffect(() => {
    if (!isOpen || !containerRef.current || !dropdownRef.current) return;

    const updatePosition = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;
      const shouldFlip = spaceBelow < dropdownHeight && spaceAbove > dropdownHeight;

      dropdownRef.current.style.left = `${rect.left + window.scrollX}px`;
      dropdownRef.current.style.width = `${rect.width}px`;
      dropdownRef.current.style.top = shouldFlip
        ? `${rect.top + window.scrollY - dropdownHeight}px`
        : `${rect.bottom + window.scrollY}px`;
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen]);

  // Opciones visibles según padre expandido
  const visibleOptions = useMemo(() => {
    if (expandedParentId) {
      const parent = options.find((opt) => opt.value === expandedParentId);
      if (!parent) return options;
      return [parent, ...(parent.children || [])];
    }
    return options;
  }, [options, expandedParentId]);

  const filteredOptions = useMemo(() => {
    return visibleOptions.filter((opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [visibleOptions, search]);

  // Manejo de selección
  const handleSelect = (option) => {
    if (disabled) return;

    if (multiple) {
      const exists = selected.some((s) => s.value === option.value);
      let newSelected;

      if (exists) {

        removeTag(option.value)
        return;

      } else {
        newSelected = [...selected, option];
      }

      setSelected(newSelected);
      onChange?.({ target: { name, value: newSelected.map((o) => o.value) } });

      // Expandir hijos si se selecciona padre
      if (option.isParent) setExpandedParentId(option.value);

    } else {

      if (selected?.value === option.value) {
        setSelected(null);
        onChange?.({ target: { name, value: null } });
        return;
      }
      setSelected(option);
      onChange?.({ target: { name, value: option.value } });
      setIsOpen(false);
    }
  };

  // Eliminar tag
  const removeTag = (val) => {
    if (disabled) return;
    const tag = selected.find((s) => s.value === val);
    if (!tag) return;

    let newSelected = selected.filter((s) => s.value !== val);
    if (tag.isParent) {
      newSelected = newSelected.filter((s) => s.parentId !== tag.value);
      setExpandedParentId(null);
    }

    setSelected(newSelected);
    onChange?.({ target: { name, value: newSelected.map((o) => o.value) } });
  };

  const baseClasses = `
    w-full text-sm p-2 rounded-md
    border border-gray-300 text-gray-700 placeholder-gray-400
    focus:outline-none peer-focus-visible:ring-1 peer-focus-visible:ring-red-500
    transition duration-150 ease-in-out
    ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""}
  `;

  return (
    <div className="w-full" ref={containerRef}>
      {label && (
        <label
          htmlFor={id}
          className={hideLabel ? "sr-only" : "block text-sm font-medium text-gray-700 mb-1"}
        >
          {label}
        </label>
      )}

      <div
        className={`relative font-medium ${baseClasses} ${disabled ? "cursor-not-allowed" : "cursor-pointer"} focus-within:ring-1 focus-within:ring-red-500`}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        tabIndex={0}
      >
        <div className="flex flex-wrap items-center gap-1 hide-scrollbar overflow-scroll">
          {multiple ? (
            selected.map((s) => (
              <span
                key={`${s.value}-${s.label}`}
                className="bg-red-100 text-red-700 px-2 rounded flex items-center gap-1 text-sm"
              >
                {s.label}
                {!disabled && (
                  <button type="button" onClick={() => removeTag(s.value)}>
                    ✕
                  </button>
                )}
              </span>
            ))
          ) : selected ? (
            <span className={`whitespace-nowrap text-gray-700 ${disabled ? "opacity-50" : ""}`}>
              {selected.label}
            </span>
          ) : null}

          {(multiple || !selected) && (
            <input
              id={id}
              name={name}
              ref={ref}
              type="text"
              value={search}
              autoComplete="off"
              onChange={(e) => {
                if (disabled) return;
                setSearch(e.target.value);
                onInputChange?.(e.target.value); 
              }}
              placeholder={placeholder}
              className="flex-1 outline-none border-none text-sm text-gray-700 p-0"
              disabled={disabled}
            />
          )}
        </div>
      </div>

      {isOpen &&
        !disabled &&
        createPortal(
          <ul
            ref={dropdownRef}
            className="absolute z-50 bg-white border border-gray-300 max-h-60 overflow-auto rounded-md shadow-lg"
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <li
                  key={opt.value}
                  className={`px-3 py-2 hover:bg-red-50 cursor-pointer text-sm ${disabled ? "pointer-events-none opacity-50" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(opt);
                  }}
                >
                  {opt.label}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-gray-400 text-sm">No options</li>
            )}
          </ul>,
          document.body
        )}

      <InputError messages={errors} className="mt-0.5" />
    </div>
  );
});

export default Select;
