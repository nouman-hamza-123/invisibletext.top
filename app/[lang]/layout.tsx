import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Invisible Text Generator | invisibletext.top",
  description:
    "Generate invisible text for games, social media, and more. Create blank usernames, hidden messages, and invisible characters easily.",
  keywords:
    "invisible text, zero-width characters, blank username, invisible characters, hidden text, Free Fire invisible name, PUBG invisible name",
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

