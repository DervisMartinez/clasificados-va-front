"use client"

import { useState } from "react"
import Select from "./Select"
import Input from "./Input"
import InputError from "../Error"

export default function PhoneInput({
  id,
  name = "phone",
  label = "Teléfono",
  hideLabel = false,
  value = "",
  onChange,
  errors = {}
}) {
  // Split incoming value into prefix + number
  const initialPrefix = value?.substring(0, 4) || ""
  const initialNumber = value?.substring(4) || ""

  const [prefix, setPrefix] = useState(initialPrefix)
  const [number, setNumber] = useState(initialNumber)

  const prefixes = [
    { value: "0412", label: "0412" },
    { value: "0414", label: "0414" },
    { value: "0424", label: "0424" },
    { value: "0416", label: "0416" },
    { value: "0426", label: "0426" },
  ]

  const handlePrefixChange = (e) => {
    const newPrefix = e.target.value
    setPrefix(newPrefix)
    onChange?.({ target: { name, value: `${newPrefix}${number}` } })
  }

  const handleNumberChange = (e) => {
    const newNumber = e.target.value.replace(/\D/g, "") // allow only digits
    setNumber(newNumber)
    onChange?.({ target: { name, value: `${prefix}${newNumber}` } })
  }

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

      <div className="flex gap-2">
        <div className="w-28">
          <Select
            id={`${id}-prefix`}
            placeholder="-"
            name={`${name}-prefix`}
            options={prefixes}
            value={prefixes.find((p) => p.value === prefix) || null}
            onChange={handlePrefixChange}
            hideLabel
          />
        </div>

        <div className="flex-1">
          <Input
            id={`${id}-number`}
            name={`${name}-number`}
            value={number}
            placeholder="1234567"
            numericOnly
            onChange={handleNumberChange}
            hideLabel
          />
        </div>
      </div>

      <InputError messages={errors} className="mt-0.5" />
    </div>
  )
}
