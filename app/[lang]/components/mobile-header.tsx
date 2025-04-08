"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Locale } from "@/types"

export function MobileHeader({
  lang,
  title,
  navigation,
}: {
  lang: Locale
  title: string
  navigation: {
    features: string
    about: string
    contact: string
  }
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="container mx-auto py-4 px-4">
      <div className="flex justify-between items-center">
        <Link href={`/${lang}`} className="flex items-center gap-2 z-20">
          <div className="w-10 h-10 bg-white border-2 border-black rounded-md flex items-center justify-center">
            <span className="font-bold text-lg">IT</span>
          </div>
          <span className="font-bold text-xl tracking-tight">
            {title}
            <div className="h-1 w-full bg-emerald-400 mt-0.5"></div>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href={`/${lang}/blog`} className="font-medium hover:text-emerald-500 transition-colors">
            Blog
          </Link>
          <Link href={`/${lang}/#features`} className="font-medium hover:text-emerald-500 transition-colors">
            {navigation.features}
          </Link>
          <Link href={`/${lang}/about`} className="font-medium hover:text-emerald-500 transition-colors">
            {navigation.about}
          </Link>
          <Link href={`/${lang}/contact`} className="font-medium hover:text-emerald-500 transition-colors">
            {navigation.contact}
          </Link>
          <LanguageSwitcher lang={lang} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-10 pt-20 px-6">
          <nav className="flex flex-col gap-6 items-start">
            
            <Link
              href={`/${lang}`}
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/en/blog"
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href={`/${lang}/#features`}
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {navigation.features}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {navigation.about}
            </Link>
            
            <Link
              href={`/${lang}/contact`}
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {navigation.contact}
            </Link>
            <div className="mt-4">
              <LanguageSwitcher lang={lang} />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

