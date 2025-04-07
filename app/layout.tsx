import type React from "react"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import type { Metadata } from "next"
import { defaultMetadata } from "./seo-config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
