import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // buat ambil hostname domain
  const host = request.headers.get("host") || "";
  // cek environment variable untuk maintenance mode
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";
  //tentukan apakah user boleh bypass maintenance
  const isBypassUser =
    host.includes("localhost") || host.includes(".vercel.app");
  const { pathname } = request.nextUrl;

  // logika utamanya disni ges
  if (isMaintenanceMode && !isBypassUser) {
    if (pathname.startsWith("/maintenance")) {
      return NextResponse.next();
    }

    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/static") ||
      pathname.startsWith(".")
    ) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/maintenance", request.url));
  }
  if (!isMaintenanceMode && pathname === "/maintenance") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)"
    ]
}
