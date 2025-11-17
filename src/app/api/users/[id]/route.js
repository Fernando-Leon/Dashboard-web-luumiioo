import { NextResponse } from 'next/server';
import { API_ENDPOINTS } from '@/lib/config';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const authHeader = request.headers.get('authorization');
    
    const response = await fetch(`${API_ENDPOINTS.MS_APP}/api/Users/${id}`, {
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
      { message: 'Error al obtener usuario', error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const authHeader = request.headers.get('authorization');
    
    // Step 1: Delete from MBTI microservice (sessions, responses, results)
    try {
      const mbtiResponse = await fetch(`${API_ENDPOINTS.MS_MBTI}/api/Session/user/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...(authHeader ? { 'Authorization': authHeader } : {}),
        },
      });
      
      // Log warning if not successful (except 404 - user might not have MBTI data)
      if (!mbtiResponse.ok && mbtiResponse.status !== 404) {
        console.warn(`MBTI deletion warning: ${mbtiResponse.status}`);
      }
    } catch (e) {
      console.warn(`MBTI deletion error (continuing): ${e.message}`);
    }
    
    // Step 2: Delete from Plan/AI microservice (plans, tasks)
    try {
      const planResponse = await fetch(`${API_ENDPOINTS.MS_IA}/api/Plan/user/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...(authHeader ? { 'Authorization': authHeader } : {}),
        },
      });
      
      // Log warning if not successful (except 404 - user might not have plans)
      if (!planResponse.ok && planResponse.status !== 404) {
        console.warn(`Plan deletion warning: ${planResponse.status}`);
      }
    } catch (e) {
      console.warn(`Plan deletion error (continuing): ${e.message}`);
    }
    
    // Step 3: Delete from main user microservice (user profile)
    const response = await fetch(`${API_ENDPOINTS.MS_APP}/api/Users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(authHeader ? { 'Authorization': authHeader } : {}),
      },
    });

    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
      } else {
        const text = await response.text();
        return NextResponse.json(
          { message: 'Error del servidor', error: text },
          { status: response.status }
        );
      }
    }

    return NextResponse.json({ 
      message: 'Usuario eliminado correctamente de todos los servicios' 
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error al eliminar usuario', error: error.message },
      { status: 500 }
    );
  }
}
