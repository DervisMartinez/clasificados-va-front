'use client';

import { LuCheck } from 'react-icons/lu';
import { useState, useEffect, forwardRef } from 'react';
import InputError from './Error';

const Checkbox = forwardRef(function Checkbox(
  { id, name, label, onChange, value = false, errors = {} },
  ref
) {
  const [checked, setChecked] = useState(value);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none"
      >
        {/* Accessible input */}
        <input
          id={id}
          name={name}
          type="checkbox"
          ref={ref}
          className="peer sr-only"
          checked={checked}
          onChange={handleChange}
        />

        {/* Custom checkbox visual */}
        <span
          className={`w-4 h-4 flex items-center justify-center border border-gray-300 rounded-sm
            ${checked ? 'bg-red-500 border-red-500' : ''}
            peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-red-500
            transition-all duration-200`}
        >
          {checked && <LuCheck className="w-3 h-3 text-white" />}
        </span>

        {/* Label text on the right */}
        {label && <span>{label}</span>}
      </label>

      {/* Error directly under the checkbox */}
      <InputError messages={errors} className="mt-0.5" />
    </div>
  );
});

export default Checkbox;
