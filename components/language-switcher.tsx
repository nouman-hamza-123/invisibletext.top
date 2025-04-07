"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitcher({ lang }: { lang: string }) {
  const pathName = usePathname()
  const router = useRouter()

  const switchLanguage = (newLocale: string) => {
    // Get the path without the locale
    const segments = pathName.split("/")
    segments[1] = newLocale
    router.push(segments.join("/"))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("en")} className={lang === "en" ? "bg-muted" : ""}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("es")} className={lang === "es" ? "bg-muted" : ""}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("id")} className={lang === "id" ? "bg-muted" : ""}>
          Indonesian
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("fr")} className={lang === "fr" ? "bg-muted" : ""}>
          French
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("pt")} className={lang === "pt" ? "bg-muted" : ""}>
          Portuguese
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("it")} className={lang === "it" ? "bg-muted" : ""}>
          Italian
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("ru")} className={lang === "ru" ? "bg-muted" : ""}>
          Russian
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("nl")} className={lang === "nl" ? "bg-muted" : ""}>
          Dutch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("de")} className={lang === "de" ? "bg-muted" : ""}>
          Deutsch
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

