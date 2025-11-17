import React from "react";

/**
 * Table: Componente reutilizable para mostrar datos tabulares.
 * @param {Array} columns - [{ key: string, label: string }]
 * @param {Array} data - Array de objetos con los datos a mostrar
 * @param {Function} renderActions - Función para renderizar acciones por fila (opcional)
 */
export default function Table({ columns, data, renderActions }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
            {renderActions && (
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50"></th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (renderActions ? 1 : 0)} className="px-6 py-4 text-center text-gray-400">
                Sin datos
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-100 transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row[col.key]}
                  </td>
                ))}
                {renderActions && (
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-right">
                    {renderActions(row)}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
