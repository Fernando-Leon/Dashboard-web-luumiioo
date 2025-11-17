"use client";
import React, { useEffect, useState, useContext } from "react";
import { useRouter, useParams } from "next/navigation";
import { AuthContext } from "@/app/layoutClient/layoutClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { 
  ArrowLeft, 
  User, 
  Brain, 
  Target, 
  Trash2, 
  AlertTriangle,
  Mail,
  Calendar,
  Globe,
  Heart,
  CheckCircle2,
  Circle,
  ListChecks
} from "lucide-react";

export default function UserDetailPage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.id;
  const { isAuthenticated } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [mbtiTest, setMbtiTest] = useState(null);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [countryName, setCountryName] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        
        // Fetch user profile
        const userRes = await fetch(`/api/users/${userId}`, {
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

        if (userRes.ok) {
          const userData = await userRes.json();
          setUser(userData);

          // Fetch country name if countryId exists but country.name is null
          if (userData.countryId && (!userData.country || !userData.country.name)) {
            try {
              const countryRes = await fetch(`/api/countries/${userData.countryId}`, {
                headers: {
                  ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
              });
              if (countryRes.ok) {
                const countryData = await countryRes.json();
                setCountryName(countryData.name);
              }
            } catch (err) {
              console.log("Error fetching country:", err);
            }
          }
        }

        // Fetch MBTI test results
        try {
          const mbtiRes = await fetch(`/api/mbti/user/${userId}`, {
            headers: {
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          });

          if (mbtiRes.ok) {
            const mbtiData = await mbtiRes.json();
            setMbtiTest(mbtiData);
          }
        } catch (err) {
          console.log("No MBTI test found for user");
        }

        // Fetch user plans
        try {
          const plansRes = await fetch(`/api/plans/user/${userId}`, {
            headers: {
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          });

          if (plansRes.ok) {
            const plansData = await plansRes.json();
            setPlans(Array.isArray(plansData) ? plansData : [plansData]);
          }
        } catch (err) {
          console.log("No plans found for user");
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId, isAuthenticated, router]);

  const handleDeleteUser = async () => {
    setDeleting(true);
    try {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (res.ok) {
        router.push("/users");
      } else {
        const errorData = await res.json();
        alert(errorData.message || "Error al eliminar usuario");
      }
    } catch (err) {
      alert("Error al eliminar usuario: " + err.message);
    } finally {
      setDeleting(false);
      setShowDeleteDialog(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            Cargando información del usuario...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 px-4">
        <Card className="border-destructive">
          <CardContent className="pt-6">
            <p className="text-destructive text-center">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      {/* Header */}
      <div className="mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/users")}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a usuarios
        </Button>
        <h1 className="text-3xl font-bold">Detalle de Usuario</h1>
      </div>

      <div className="space-y-6">
        {/* Perfil de Usuario */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Perfil de Usuario</CardTitle>
                <CardDescription>Información personal y de cuenta</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {user ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Nickname</p>
                    <p className="font-medium">{user.nickname || "No especificado"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      UID
                    </p>
                    <p className="font-mono text-sm">{user.uid || "No especificado"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Fecha de Nacimiento
                    </p>
                    <p className="font-medium">
                      {user.birthdate ? new Date(user.birthdate).toLocaleDateString() : "No especificado"}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Género
                    </p>
                    <p className="font-medium">{user.gender?.name || "No especificado"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      País
                    </p>
                    <p className="font-medium">{user.country?.name || countryName || "No especificado"}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">No se pudo cargar la información del usuario</p>
            )}
          </CardContent>
        </Card>

        {/* Test de Personalidad */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10">
                <Brain className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <CardTitle>Test de Personalidad</CardTitle>
                <CardDescription>Resultados del test MBTI</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {mbtiTest ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {mbtiTest.personalityType || "No disponible"}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Realizado el {mbtiTest.createdAt ? new Date(mbtiTest.createdAt).toLocaleDateString() : "Fecha desconocida"}
                  </p>
                </div>
                {mbtiTest.description && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Descripción</p>
                    <p className="text-sm">{mbtiTest.description}</p>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-muted-foreground">Este usuario aún no ha realizado el test de personalidad</p>
            )}
          </CardContent>
        </Card>

        {/* Planes del Usuario */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <CardTitle>Planes del Usuario</CardTitle>
                <CardDescription>Planes de mejora generados por IA</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {plans.length > 0 ? (
              <div className="space-y-4">
                {plans.map((plan, index) => (
                  <div key={plan.id || index} className="p-4 border rounded-lg space-y-3 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-lg">{plan.goalName || `Plan ${index + 1}`}</h4>
                          {plan.isCompleted ? (
                            <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Completado
                            </Badge>
                          ) : (
                            <Badge variant="secondary">
                              <Circle className="h-3 w-3 mr-1" />
                              En progreso
                            </Badge>
                          )}
                        </div>
                        {plan.createdAt && (
                          <p className="text-xs text-muted-foreground">
                            Creado el {new Date(plan.createdAt).toLocaleDateString()}
                            {plan.dateCompleted && ` • Completado el ${new Date(plan.dateCompleted).toLocaleDateString()}`}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Progreso */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <ListChecks className="h-4 w-4" />
                          Progreso
                        </span>
                        <span className="font-medium">
                          {plan.completedTasks || 0} / {plan.numberOfTasks} tareas
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full transition-all ${
                            plan.isCompleted ? 'bg-green-600' : 'bg-blue-600'
                          }`}
                          style={{ width: `${Math.min(plan.progress * 100, 100)}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground text-right">
                        {Math.round(plan.progress * 100)}% completado
                      </p>
                    </div>

                    {/* Lista de tareas */}
                    {plan.tasks && plan.tasks.length > 0 && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm font-medium mb-3">Tareas del plan:</p>
                        <div className="space-y-2">
                          {plan.tasks.slice(0, 3).map((task, taskIndex) => (
                            <div 
                              key={task.id || taskIndex} 
                              className={`flex items-start gap-2 text-sm p-2 rounded ${
                                task.isCompleted ? 'bg-green-50 text-green-900' : 'bg-muted/50'
                              }`}
                            >
                              {task.isCompleted ? (
                                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              ) : (
                                <Circle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                              )}
                              <div className="flex-1">
                                <p className={task.isCompleted ? 'line-through' : ''}>{task.title}</p>
                                {task.description && (
                                  <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
                                )}
                              </div>
                            </div>
                          ))}
                          {plan.tasks.length > 3 && (
                            <p className="text-xs text-muted-foreground text-center pt-2">
                              +{plan.tasks.length - 3} tareas más
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">Este usuario aún no tiene planes generados</p>
            )}
          </CardContent>
        </Card>

        {/* Zona Peligrosa - Eliminar Cuenta */}
        <Card className="border-destructive">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-destructive/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <CardTitle className="text-destructive">Zona Peligrosa</CardTitle>
                <CardDescription>Esta acción es irreversible</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-destructive font-medium mb-2">
                  Advertencia: Esta acción eliminará permanentemente la cuenta
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Se eliminarán todos los datos del perfil</li>
                  <li>• Se perderán los resultados del test MBTI</li>
                  <li>• Se eliminarán todos los planes generados</li>
                  <li>• Esta acción no se puede deshacer</li>
                </ul>
              </div>
              <Button
                variant="destructive"
                onClick={() => setShowDeleteDialog(true)}
                className="w-full sm:w-auto"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Eliminar Cuenta de Usuario
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alert Dialog para confirmar eliminación */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              ¿Eliminar usuario permanentemente?
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-2">
              <p>Esta acción es irreversible y eliminará:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Toda la información del perfil de <strong>{user?.nickname}</strong></li>
                <li>Resultados del test de personalidad</li>
                <li>Todos los planes generados</li>
                <li>Cualquier otro dato asociado al usuario</li>
              </ul>
              <p className="font-semibold mt-4">¿Estás completamente seguro?</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteUser}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? "Eliminando..." : "Sí, eliminar permanentemente"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
