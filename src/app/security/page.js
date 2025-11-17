"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, ArrowLeft, ShieldCheck, Key, FileKey, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function SecurityPage() {
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
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Seguridad y Protección de Datos</h1>
            <p className="text-muted-foreground">
              Cómo protegemos su información en Luumiioo
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Nuestro Compromiso con la Seguridad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              En Luumiioo, la seguridad de sus datos es nuestra máxima prioridad. Implementamos
              múltiples capas de protección para garantizar que su información personal,
              resultados de personalidad y planes de desarrollo permanezcan privados y seguros.
            </p>
            <p>
              Nuestro equipo de desarrollo sigue las mejores prácticas de la industria y
              mantiene actualizados constantemente nuestros sistemas de seguridad para protegerlo
              contra amenazas emergentes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Cifrado de Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <div className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">
                  Cifrado en Tránsito (TLS/HTTPS)
                </p>
                <p>
                  Todas las comunicaciones entre su navegador y nuestros servidores están
                  protegidas mediante cifrado TLS 1.3. Esto significa que cualquier dato que
                  envíe o reciba está encriptado y no puede ser interceptado por terceros.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">
                  Cifrado en Reposo
                </p>
                <p>
                  Sus datos almacenados en nuestras bases de datos están protegidos mediante
                  cifrado AES-256, el mismo estándar utilizado por instituciones financieras
                  y gubernamentales.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">
                  Hashing de Contraseñas
                </p>
                <p>
                  Las contraseñas nunca se almacenan en texto plano. Utilizamos algoritmos de
                  hashing bcrypt con salt único para cada usuario, haciendo prácticamente
                  imposible recuperar la contraseña original incluso en caso de brecha.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              Autenticación y Control de Acceso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p className="font-medium text-foreground">Sistema de Autenticación JWT</p>
            <p>
              Implementamos autenticación basada en JSON Web Tokens (JWT) que proporciona:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Sesiones seguras con tokens firmados criptográficamente</li>
              <li>Expiración automática de sesiones para prevenir accesos no autorizados</li>
              <li>Tokens de actualización (refresh tokens) para mantener sesiones válidas</li>
              <li>Revocación instantánea de tokens comprometidos</li>
            </ul>

            <p className="font-medium text-foreground mt-4">Control de Acceso Basado en Roles</p>
            <p>
              Cada usuario tiene permisos específicos según su rol. Los administradores tienen
              acceso adicional al dashboard, mientras que los usuarios regulares solo pueden
              acceder a sus propios datos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileKey className="h-5 w-5 text-primary" />
              Arquitectura de Seguridad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p className="font-medium text-foreground">Microservicios Aislados</p>
            <p>
              Nuestra plataforma utiliza una arquitectura de microservicios que separa las
              responsabilidades y minimiza el impacto de potenciales vulnerabilidades:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <span className="font-medium text-foreground">ms-app:</span> Gestión de usuarios
                y perfiles
              </li>
              <li>
                <span className="font-medium text-foreground">ms-auth:</span> Autenticación
                centralizada
              </li>
              <li>
                <span className="font-medium text-foreground">ms-mbti-test:</span> Evaluaciones
                de personalidad
              </li>
              <li>
                <span className="font-medium text-foreground">ms-ia:</span> Generación de planes
                con IA
              </li>
            </ul>

            <p className="mt-4">
              Cada microservicio opera de forma independiente con su propia base de datos,
              limitando el acceso a datos solo cuando es absolutamente necesario.
            </p>

            <div className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg mt-4">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">API Gateway</p>
                <p>
                  Todas las peticiones pasan por un gateway que valida tokens, controla tasas
                  de peticiones (rate limiting) y registra actividad para detectar patrones
                  sospechosos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Protecciones Implementadas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <div className="grid gap-3">
              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <Badge variant="outline" className="mt-1">SQL</Badge>
                <div>
                  <p className="font-medium text-foreground">Prevención de Inyección SQL</p>
                  <p className="text-sm">
                    Utilizamos consultas parametrizadas y Entity Framework para prevenir
                    ataques de inyección SQL.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <Badge variant="outline" className="mt-1">XSS</Badge>
                <div>
                  <p className="font-medium text-foreground">Protección contra XSS</p>
                  <p className="text-sm">
                    Sanitización automática de entradas y escapado de salidas para prevenir
                    scripts maliciosos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <Badge variant="outline" className="mt-1">CSRF</Badge>
                <div>
                  <p className="font-medium text-foreground">Protección CSRF</p>
                  <p className="text-sm">
                    Tokens anti-CSRF en todas las operaciones de modificación de datos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <Badge variant="outline" className="mt-1">CORS</Badge>
                <div>
                  <p className="font-medium text-foreground">Política CORS Estricta</p>
                  <p className="text-sm">
                    Solo dominios autorizados pueden realizar peticiones a nuestras APIs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <Badge variant="outline" className="mt-1">Rate Limiting</Badge>
                <div>
                  <p className="font-medium text-foreground">Límite de Peticiones</p>
                  <p className="text-sm">
                    Protección contra ataques de fuerza bruta y DDoS mediante limitación de
                    peticiones.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Mejores Prácticas para su Seguridad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Aunque implementamos medidas de seguridad robustas, su colaboración es esencial
              para mantener su cuenta segura:
            </p>

            <div className="bg-muted/30 p-4 rounded-lg space-y-3 mt-4">
              <p className="font-medium text-foreground">Recomendaciones:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Utilice una contraseña fuerte y única para Luumiioo</li>
                <li>Combine letras mayúsculas, minúsculas, números y símbolos</li>
                <li>No comparta su contraseña con nadie</li>
                <li>No utilice la misma contraseña en múltiples sitios</li>
                <li>Cierre sesión cuando use dispositivos compartidos</li>
                <li>Mantenga su navegador y sistema operativo actualizados</li>
                <li>Tenga cuidado con correos de phishing que soliciten sus credenciales</li>
                <li>Revise regularmente la actividad de su cuenta</li>
              </ul>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg mt-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">
                    Luumiioo nunca le pedirá su contraseña por correo electrónico
                  </p>
                  <p className="text-sm mt-1">
                    Si recibe un correo sospechoso que parece provenir de Luumiioo solicitando
                    credenciales, repórtelo inmediatamente a security@luumiioo.com
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Respuesta a Incidentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              En el improbable caso de una brecha de seguridad que afecte sus datos personales:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Le notificaremos dentro de las 72 horas siguientes al descubrimiento del
                incidente
              </li>
              <li>Proporcionaremos detalles sobre qué datos fueron afectados</li>
              <li>Explicaremos las medidas que estamos tomando para mitigar el daño</li>
              <li>Ofreceremos recomendaciones sobre pasos que puede tomar para protegerse</li>
              <li>Trabajaremos con las autoridades pertinentes según sea necesario</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Auditorías y Cumplimiento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Realizamos auditorías de seguridad periódicas para identificar y corregir
              vulnerabilidades potenciales:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Revisiones de código con enfoque en seguridad</li>
              <li>Pruebas de penetración trimestrales</li>
              <li>Análisis de dependencias para detectar vulnerabilidades conocidas</li>
              <li>Monitoreo continuo de logs y actividad anómala</li>
              <li>Actualizaciones de seguridad aplicadas inmediatamente</li>
            </ul>

            <p className="mt-4">
              Cumplimos con estándares internacionales de protección de datos y mantenemos
              nuestros sistemas alineados con las mejores prácticas de la industria.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contacto de Seguridad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Si descubre una vulnerabilidad de seguridad o tiene preocupaciones sobre la
              seguridad de su cuenta, contáctenos inmediatamente:
            </p>
            <ul className="list-none space-y-2 ml-4 mt-4">
              <li className="font-medium text-foreground">
                Email de seguridad: security@luumiioo.com
              </li>
              <li>Email general: contact@luumiioo.com</li>
              <li>Desarrollado por: DevsXiadanos</li>
            </ul>

            <div className="bg-muted/30 p-4 rounded-lg mt-4">
              <p className="font-medium text-foreground mb-2">Divulgación Responsable</p>
              <p className="text-sm">
                Si encuentra una vulnerabilidad de seguridad, le pedimos que nos la comunique
                de manera responsable antes de hacerla pública. Nos comprometemos a investigar
                y responder rápidamente a todos los reportes de seguridad legítimos.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
