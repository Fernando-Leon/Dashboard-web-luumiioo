"use client";
import React from "react";
import Link from "next/link";
import { Heart, Mail, Github, Shield } from "lucide-react";

/**
 * Footer component - Administrative dashboard footer
 * Displays copyright, links, and system information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Luumiioo</h3>
            <p className="text-xs text-muted-foreground">
              Sistema administrativo para la gestión de usuarios, perfiles y planes personalizados.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Hecho con <Heart className="h-3 w-3 text-red-500 fill-red-500" /> por DevsXiadanos
            </p>
          </div>

          {/* Enlaces útiles */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Enlaces</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/users" className="hover:text-foreground transition-colors">
                  Gestión de Usuarios
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-foreground transition-colors">
                  Registrar Usuario
                </Link>
              </li>
              <li>
                <Link href="/statistics" className="hover:text-foreground transition-colors">
                  Estadísticas
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-foreground transition-colors">
                  Seguridad
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Información</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <a href="mailto:admin@luumiioo.com" className="hover:text-foreground transition-colors">
                  admin@luumiioo.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-3 w-3" />
                <span>Panel de Administración</span>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-3 w-3" />
                <span>v1.0.0</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>
              © {currentYear} Luumiioo. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Términos de Uso
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacidad
              </Link>
              <Link href="/security" className="hover:text-foreground transition-colors">
                Seguridad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
