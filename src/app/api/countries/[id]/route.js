import { NextResponse } from "next/server";
import { API_ENDPOINTS } from "@/lib/config";

/**
 * GET /api/countries/[id]
 * Obtiene un país por ID
 */
export async function GET(request, { params }) {
  const { id } = await params;
  const authHeader = request.headers.get("authorization");

  try {
    const response = await fetch(`${API_ENDPOINTS.MS_APP}/api/Countries/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(authHeader ? { Authorization: authHeader } : {}),
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Error al obtener el país" },
      { status: 500 }
    );
  }
}
