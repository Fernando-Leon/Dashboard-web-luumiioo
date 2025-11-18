"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/app/layoutClient/layoutClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Brain, 
  Target, 
  BarChart3, 
  Settings, 
  Shield, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Database,
  Activity
} from "lucide-react";

/**
 * HomePage: Página principal del panel administrativo de Luumiioo
 * Dashboard para gestionar la aplicación móvil
 */
export default function HomePage() {
  const { isAuthenticated } = useContext(AuthContext);

  const adminFeatures = [
    {
      icon: Users,
      title: "Gestión de Usuarios",
      description: "Administra perfiles, visualiza información detallada y gestiona cuentas de usuarios de la aplicación móvil",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      link: "/users"
    },
    {
      icon: BarChart3,
      title: "Estadísticas y Análisis",
      description: "Analiza métricas demográficas, tests MBTI completados, planes activos y tendencias de uso en tiempo real",
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
      link: "/statistics"
    },
    {
      icon: Settings,
      title: "Registro de Usuarios",
      description: "Crea nuevas cuentas de usuario y configura permisos de acceso al sistema administrativo",
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
      link: "/register"
    }
  ];

  const aboutFeatures = [
    {
      icon: Brain,
      title: "Tests de Personalidad MBTI",
      description: "Descubre cómo funcionan las evaluaciones psicométricas basadas en el modelo Myers-Briggs",
      color: "text-pink-600",
      bgColor: "bg-pink-500/10",
      link: "/about/mbti"
    },
    {
      icon: Target,
      title: "Planes Personalizados con IA",
      description: "Conoce el sistema de generación automática de planes de desarrollo personal mediante inteligencia artificial",
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      link: "/about/ai-plans"
    }
  ];

  const stats = [
    { 
      icon: Activity, 
      label: "Microservicios", 
      value: "4", 
      color: "text-blue-600" 
    },
    { 
      icon: Database, 
      label: "Gestión en Tiempo Real", 
      value: "100%", 
      color: "text-green-600" 
    },
    { 
      icon: TrendingUp, 
      label: "Análisis de Datos", 
      value: "∞", 
      color: "text-purple-600" 
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Panel Administrativo</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Dashboard{" "}
                  <span className="text-primary">Luumiioo</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Sistema administrativo para gestionar la aplicación móvil de desarrollo personal
                </p>
              </div>
            </div>

            {/* Login Card */}
            <Card className="border-2 shadow-xl">
              <CardHeader className="text-center space-y-2 pb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Acceso Restringido</CardTitle>
                <CardDescription className="text-base">
                  Esta es una plataforma administrativa. Necesitas autenticarte para acceder.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Gestión Centralizada</p>
                      <p className="text-sm text-muted-foreground">
                        Administra todos los aspectos de la app móvil desde un solo lugar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Análisis en Tiempo Real</p>
                      <p className="text-sm text-muted-foreground">
                        Visualiza estadísticas y métricas actualizadas de usuarios y planes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Arquitectura de Microservicios</p>
                      <p className="text-sm text-muted-foreground">
                        Conectado a 4 microservicios: Autenticación, Usuarios, MBTI e IA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/login" className="flex items-center justify-center gap-2">
                      Iniciar Sesión
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    ¿No tienes cuenta?{" "}
                    <Link href="/register" className="font-medium text-primary hover:underline">
                      Solicita acceso
                    </Link>
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground text-center">
                    Este panel es exclusivo para administradores. Los usuarios finales deben usar la{" "}
                    <span className="font-medium text-foreground">aplicación móvil Luumiioo</span>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-sm">
                    <CardContent className="pt-6">
                      <Icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2 border-primary/20 bg-primary/5">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              Panel Administrativo
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Dashboard{" "}
                <span className="text-primary">Luumiioo</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Gestiona la aplicación móvil de desarrollo personal basada en MBTI e inteligencia artificial
              </p>
            </div>
          </div>

          {/* Overview Card */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Sistema de Gestión Integral</CardTitle>
              <CardDescription className="text-base">
                Herramientas administrativas para supervisar usuarios, analizar estadísticas y gestionar funcionalidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {adminFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Link
                      key={index}
                      href={feature.link}
                      className="group relative p-6 rounded-lg border bg-card hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-primary/50"
                    >
                      <div className="flex flex-col space-y-3">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.bgColor} group-hover:scale-110 transition-transform`}>
                          <Icon className={`h-6 w-6 ${feature.color}`} />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all self-end" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* About Section */}
          <Card className="border-2 shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Acerca de la Aplicación</CardTitle>
              <CardDescription className="text-base">
                Conoce las funcionalidades principales de Luumiioo para usuarios móviles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Link
                      key={index}
                      href={feature.link}
                      className="group relative p-8 rounded-lg border-2 bg-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-primary/50"
                    >
                      <div className="flex flex-col space-y-4">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.bgColor} group-hover:scale-110 transition-transform`}>
                          <Icon className={`h-8 w-8 ${feature.color}`} />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          Conocer más
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Architecture Info */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Database className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Arquitectura de Microservicios</CardTitle>
              </div>
              <CardDescription className="text-base">
                Este dashboard se conecta a una arquitectura distribuida de servicios especializados para máxima escalabilidad y rendimiento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-5 rounded-lg border-2 border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    <p className="font-bold text-base">ms-auth</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Autenticación y autorización mediante JWT. Gestiona tokens de acceso y permisos.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-5 rounded-lg border-2 border-green-500/20 hover:border-green-500/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="font-bold text-base">ms-app</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Gestión de usuarios, perfiles, países y datos demográficos de la aplicación.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-5 rounded-lg border-2 border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                    <p className="font-bold text-base">ms-mbti-test</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Tests de personalidad MBTI, preguntas, sesiones y resultados psicométricos.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-5 rounded-lg border-2 border-orange-500/20 hover:border-orange-500/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
                    <p className="font-bold text-base">ms-ia</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Generación de planes personalizados con IA basados en metas y personalidad.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6 border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Comunicación Segura</p>
                    <p className="text-sm text-muted-foreground">
                      Todos los microservicios se comunican mediante APIs REST con autenticación JWT y cifrado HTTPS/TLS.
                      Cada servicio opera de forma independiente con su propia base de datos.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}