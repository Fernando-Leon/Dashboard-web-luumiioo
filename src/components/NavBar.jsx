"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { AuthContext } from "@/app/layoutClient/layoutClient";
import { Button } from "@/components/ui/button";
import { LogOut, Users, UserPlus, Sparkles, BarChart3 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

/**
 * NavBar minimalista y elegante con paleta neutra
 * - Diseño limpio con iconos sutiles
 * - Animaciones suaves
 * - Mejor organización visual
 */
export default function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  
  const handleLogout = () => {
    logout();
    setShowLogoutDialog(false);
  };
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo minimalista */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            Luumiioo
          </span>
        </Link>

        {/* Menú de navegación */}
        <div className="flex items-center gap-2">
          {!isAuthenticated ? (
            <Button asChild variant="default" size="sm">
              <Link href="/login">
                Iniciar sesión
              </Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link href="/users" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Usuarios</span>
                </Link>
              </Button>
              
              <Button asChild variant="ghost" size="sm">
                <Link href="/statistics" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Estadísticas</span>
                </Link>
              </Button>
              
              <Button asChild variant="default" size="sm">
                <Link href="/register" className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  <span className="hidden sm:inline">Registrar</span>
                </Link>
              </Button>
              
              <div className="h-6 w-px bg-border mx-2" />
              
              <Button
                onClick={() => setShowLogoutDialog(true)}
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-muted-foreground hover:text-destructive"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Salir</span>
              </Button>
            </>
          )}
        </div>
      </div>
      
      {/* Alert Dialog para confirmar cierre de sesión */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Cerrar sesión?</AlertDialogTitle>
            <AlertDialogDescription>
              Estás a punto de cerrar sesión. ¿Estás seguro que deseas continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleLogout}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Cerrar sesión
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}