import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/types";
import { generateMetadata as generateSeoMetadata } from "../seo-config";

const inter = Inter({ subsets: ["latin"] });

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale } | Promise<{ lang: Locale }>
}): Promise<Metadata> {
  // Await the entire params object before accessing its properties
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return generateSeoMetadata("home", lang, dict);
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale } | Promise<{ lang: Locale }>;
}) {
  // Await the entire params before using its properties
  const { lang } = await params;

  return (
    <html lang={lang}>
      <head>
        <link rel="alternate" href="https://www.invisibletext.pro/en" hrefLang="x-default" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}





{/* <link rel="canonical" href={`https://www.invisibletext.pro/${params.lang}`} />

<link rel="alternate" href="https://www.invisibletext.pro/en" hrefLang="en" />
<link rel="alternate" href="https://www.invisibletext.pro/es" hrefLang="es" />
<link rel="alternate" href="https://www.invisibletext.pro/id" hrefLang="id" />
<link rel="alternate" href="https://www.invisibletext.pro/it" hrefLang="it" />
<link rel="alternate" href="https://www.invisibletext.pro/fr" hrefLang="fr" />
<link rel="alternate" href="https://www.invisibletext.pro/de" hrefLang="de" />
<link rel="alternate" href="https://www.invisibletext.pro/nl" hrefLang="nl" />
<link rel="alternate" href="https://www.invisibletext.pro/pt" hrefLang="pt" />
<link rel="alternate" href="https://www.invisibletext.pro/ru" hrefLang="ru" />
<link rel="alternate" href="https://www.invisibletext.pro/ko" hrefLang="ko" />
<link rel="alternate" href="https://www.invisibletext.pro/my" hrefLang="my" />
<link rel="alternate" href="https://www.invisibletext.pro/en" hrefLang="x-default" /> */}