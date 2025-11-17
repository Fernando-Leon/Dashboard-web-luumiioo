
"use client";
// AuthCard es un contenedor visual para formularios de login y registro.
import React from "react";

/**
 * AuthCard: tarjeta visual para formularios de autenticación
 * @param {string} title - Título de la tarjeta
 * @param {ReactNode} children - Contenido (formulario)
 */
export default function AuthCard({ title, children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
