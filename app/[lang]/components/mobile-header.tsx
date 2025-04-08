"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Locale } from "@/types"
import { ThemeToggle } from "@/components/theme-toggle"

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

  // Ensure lang is valid
  const safeLanguage = lang || "en"

  return (
    <header className="container mx-auto py-4 px-4">
      <div className="flex justify-between items-center">
        <Link href={`/${safeLanguage}`} className="flex items-center gap-2 z-20">
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
          <Link href={`/${safeLanguage}/#features`} className="font-medium hover:text-emerald-500 transition-colors">
            {navigation.features}
          </Link>
          <Link href={`/${safeLanguage}/blog`} className="font-medium hover:text-emerald-500 transition-colors">
            Blog
          </Link>
          <Link href={`/${safeLanguage}/about`} className="font-medium hover:text-emerald-500 transition-colors">
            {navigation.about}
          </Link>
          <Link href={`/${safeLanguage}/contact`} className="font-medium hover:text-emerald-500 transition-colors">
            {navigation.contact}
          </Link>
          <ThemeToggle />
          <LanguageSwitcher lang={safeLanguage} />
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
              href={`/${safeLanguage}/#features`}
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {navigation.features}
            </Link>
            <Link
              href={`/${safeLanguage}/blog`}
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href={`/${safeLanguage}/about`}
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {navigation.about}
            </Link>
            <Link
              href={`/${safeLanguage}/contact`}
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {navigation.contact}
            </Link>
            <div className="mt-4 flex items-center gap-4">
              <ThemeToggle />
              <LanguageSwitcher lang={safeLanguage} />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
