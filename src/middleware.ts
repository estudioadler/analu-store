import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Remove any OIDC-related code from here temporarily
  // to see if it resolves the error
  return NextResponse.next()
}

// Optionally, you can limit middleware execution to specific paths
export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
}

