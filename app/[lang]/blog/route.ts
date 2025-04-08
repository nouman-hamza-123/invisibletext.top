import { NextResponse } from "next/server"

// This is a dummy API route to ensure the /blog path is recognized correctly
export async function GET() {
  return NextResponse.redirect(new URL("/blog", "https://www.invisibletext.pro"))
}
