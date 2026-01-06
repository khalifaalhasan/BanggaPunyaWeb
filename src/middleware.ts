import { NextRequest, NextResponse } from "next/server";

// Best Practice: Definisikan rute public/static di Matcher
// agar middleware TIDAK dijalankan sama sekali di rute tersebut (Hemat Resource)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (files with extensions like .svg, .png, etc)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") || "";

  // 1. Konfigurasi Maintenance
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";
  
  // Update Logic Bypass: Tambahkan localhost explicit (127.0.0.1) untuk safety dev
  const isBypassUser =
    host.includes("localhost") || 
    host.includes("127.0.0.1") || 
    host.includes(".vercel.app");

  // 2. Skenario: Maintenance Mode AKTIF
  if (isMaintenanceMode) {
    // Jika user adalah admin/developer, biarkan lewat
    if (isBypassUser) {
      return NextResponse.next();
    }

    // Jika user biasa akses halaman selain /maintenance, lempar ke /maintenance
    if (pathname !== "/maintenance") {
      return NextResponse.redirect(new URL("/maintenance", request.url));
    }
  }

  // 3. Skenario: Maintenance Mode MATI (Website Live)
  // Jika user iseng akses /maintenance padahal web sudah live, balikin ke Home
  if (!isMaintenanceMode && pathname === "/maintenance") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}