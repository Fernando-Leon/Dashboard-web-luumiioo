"use client";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/layoutClient/layoutClient";
import Modal from "@/components/Modal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { UserPlus, X, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [names, setNames] = useState("");
  const [lastnames, setLastnames] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    names: "",
    lastnames: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
        const res = await fetch("https://ms-auth-17nt.onrender.com/api/Roles", {
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });
        if (!res.ok) {
          const fallback = [{ id: "4e6cd9dc-48c6-4a06-b880-a29720d5397c", name: "Cliente" }];
          setRoles(fallback);
          setRoleId(fallback[0].id);
          return;
        }
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRoles(data);
          setRoleId(data[0].id);
        } else {
          setRoles([]);
        }
      } catch (err) {
        const fallback = [{ id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", name: "Usuario" }];
        setRoles(fallback);
        setRoleId(fallback[0].id);
      }
    };
    loadRoles();
  }, []);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (success) {
      setShowModal(true);
      const t = setTimeout(() => {
        setShowModal(false);
        router.push("/");
      }, 3000);
      return () => clearTimeout(t);
    }
  }, [success, router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Acceso denegado</CardTitle>
            <CardDescription>
              Debes iniciar sesión para crear usuarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/login">Ir al login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const validateField = (name, value) => {
    let errorMessage = "";
    switch (name) {
      case "username":
        if (!value) errorMessage = "El nombre de usuario es requerido";
        else if (value.length < 3) errorMessage = "Mínimo 3 caracteres";
        break;
      case "names":
        if (!value) errorMessage = "El nombre es requerido";
        break;
      case "lastnames":
        if (!value) errorMessage = "El apellido es requerido";
        break;
      case "password":
        if (!value) errorMessage = "La contraseña es requerida";
        else if (value.length < 6) errorMessage = "Mínimo 6 caracteres";
        if (confirmPassword && value !== confirmPassword) {
          setErrors(prev => ({ ...prev, confirmPassword: "Las contraseñas no coinciden" }));
        } else if (confirmPassword) {
          setErrors(prev => ({ ...prev, confirmPassword: "" }));
        }
        break;
      case "confirmPassword":
        if (!value) errorMessage = "Debe confirmar la contraseña";
        else if (value !== password) errorMessage = "Las contraseñas no coinciden";
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [name]: errorMessage }));
    return errorMessage;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const lastname = `${names} ${lastnames}`.trim();

    const fieldValidations = {
      username: validateField("username", username),
      names: validateField("names", names),
      lastnames: validateField("lastnames", lastnames),
      password: validateField("password", password),
      confirmPassword: validateField("confirmPassword", confirmPassword)
    };

    if (Object.values(fieldValidations).some(error => error !== "")) {
      setError("Por favor, corrija los errores antes de continuar");
      return;
    }
    
    setLoading(true);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ 
          Username: username, 
          Name: names, 
          Lastname: lastnames, 
          Password: password, 
          RoleId: roleId 
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        const errorMessage = errorData.errors 
          ? Object.values(errorData.errors).flat().join(', ')
          : errorData.error || errorData.message || `Error: ${res.status}`;
        setError(errorMessage);
        setLoading(false);
        return;
      }

      setSuccess("Usuario creado correctamente");
      setUsername("");
      setNames("");
      setLastnames("");
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
    } catch (err) {
      setError("Error de conexión con el servidor: " + err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <UserPlus className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Crear Usuario</CardTitle>
          <CardDescription>
            Completa el formulario para registrar un nuevo usuario
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="names">Nombre(s)</Label>
                <Input
                  id="names"
                  type="text"
                  placeholder="Juan"
                  value={names}
                  onChange={(e) => {
                    setNames(e.target.value);
                    validateField("names", e.target.value);
                  }}
                  disabled={loading}
                />
                {errors.names && <p className="text-xs text-destructive">{errors.names}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastnames">Apellido(s)</Label>
                <Input
                  id="lastnames"
                  type="text"
                  placeholder="Pérez García"
                  value={lastnames}
                  onChange={(e) => {
                    setLastnames(e.target.value);
                    validateField("lastnames", e.target.value);
                  }}
                  disabled={loading}
                />
                {errors.lastnames && <p className="text-xs text-destructive">{errors.lastnames}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Nombre de usuario</Label>
              <Input
                id="username"
                type="text"
                placeholder="admin01"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  validateField("username", e.target.value);
                }}
                disabled={loading}
              />
              {errors.username && <p className="text-xs text-destructive">{errors.username}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validateField("password", e.target.value);
                    }}
                    disabled={loading}
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      validateField("confirmPassword", e.target.value);
                    }}
                    disabled={loading}
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={loading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Rol</Label>
              <Select
                id="role"
                value={roleId}
                onChange={(e) => setRoleId(e.target.value)}
                disabled={loading}
              >
                {roles.map((r) => (
                  <option key={r.id} value={r.id}>{r.name}</option>
                ))}
              </Select>
            </div>

            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                {error}
              </div>
            )}
            
            {success && (
              <div className="p-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md">
                {success}
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="flex-1"
              >
                {loading ? 'Registrando...' : 'Registrar usuario'}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/")}
                disabled={loading}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Modal
        show={showModal}
        title="Operación exitosa"
        onClose={() => setShowModal(false)}
        secondary={{ label: "Cerrar", onClick: () => setShowModal(false) }}
        primary={{ label: "Ir al inicio", onClick: () => router.push("/") }}
      >
        <p>{success}</p>
      </Modal>
    </div>
  );
}
