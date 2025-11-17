"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Política de Privacidad</h1>
            <p className="text-muted-foreground">Última actualización: Noviembre 2025</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Introducción</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              En Luumiioo, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta
              política de privacidad describe cómo recopilamos, usamos, compartimos y protegemos
              su información personal cuando utiliza nuestra plataforma.
            </p>
            <p>
              Al utilizar Luumiioo, usted acepta las prácticas descritas en esta política de
              privacidad. Si no está de acuerdo con nuestras políticas y prácticas, su opción
              es no utilizar nuestra plataforma.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Información que Recopilamos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p className="font-medium text-foreground">Información de Registro:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nombre de usuario (nickname)</li>
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Fecha de nacimiento</li>
              <li>País de residencia</li>
              <li>Género</li>
            </ul>

            <p className="font-medium text-foreground mt-4">Información de la Evaluación MBTI:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respuestas a las preguntas del test de personalidad</li>
              <li>Resultado del tipo de personalidad MBTI</li>
              <li>Fecha de realización del test</li>
            </ul>

            <p className="font-medium text-foreground mt-4">Información de Planes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Objetivos seleccionados para desarrollo personal</li>
              <li>Planes generados por IA</li>
              <li>Progreso en las tareas de cada plan</li>
              <li>Estado de finalización de planes</li>
            </ul>

            <p className="font-medium text-foreground mt-4">Información Técnica:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dirección IP</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>Fecha y hora de acceso</li>
              <li>Páginas visitadas dentro de la plataforma</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Cómo Utilizamos su Información</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>Utilizamos la información recopilada para los siguientes propósitos:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Generar su perfil de personalidad MBTI</li>
              <li>Crear planes de desarrollo personalizados mediante IA</li>
              <li>Mejorar y personalizar su experiencia en la plataforma</li>
              <li>Enviar notificaciones relacionadas con su cuenta y planes</li>
              <li>Realizar análisis estadísticos agregados (datos anonimizados)</li>
              <li>Detectar, prevenir y abordar problemas técnicos o de seguridad</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Base Legal para el Tratamiento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Procesamos sus datos personales basándonos en las siguientes bases legales:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <span className="font-medium text-foreground">Consentimiento:</span> Al
                registrarse, usted consiente el procesamiento de sus datos personales
              </li>
              <li>
                <span className="font-medium text-foreground">Ejecución de contrato:</span>{" "}
                Necesitamos sus datos para proporcionarle los servicios solicitados
              </li>
              <li>
                <span className="font-medium text-foreground">Interés legítimo:</span> Para
                mejorar nuestros servicios y garantizar la seguridad de la plataforma
              </li>
              <li>
                <span className="font-medium text-foreground">Obligación legal:</span> Cuando
                sea requerido por ley
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Compartir Información</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Luumiioo no vende, alquila ni comparte su información personal con terceros para
              fines de marketing. Solo compartimos información en los siguientes casos:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <span className="font-medium text-foreground">Proveedores de servicios:</span>{" "}
                Empresas que nos ayudan a operar la plataforma (hosting, almacenamiento en la
                nube, servicios de IA)
              </li>
              <li>
                <span className="font-medium text-foreground">Requisitos legales:</span> Cuando
                sea necesario cumplir con leyes, regulaciones o procesos legales
              </li>
              <li>
                <span className="font-medium text-foreground">Protección de derechos:</span>{" "}
                Para proteger nuestros derechos, privacidad, seguridad o propiedad
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Seguridad de los Datos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para
              proteger su información personal contra acceso no autorizado, alteración,
              divulgación o destrucción:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cifrado de datos en tránsito mediante HTTPS/TLS</li>
              <li>Almacenamiento seguro de contraseñas mediante hash</li>
              <li>Autenticación mediante tokens JWT</li>
              <li>Servidores protegidos con firewalls y monitoreo</li>
              <li>Acceso restringido a datos personales solo para personal autorizado</li>
              <li>Auditorías de seguridad regulares</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Retención de Datos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Conservamos su información personal mientras su cuenta esté activa o según sea
              necesario para proporcionarle servicios.
            </p>
            <p>
              Cuando elimine su cuenta, todos sus datos personales, resultados MBTI y planes
              generados serán eliminados permanentemente de nuestros sistemas activos dentro
              de un plazo de 30 días.
            </p>
            <p>
              Algunos datos pueden conservarse en copias de seguridad por un período adicional
              de hasta 90 días antes de ser eliminados completamente.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Sus Derechos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>Usted tiene los siguientes derechos respecto a sus datos personales:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <span className="font-medium text-foreground">Acceso:</span> Solicitar una copia
                de sus datos personales
              </li>
              <li>
                <span className="font-medium text-foreground">Rectificación:</span> Corregir
                datos inexactos o incompletos
              </li>
              <li>
                <span className="font-medium text-foreground">Eliminación:</span> Solicitar la
                eliminación de sus datos personales
              </li>
              <li>
                <span className="font-medium text-foreground">Portabilidad:</span> Recibir sus
                datos en formato estructurado y legible
              </li>
              <li>
                <span className="font-medium text-foreground">Oposición:</span> Oponerse al
                procesamiento de sus datos
              </li>
              <li>
                <span className="font-medium text-foreground">Retirar consentimiento:</span> En
                cualquier momento, sin afectar la legalidad del procesamiento anterior
              </li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, contáctenos en privacy@luumiioo.com
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Cookies y Tecnologías Similares</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Utilizamos cookies y tecnologías similares para mejorar su experiencia,
              analizar el uso de la plataforma y personalizar contenido.
            </p>
            <p className="font-medium text-foreground">Tipos de cookies que utilizamos:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <span className="font-medium text-foreground">Esenciales:</span> Necesarias para
                el funcionamiento básico de la plataforma
              </li>
              <li>
                <span className="font-medium text-foreground">Autenticación:</span> Para mantener
                su sesión activa
              </li>
              <li>
                <span className="font-medium text-foreground">Preferencias:</span> Para recordar
                sus configuraciones
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Cambios a esta Política</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Podemos actualizar esta política de privacidad periódicamente. Le notificaremos
              cualquier cambio significativo publicando la nueva política en esta página y
              actualizando la fecha de &ldquo;última actualización&rdquo;.
            </p>
            <p>
              Le recomendamos revisar esta política periódicamente para estar informado sobre
              cómo protegemos su información.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>11. Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos sus
              datos personales, puede contactarnos:
            </p>
            <ul className="list-none space-y-1 ml-4">
              <li>Email: privacy@luumiioo.com</li>
              <li>Email general: contact@luumiioo.com</li>
              <li>Desarrollado por: DevsXiadanos</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
