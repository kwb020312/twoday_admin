import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Protect /dashboard route
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const isLogin = request.cookies.get("isLogin")?.value;
    if (!isLogin) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/";
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
