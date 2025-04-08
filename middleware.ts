import { type NextRequest, NextResponse } from "next/server"


const locales = [ "ar", "en", "es", "id", "it", "fr", "de", "nl", "pt", "ru", "tr", "ko", "my", "ar"]
const defaultLocale = "en"

function getLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/")
  return segments[1]
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname starts with a locale
  const pathnameLocale = getLocaleFromPathname(pathname)
  const isValidLocale = locales.includes(pathnameLocale)

  // Skip middleware for static files, API routes, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return
  }

  // If it's the root path or doesn't have a valid locale, redirect to default locale
  if (pathname === "/" || !isValidLocale) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname === "/" ? "" : pathname}`, request.url))
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}