import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import { generateMetadata as generateSeoMetadata } from "../seo-config"

const inter = Inter({ subsets: ["latin"] })

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  // We need to await the params object before accessing its properties
  const lang = await params.lang
  const dict = await getDictionary(lang)
  return generateSeoMetadata("home", lang, dict)
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  // We need to await the params object before accessing its properties
  const lang = await params.lang

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="alternate" href="https://invisibletext.top/en" hrefLang="x-default" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
