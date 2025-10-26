// AddressSelect.jsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Select from "./Select";

export default function AddressSelect({ label, name, value, onChange, placeholder = "Busca una dirección...",errors}) {
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  // Función para buscar direcciones en OSM
  const fetchAddresses = useCallback(async (query) => {
    if (!query) return setOptions([]);

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          query
        )}&format=json&addressdetails=1&limit=5&countrycodes=VE&accept-language=es`
      );
      const data = await res.json();
      const mapped = data.map((d) => ({
        value: d.display_name,
        label: d.display_name,
        lat: d.lat,
        lon: d.lon
      }));
      setOptions(mapped);
    } catch (err) {
      console.error(err);
      setOptions([]);
    }
  }, []);

  // Debounce simple: busca 300ms después de dejar de escribir
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchAddresses(search);
    }, 300);
    return () => clearTimeout(timeout);
  }, [search, fetchAddresses]);

  return (
    <Select
      label={label}
      hideLabel={false}
      name={name}       // <- importante, viene de register
      value={value}     // <- value controlado por RHF
      onChange={onChange} // <- onChange de register
      options={options}
      placeholder={placeholder}
      onInputChange={(val) => setSearch(val)}
      errors={errors}
    />
  );
}
