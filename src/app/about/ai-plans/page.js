"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Brain, 
  TrendingUp,
  ListChecks,
  Zap,
  Users,
  Calendar
} from "lucide-react";

export default function AIPlansAboutPage() {
  const goals = [
    { name: "Mejorar Habilidades Sociales", icon: Users, color: "text-blue-600" },
    { name: "Aumentar Productividad", icon: TrendingUp, color: "text-green-600" },
    { name: "Desarrollar Creatividad", icon: Sparkles, color: "text-purple-600" },
    { name: "Gestión del Tiempo", icon: Calendar, color: "text-orange-600" },
    { name: "Inteligencia Emocional", icon: Brain, color: "text-pink-600" },
    { name: "Liderazgo", icon: Target, color: "text-red-600" }
  ];

  const features = [
    {
      icon: Brain,
      title: "Basado en Personalidad MBTI",
      description: "Cada plan se adapta específicamente a tu tipo de personalidad, respetando tus preferencias naturales y estilo de aprendizaje."
    },
    {
      icon: Target,
      title: "Orientado a Objetivos",
      description: "Selecciona tu meta de desarrollo personal y recibe un plan estructurado diseñado para alcanzarla de forma efectiva."
    },
    {
      icon: Sparkles,
      title: "Generado con IA",
      description: "Utilizamos inteligencia artificial avanzada para crear planes únicos y personalizados que se adaptan a tus necesidades."
    },
    {
      icon: ListChecks,
      title: "Tareas Accionables",
      description: "Cada plan incluye tareas concretas y medibles que puedes completar día a día para progresar hacia tu objetivo."
    },
    {
      icon: TrendingUp,
      title: "Seguimiento de Progreso",
      description: "Marca tareas como completadas y visualiza tu avance en tiempo real con barras de progreso y estadísticas."
    },
    {
      icon: Zap,
      title: "Actualización Continua",
      description: "Los planes se adaptan y evolucionan conforme avanzas, sugiriendo nuevos desafíos y áreas de mejora."
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>
      </Button>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10">
            <Target className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Planes Personalizados con IA</h1>
            <p className="text-muted-foreground">Desarrollo personal impulsado por inteligencia artificial</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Introducción */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              ¿Qué son los Planes de IA?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Los <span className="font-semibold text-foreground">Planes Personalizados con IA</span> son 
              programas de desarrollo personal generados automáticamente mediante inteligencia artificial, 
              diseñados específicamente para ti basándose en dos factores clave:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <Brain className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Tu Tipo MBTI</p>
                  <p className="text-sm">
                    El plan se adapta a las características únicas de tu personalidad, 
                    respetando tu forma natural de aprender y crecer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <Target className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Tu Objetivo Personal</p>
                  <p className="text-sm">
                    Selecciona qué área de tu vida deseas mejorar y recibe un plan 
                    específico para alcanzar esa meta.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metas Disponibles */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Metas de Desarrollo Disponibles</CardTitle>
            <CardDescription>
              Selecciona el área de tu vida que deseas mejorar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg border-2 hover:shadow-md transition-all hover:border-primary/50">
                    <Icon className={`h-6 w-6 ${goal.color}`} />
                    <p className="font-medium text-sm">{goal.name}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Características */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Características de los Planes</CardTitle>
            <CardDescription>
              Cada plan incluye funcionalidades diseñadas para maximizar tu progreso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-5 rounded-lg border-2 bg-card hover:shadow-md transition-all">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Cómo Funciona */}
        <Card className="border-2 bg-gradient-to-br from-green-500/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-green-600" />
              ¿Cómo Funciona el Sistema?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              {/* Step 1 */}
              <div className="flex items-start gap-4 pb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-semibold text-foreground mb-1">Completa tu Test MBTI</p>
                  <p className="text-sm text-muted-foreground">
                    Primero, responde el test de personalidad para identificar tu tipo MBTI. 
                    Este será la base para personalizar tu plan.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 pb-6 border-l-2 border-muted ml-5 pl-9 -mt-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white font-bold flex-shrink-0 -ml-14">
                  2
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-semibold text-foreground mb-1">Selecciona tu Objetivo</p>
                  <p className="text-sm text-muted-foreground">
                    Elige qué área de desarrollo personal te interesa trabajar: habilidades sociales, 
                    productividad, creatividad, liderazgo, etc.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 pb-6 border-l-2 border-muted ml-5 pl-9 -mt-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold flex-shrink-0 -ml-14">
                  3
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-semibold text-foreground mb-1">IA Genera tu Plan</p>
                  <p className="text-sm text-muted-foreground">
                    La inteligencia artificial analiza tu tipo MBTI y objetivo, generando un plan 
                    personalizado con tareas específicas adaptadas a tu personalidad.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4 border-l-2 border-muted ml-5 pl-9 -mt-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex-shrink-0 -ml-14">
                  4
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-semibold text-foreground mb-1">Ejecuta y Progresa</p>
                  <p className="text-sm text-muted-foreground">
                    Completa las tareas de tu plan día a día, marca tu progreso y observa cómo 
                    evolucionas hacia tu objetivo. El sistema rastrea tu avance automáticamente.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ejemplo de Plan */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-primary" />
              Ejemplo de Plan Personalizado
            </CardTitle>
            <CardDescription>
              Plan para INTJ: &ldquo;Mejorar Habilidades Sociales&rdquo;
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-muted/30 rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">
                    Practica escucha activa en 2 conversaciones diarias
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Enfócate en entender antes de responder, aprovechando tu capacidad analítica INTJ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-muted flex-shrink-0 mt-0.5">
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">
                    Inicia una conversación casual con un compañero de trabajo
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Usa tu planificación estratégica para preparar temas de interés común
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-muted flex-shrink-0 mt-0.5">
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">
                    Lee un artículo sobre lenguaje corporal y aplica 3 técnicas
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Aprovecha tu amor por el conocimiento para dominar la comunicación no verbal
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Progreso del Plan</p>
                <p className="text-sm text-muted-foreground">1 de 3 tareas completadas</p>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Beneficios */}
        <Card className="border-2 border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Beneficios de los Planes con IA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">100% Personalizado a tu Personalidad</p>
                <p className="text-sm text-muted-foreground">
                  No hay dos planes iguales. Cada uno se adapta a las fortalezas y preferencias de tu tipo MBTI.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Tareas Prácticas y Accionables</p>
                <p className="text-sm text-muted-foreground">
                  Olvídate de consejos vagos. Recibe pasos concretos que puedes implementar inmediatamente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Progreso Medible</p>
                <p className="text-sm text-muted-foreground">
                  Visualiza tu avance en tiempo real y mantén la motivación al ver resultados tangibles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Disponible 24/7</p>
                <p className="text-sm text-muted-foreground">
                  Accede a tu plan en cualquier momento desde tu dispositivo móvil y continúa tu desarrollo.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
