import { NextResponse } from 'next/server';
import { API_ENDPOINTS } from '@/lib/config';

export async function GET(request, { params }) {
  try {
    const { userId } = await params;
    const authHeader = request.headers.get('authorization');
    
    const response = await fetch(`${API_ENDPOINTS.MS_IA}/api/Plan/user/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(authHeader ? { 'Authorization': authHeader } : {}),
      },
    });

    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      
      if (!response.ok) {
        return NextResponse.json(data, { status: response.status });
      }
      
      return NextResponse.json(data, { status: 200 });
    } else {
      const text = await response.text();
      
      if (!response.ok) {
        return NextResponse.json(
          { message: 'Error del servidor', error: text },
          { status: response.status }
        );
      }
      
      return NextResponse.json({ message: text }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Error al obtener planes', error: error.message },
      { status: 500 }
    );
  }
}
