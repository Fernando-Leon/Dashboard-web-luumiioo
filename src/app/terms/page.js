"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>
      </Button>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Términos y Condiciones de Uso</h1>
            <p className="text-muted-foreground">Última actualización: Noviembre 2025</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Aceptación de los Términos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Al acceder y utilizar la plataforma Luumiioo, usted acepta estar sujeto a estos
              términos y condiciones de uso, todas las leyes y regulaciones aplicables, y acepta
              que es responsable del cumplimiento de las leyes locales aplicables.
            </p>
            <p>
              Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder
              a este sitio. Los materiales contenidos en este sitio web están protegidos por las
              leyes de derechos de autor y marcas comerciales aplicables.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Uso de la Plataforma</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Luumiioo es una plataforma de desarrollo personal que combina evaluaciones de
              personalidad MBTI con planes de mejora personalizados generados mediante
              inteligencia artificial.
            </p>
            <p className="font-medium text-foreground">Usted se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Proporcionar información veraz y actualizada durante el registro</li>
              <li>Mantener la confidencialidad de sus credenciales de acceso</li>
              <li>No utilizar la plataforma para fines ilícitos o no autorizados</li>
              <li>No intentar vulnerar la seguridad de la plataforma</li>
              <li>Respetar los derechos de propiedad intelectual de Luumiioo</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Pruebas de Personalidad MBTI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Los resultados de las pruebas MBTI son orientativos y tienen fines de autoconocimiento
              y desarrollo personal. No deben utilizarse como herramienta diagnóstica médica o
              psicológica profesional.
            </p>
            <p>
              Los resultados se generan mediante algoritmos basados en las respuestas proporcionadas
              por el usuario. La precisión depende de la honestidad y reflexión en las respuestas.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Planes Generados por IA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Los planes de desarrollo personal son generados automáticamente mediante inteligencia
              artificial basándose en el perfil MBTI del usuario y sus objetivos seleccionados.
            </p>
            <p>
              Estos planes son sugerencias y recomendaciones para el crecimiento personal. Luumiioo
              no garantiza resultados específicos derivados del seguimiento de estos planes.
            </p>
            <p>
              Los usuarios deben usar su propio criterio y, si es necesario, consultar con
              profesionales cualificados antes de implementar cambios significativos en su vida.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Propiedad Intelectual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Todo el contenido de la plataforma Luumiioo, incluyendo textos, gráficos, logotipos,
              iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es
              propiedad de Luumiioo o de sus proveedores de contenido.
            </p>
            <p>
              Los planes generados para cada usuario son de uso personal y no pueden ser
              redistribuidos con fines comerciales sin autorización expresa.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Limitación de Responsabilidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Luumiioo no será responsable de ningún daño directo, indirecto, incidental,
              especial, consecuente o punitivo que resulte del uso o la imposibilidad de usar
              la plataforma.
            </p>
            <p>
              La plataforma se proporciona &ldquo;tal cual&rdquo; sin garantías de ningún tipo, ya sean
              expresas o implícitas, incluyendo, pero no limitado a, garantías de comerciabilidad,
              idoneidad para un propósito particular y no infracción.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Modificaciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Luumiioo se reserva el derecho de revisar estos términos de servicio en cualquier
              momento sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a
              la versión actual de estos términos y condiciones de uso.
            </p>
            <p>
              Las modificaciones entrarán en vigor inmediatamente después de su publicación en la
              plataforma. Es responsabilidad del usuario revisar periódicamente estos términos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Terminación de Cuenta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Los usuarios pueden cancelar su cuenta en cualquier momento desde la configuración
              de su perfil. Al eliminar la cuenta, se eliminarán todos los datos asociados,
              incluyendo resultados MBTI y planes generados.
            </p>
            <p>
              Luumiioo se reserva el derecho de suspender o terminar cuentas que violen estos
              términos de uso o realicen actividades que perjudiquen la plataforma o a otros
              usuarios.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Si tiene preguntas sobre estos términos y condiciones, puede contactarnos a través
              de:
            </p>
            <ul className="list-none space-y-1 ml-4">
              <li>Email: legal@luumiioo.com</li>
              <li>Desarrollado por: DevsXiadanos</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
