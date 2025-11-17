import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const authHeader = request.headers.get('authorization');
    
    const response = await fetch('https://ms-auth-17nt.onrender.com/api/Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(authHeader ? { 'Authorization': authHeader } : {}),
      },
      body: JSON.stringify(body),
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
      { message: 'Error al crear usuario', error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const response = await fetch('https://ms-app-pave.onrender.com/api/Users', {
      headers: {
        'Content-Type': 'application/json',
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
      { message: 'Error al obtener usuarios', error: error.message },
      { status: 500 }
    );
  }
}
