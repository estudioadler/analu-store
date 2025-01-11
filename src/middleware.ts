import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Pega o token dos cookies
  const token = request.cookies.get('next-auth.session-token')?.value
  
  // Pega o path atual da URL
  const { pathname } = request.nextUrl
  
  // Verifica se é uma rota de autenticação (login ou registro)
  const isAuthRoute = pathname === '/login' || pathname === '/register'
  
  // Se for rota de auth e usuário estiver logado, redireciona para página inicial
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/login',
    '/register', 
    '/api/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}