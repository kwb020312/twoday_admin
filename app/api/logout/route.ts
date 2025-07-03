// twoday/app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect("/");
  response.cookies.set("isLogin", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0), // 즉시 만료
  });
  return response;
}
