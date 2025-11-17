
"use client";
// Input es un componente reutilizable para campos de formularios controlados.
// Recibe label, type, placeholder, value y onChange como props.
import React from "react";

/**
 * Input: campo de formulario controlado
 * @param {string} label - Etiqueta del campo
 * @param {string} type - Tipo de input (text, password, etc)
 * @param {string} placeholder - Texto de ayuda
 * @param {string} value - Valor actual
 * @param {function} onChange - Manejador de cambio
 * @param {string} error - Mensaje de error
 */
export default function Input({ label, type = "text", placeholder, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none 
                   focus:ring-2 transition ${
                     error
                       ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                       : "focus:ring-blue-500 focus:border-blue-500"
                   }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
