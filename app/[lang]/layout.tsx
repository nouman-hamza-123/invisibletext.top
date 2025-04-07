import type React from "react"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import type { Metadata } from "next"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import { generateMetadata as generateSeoMetadata } from "../seo-config"

const inter = Inter({ subsets: ["latin"] })

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return generateSeoMetadata("home", params.lang, dict)
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
      <head>
        {/* Self-referencing canonical tag */}
        <link rel="canonical" href={`https://invisibletext.top/${params.lang}`} />
        
        {/* hreflang tags */}
        <link rel="alternate" href="https://invisibletext.top/en" hrefLang="en" />
        <link rel="alternate" href="https://invisibletext.top/es" hrefLang="es" />
        <link rel="alternate" href="https://invisibletext.top/en" hrefLang="x-default" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
