"use client";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/app/layoutClient/layoutClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Brain, Target, Globe, Heart, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Paleta de grises neutros para gráficas - más profesional y minimalista
const COLORS = {
  gray900: "hsl(0, 0%, 15%)",   // Gris muy oscuro
  gray700: "hsl(0, 0%, 35%)",   // Gris oscuro
  gray600: "hsl(0, 0%, 45%)",   // Gris medio-oscuro
  gray500: "hsl(0, 0%, 55%)",   // Gris medio
  gray400: "hsl(0, 0%, 65%)",   // Gris medio-claro
  gray300: "hsl(0, 0%, 75%)",   // Gris claro
  gray200: "hsl(0, 0%, 85%)",   // Gris muy claro
};

const CHART_COLORS = [
  COLORS.gray900,
  COLORS.gray700,
  COLORS.gray600,
  COLORS.gray500,
  COLORS.gray400,
  COLORS.gray300,
];

/**
 * StatisticsPage - Página de estadísticas del sistema
 * Muestra métricas de usuarios, personalidades y planes
 */
export default function StatisticsPage() {
  const { isAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [mbtiResults, setMbtiResults] = useState([]);
  const [plans, setPlans] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        // Obtener usuarios
        const usersRes = await fetch("/api/statistics/users", {
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });
        if (usersRes.ok) {
          const usersData = await usersRes.json();
          
          // Fetch country names for users with countryId but no country.name
          const usersWithCountries = await Promise.all(
            usersData.map(async (user) => {
              if (user.countryId && (!user.country || !user.country.name)) {
                try {
                  const countryRes = await fetch(`/api/countries/${user.countryId}`, {
                    headers: {
                      ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                  });
                  if (countryRes.ok) {
                    const countryData = await countryRes.json();
                    return { ...user, country: { name: countryData.name } };
                  }
                } catch (err) {
                  console.log("Error fetching country:", err);
                }
              }
              return user;
            })
          );
          
          setUsers(usersWithCountries);

          // Obtener resultados MBTI de cada usuario
          const mbtiPromises = usersData.map(async (user) => {
            try {
              const mbtiRes = await fetch(`/api/mbti/user/${user.id}`, {
                headers: {
                  ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
              });
              if (mbtiRes.ok) {
                return await mbtiRes.json();
              }
            } catch (err) {
              return null;
            }
            return null;
          });

          const mbtiData = (await Promise.all(mbtiPromises)).filter(Boolean);
          setMbtiResults(mbtiData);

          // Obtener planes de cada usuario
          const plansPromises = usersWithCountries.map(async (user) => {
            try {
              const plansRes = await fetch(`/api/plans/user/${user.id}`, {
                headers: {
                  ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
              });
              if (plansRes.ok) {
                const plansData = await plansRes.json();
                return Array.isArray(plansData) ? plansData : [plansData];
              }
            } catch (err) {
              return [];
            }
            return [];
          });

          const allPlans = (await Promise.all(plansPromises)).flat();
          setPlans(allPlans);
        }

        // Obtener todas las metas disponibles
        const goalsRes = await fetch("/api/statistics/goals", {
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });
        if (goalsRes.ok) {
          const goalsData = await goalsRes.json();
          setGoals(goalsData);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching statistics:", err);
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchStatistics();
    }
  }, [isAuthenticated]);

  // Procesar datos para gráficas

  // 1. Distribución por país
  const countryData = users.reduce((acc, user) => {
    const country = user.country?.name || "Desconocido";
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});
  const countryChartData = Object.entries(countryData)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // 2. Distribución por género
  const genderData = users.reduce((acc, user) => {
    const gender = user.gender?.name || "No especificado";
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});
  const genderChartData = Object.entries(genderData).map(([name, value]) => ({
    name,
    value,
    percentage: ((value / users.length) * 100).toFixed(1),
  }));

  // 3. Distribución por edad
  const ageData = users.reduce((acc, user) => {
    if (user.birthdate) {
      const age = new Date().getFullYear() - new Date(user.birthdate).getFullYear();
      if (age < 18) acc["<18"] = (acc["<18"] || 0) + 1;
      else if (age < 25) acc["18-24"] = (acc["18-24"] || 0) + 1;
      else if (age < 35) acc["25-34"] = (acc["25-34"] || 0) + 1;
      else if (age < 45) acc["35-44"] = (acc["35-44"] || 0) + 1;
      else if (age < 55) acc["45-54"] = (acc["45-54"] || 0) + 1;
      else acc["55+"] = (acc["55+"] || 0) + 1;
    }
    return acc;
  }, {});
  const ageChartData = Object.entries(ageData).map(([name, value]) => ({ name, value }));

  // 4. Distribución de personalidades MBTI
  const personalityData = mbtiResults.reduce((acc, result) => {
    const type = result.personalityType || "Desconocido";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  const personalityChartData = Object.entries(personalityData)
    .map(([name, value]) => ({
      name,
      value,
      percentage: ((value / mbtiResults.length) * 100).toFixed(1),
    }))
    .sort((a, b) => b.value - a.value);

  // 5. Metas más seleccionadas
  const goalData = plans.reduce((acc, plan) => {
    const goalName = plan.goalName || "Desconocido";
    acc[goalName] = (acc[goalName] || 0) + 1;
    return acc;
  }, {});
  const goalChartData = Object.entries(goalData)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            Cargando estadísticas...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 space-y-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Estadísticas</h1>
            <p className="text-muted-foreground">Métricas y análisis del sistema</p>
          </div>
        </div>
      </div>

      {/* Cards de resumen con descripciones detalladas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Usuarios Totales
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Cantidad total de usuarios registrados en la plataforma. Esta métrica incluye
              todos los perfiles activos del sistema.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tests MBTI Completados
            </CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mbtiResults.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {users.length > 0
                ? ((mbtiResults.length / users.length) * 100).toFixed(1)
                : 0}
              % de usuarios han completado el test
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Usuarios que han finalizado su evaluación de personalidad MBTI y cuentan con
              resultados disponibles.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Planes Generados
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{plans.length}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Total de planes de mejora personal generados por la IA basados en el perfil
              MBTI de cada usuario.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Planes Completados
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {plans.filter((p) => p.isCompleted).length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {plans.length > 0
                ? ((plans.filter((p) => p.isCompleted).length / plans.length) * 100).toFixed(
                    1
                  )
                : 0}
              % del total de planes finalizados
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Número de planes que han sido completados exitosamente por los usuarios,
              reflejando el compromiso con su desarrollo.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficas de usuarios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top 5 Países */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <CardTitle>Top 5 Países</CardTitle>
            </div>
            <CardDescription>Distribución geográfica de usuarios</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={countryChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 89.8%)" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.gray900} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribución por Género */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <CardTitle>Distribución por Género</CardTitle>
            </div>
            <CardDescription>Porcentaje de usuarios por género</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {genderChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Edad y Personalidades */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distribución por Edad */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Distribución por Edad</CardTitle>
            </div>
            <CardDescription>Rangos de edad de usuarios</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 89.8%)" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.gray700} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Personalidades MBTI */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <CardTitle>Personalidades MBTI</CardTitle>
            </div>
            <CardDescription>Distribución de tipos de personalidad</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={personalityChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 89.8%)" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.gray600} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Metas más seleccionadas */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <CardTitle>Metas Más Seleccionadas</CardTitle>
          </div>
          <CardDescription>Objetivos de mejora personal más populares</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={goalChartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 89.8%)" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={150} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill={COLORS.gray500} radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
