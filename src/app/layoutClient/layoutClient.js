
"use client";
// LayoutClient provee el contexto de autenticación global y protege las rutas de la app.
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { createContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * AuthContext expone el estado de autenticación y los métodos login/logout
 * para que cualquier componente pueda acceder o modificar el estado global.
 */
export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});


/**
 * LayoutClient es el layout de cliente que:
 * - Provee el AuthContext a toda la app.
 * - Lee el token de localStorage al cargar para mantener la sesión.
 * - Expone login/logout para manipular el estado y los tokens.
 * - Protege las rutas: si no está autenticado y no está en /login, muestra mensaje y link a login.
 */
export default function LayoutClient({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Al montar, revisa si hay token en localStorage para mantener la sesión
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      setIsAuthenticated(!!token);
    }
  }, []);

  /**
   * login: guarda los tokens en localStorage y actualiza el estado global
   * @param {string} accessToken
   * @param {string} refreshToken
   * @param {string} expiresAt
   */
  const login = (accessToken, refreshToken, expiresAt) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("expiresAt", expiresAt);
      setIsAuthenticated(true);
    }
  };

  /**
   * logout: elimina los tokens y cierra la sesión global
   */
  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expiresAt");
      setIsAuthenticated(false);
      router.push("/login");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <div className="flex flex-col min-h-screen">
        {/* Navbar solo se muestra si está autenticado */}
        {isAuthenticated && <Navbar />}
        <main className="flex-1 bg-gray-100 p-6">
          {/* Si no está autenticado y no está en /login, muestra mensaje y link a login */}
          {!isAuthenticated && pathname !== "/login" ? (
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white p-8 rounded shadow text-center">
                <h2 className="text-xl text-gray-800 font-bold mb-4">Por favor inicia sesión</h2>
                <a href="/login" className="text-blue-600 underline">Ir al login</a>
              </div>
            </div>
          ) : (
            children
          )}
        </main>
        {/* Footer siempre visible */}
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}