"use client";
import React from "react";

/**
 * Modal reutilizable simple
 * Props:
 * - show: boolean
 * - title: string
 * - children: contenido
 * - onClose: function
 * - primary: { label, onClick }
 * - secondary: { label, onClick }
 */
export default function Modal({ show, title, children, onClose, primary, secondary }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-20"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg p-6 z-10 w-full max-w-md">
        {title && (
          <h3 className="text-lg text-gray-900 font-semibold mb-2">
            {title}
          </h3>
        )}
        <div className="mb-4 text-gray-800">{children}</div>
        <div className="flex gap-3 justify-end">
          {secondary && (
            <button
              onClick={secondary.onClick}
              className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
            >
              {secondary.label}
            </button>
          )}
          {primary && (
            <button
              onClick={primary.onClick}
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {primary.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
