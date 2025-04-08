"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="container mx-auto py-4 px-4">
      <div className="flex justify-between items-center">
        <Link href="/en" className="flex items-center gap-2 z-20">
          <div className="w-10 h-10 bg-white border-2 border-black rounded-md flex items-center justify-center">
            <span className="font-bold text-lg">IT</span>
          </div>
          <span className="font-bold text-xl tracking-tight">
            INVISIBLE TEXT
            <div className="h-1 w-full bg-emerald-400 mt-0.5"></div>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/en" className="font-medium hover:text-emerald-500 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="font-medium hover:text-emerald-500 transition-colors">
            Blog
          </Link>
          <Link href="/en/about" className="font-medium hover:text-emerald-500 transition-colors">
            About Us
          </Link>
          <Link href="/en/contact" className="font-medium hover:text-emerald-500 transition-colors">
            Contact
          </Link>
          <ThemeToggle />
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
              href="/en"
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/en/about"
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/en/contact"
              className="font-medium text-xl hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
