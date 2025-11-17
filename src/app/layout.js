// Importa los estilos globales y el layout de cliente que maneja la autenticación
import "../styles/globals.css";
import LayoutClient from "./layoutClient/layoutClient";

// Metadatos de la aplicación
export const metadata = {
  title: "Luumiioo",
  description: "App con Next.js + Tailwind estilo Material UI",
};

/**
 * RootLayout es el layout principal de la app.
 * Aquí se envuelve todo el contenido con LayoutClient,
 * que provee el contexto de autenticación y protege las rutas.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-800">
        {/* LayoutClient maneja la autenticación global y la protección de rutas */}
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
