"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, ArrowLeft, CheckCircle2, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function MBTIAboutPage() {
  const mbtiTypes = [
    { type: "INTJ", name: "Arquitecto", color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
    { type: "INTP", name: "Lógico", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
    { type: "ENTJ", name: "Comandante", color: "bg-red-500/10 text-red-600 border-red-500/20" },
    { type: "ENTP", name: "Innovador", color: "bg-orange-500/10 text-orange-600 border-orange-500/20" },
    { type: "INFJ", name: "Consejero", color: "bg-green-500/10 text-green-600 border-green-500/20" },
    { type: "INFP", name: "Mediador", color: "bg-teal-500/10 text-teal-600 border-teal-500/20" },
    { type: "ENFJ", name: "Protagonista", color: "bg-pink-500/10 text-pink-600 border-pink-500/20" },
    { type: "ENFP", name: "Activista", color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20" },
    { type: "ISTJ", name: "Logístico", color: "bg-gray-500/10 text-gray-600 border-gray-500/20" },
    { type: "ISFJ", name: "Defensor", color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20" },
    { type: "ESTJ", name: "Ejecutivo", color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" },
    { type: "ESFJ", name: "Cónsul", color: "bg-rose-500/10 text-rose-600 border-rose-500/20" },
    { type: "ISTP", name: "Virtuoso", color: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
    { type: "ISFP", name: "Aventurero", color: "bg-lime-500/10 text-lime-600 border-lime-500/20" },
    { type: "ESTP", name: "Emprendedor", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
    { type: "ESFP", name: "Animador", color: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20" }
  ];

  const dimensions = [
    {
      title: "Energía",
      options: ["Extroversión (E)", "Introversión (I)"],
      description: "¿De dónde obtienes tu energía? Los extrovertidos se energizan con la interacción social, mientras que los introvertidos la obtienen del tiempo a solas."
    },
    {
      title: "Información",
      options: ["Sensorial (S)", "Intuitivo (N)"],
      description: "¿Cómo procesas la información? Los sensoriales confían en los hechos concretos, mientras que los intuitivos se enfocan en patrones y posibilidades."
    },
    {
      title: "Decisiones",
      options: ["Pensamiento (T)", "Sentimiento (F)"],
      description: "¿Cómo tomas decisiones? Los pensadores usan lógica y objetividad, mientras que los sentimentales consideran valores y emociones."
    },
    {
      title: "Estructura",
      options: ["Juicio (J)", "Percepción (P)"],
      description: "¿Cómo te organizas? Los juiciosos prefieren estructura y planificación, mientras que los perceptivos son más flexibles y espontáneos."
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
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10">
            <Brain className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Tests de Personalidad MBTI</h1>
            <p className="text-muted-foreground">Myers-Briggs Type Indicator</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Introducción */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              ¿Qué es el MBTI?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              El <span className="font-semibold text-foreground">Myers-Briggs Type Indicator (MBTI)</span> es 
              una de las herramientas de evaluación de personalidad más utilizadas en el mundo. Fue desarrollado 
              por Katharine Cook Briggs e Isabel Briggs Myers basándose en la teoría de los tipos psicológicos 
              de Carl Jung.
            </p>
            <p>
              El MBTI identifica <span className="font-semibold text-foreground">16 tipos de personalidad</span> diferentes 
              basándose en cuatro dimensiones fundamentales del comportamiento humano. No existen tipos &ldquo;mejores&rdquo; o &ldquo;peores&rdquo;, 
              cada uno tiene sus propias fortalezas y áreas de desarrollo.
            </p>
          </CardContent>
        </Card>

        {/* Las 4 Dimensiones */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Las 4 Dimensiones del MBTI</CardTitle>
            <CardDescription>
              Tu tipo de personalidad se determina por tu preferencia en cada una de estas dimensiones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dimensions.map((dimension, index) => (
                <div key={index} className="p-5 rounded-lg border-2 bg-card hover:shadow-md transition-all">
                  <h3 className="font-bold text-lg mb-3 text-primary">{dimension.title}</h3>
                  <div className="flex gap-2 mb-3">
                    {dimension.options.map((option, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {option}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{dimension.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Los 16 Tipos */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Los 16 Tipos de Personalidad</CardTitle>
            <CardDescription>
              Cada combinación de las 4 dimensiones resulta en un tipo único de personalidad
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {mbtiTypes.map((type, index) => (
                <div key={index} className={`p-3 rounded-lg border-2 text-center ${type.color} hover:scale-105 transition-transform`}>
                  <p className="font-bold text-sm">{type.type}</p>
                  <p className="text-xs mt-1">{type.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cómo Funciona en Luumiioo */}
        <Card className="border-2 bg-gradient-to-br from-purple-500/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              Funcionamiento en Luumiioo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">Evaluación Completa</p>
                <p className="text-sm text-muted-foreground">
                  Los usuarios responden una serie de preguntas diseñadas para identificar sus preferencias 
                  en cada una de las 4 dimensiones del MBTI.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">Análisis Automático</p>
                <p className="text-sm text-muted-foreground">
                  El sistema procesa las respuestas y calcula automáticamente el tipo de personalidad 
                  del usuario basándose en el modelo MBTI.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">Resultado Personalizado</p>
                <p className="text-sm text-muted-foreground">
                  El usuario recibe su tipo MBTI (ej: INTJ, ENFP) junto con una descripción detallada 
                  de sus características, fortalezas y áreas de desarrollo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">Base para Planes de IA</p>
                <p className="text-sm text-muted-foreground">
                  El tipo MBTI identificado se utiliza como base para generar planes de desarrollo 
                  personalizados mediante inteligencia artificial, adaptados a las características 
                  únicas de cada personalidad.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Beneficios */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Beneficios del Test MBTI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Autoconocimiento</p>
                  <p className="text-sm text-muted-foreground">
                    Comprende mejor tus preferencias, motivaciones y estilo de interacción
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Desarrollo Personal</p>
                  <p className="text-sm text-muted-foreground">
                    Identifica áreas de mejora y potencia tus fortalezas naturales
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <Brain className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Toma de Decisiones</p>
                  <p className="text-sm text-muted-foreground">
                    Entiende cómo procesas información y tomas decisiones importantes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Relaciones Interpersonales</p>
                  <p className="text-sm text-muted-foreground">
                    Mejora la comunicación al entender diferentes estilos de personalidad
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nota Importante */}
        <Card className="border-2 border-amber-500/20 bg-amber-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-2">Nota Importante</p>
                <p className="text-sm text-muted-foreground">
                  El MBTI es una herramienta de autoconocimiento y desarrollo personal. Los resultados 
                  son orientativos y no deben utilizarse como herramienta diagnóstica médica o psicológica 
                  profesional. Para obtener resultados precisos, es importante responder con honestidad 
                  y reflexión.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
