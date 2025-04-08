"use client"

import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from "@/lib/blog-data"
import type { BlogPost } from "@/lib/blog-data"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// BlogHeader component included directly
function BlogHeader() {
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
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

// MobileMenu component included directly
function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button
        className="z-20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-10 pt-20 px-6">
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
    </>
  )
}

// BlogCard component included directly
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-black dark:border-gray-700 shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative w-full h-48">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs">{post.author.name}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
          </div>

          <h2 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.excerpt}</p>

          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                +{post.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

// StructuredData component included directly
function StructuredData({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function BlogClientPage() {
  const posts = getBlogPosts()

  // Define structured data for the blog page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Invisible Text Generator Blog",
    description:
      "Articles about invisible text, its applications, and creative uses in gaming, social media, and more.",
    url: "https://invisibletext.top/blog",
    publisher: {
      "@type": "Organization",
      name: "invisibletext.top",
      logo: {
        "@type": "ImageObject",
        url: "https://invisibletext.top/logo.png",
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
      url: `https://invisibletext.top/blog/${post.slug}`,
    })),
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] dark:bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:20px_20px]">
      {/* Add structured data */}
      <StructuredData data={structuredData} />

      <BlogHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black tracking-tight mb-8 text-center">
            Our Blog
            <div className="h-2 w-24 bg-emerald-400 mx-auto mt-4"></div>
          </h1>

          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Discover tips, tutorials, and insights about invisible text and its creative applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border-2 border-black dark:border-gray-700 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
            <p className="mb-6">
              Try our invisible text generator and discover creative ways to use invisible characters.
            </p>
            <Link
              href="/en"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Try the Generator
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t-2 border-black dark:border-gray-700 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/en" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white border-2 border-black rounded-md flex items-center justify-center">
                  <span className="font-bold text-sm">IT</span>
                </div>
                <span className="font-bold text-lg tracking-tight">
                  INVISIBLE TEXT
                  <div className="h-1 w-full bg-emerald-400 mt-0.5"></div>
                </span>
              </Link>
              <p className="text-sm mt-2">© 2025 invisibletext.top. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-bold mb-2">Navigation</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href="/en" className="text-sm hover:text-emerald-500 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm hover:text-emerald-500 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/about" className="text-sm hover:text-emerald-500 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/contact" className="text-sm hover:text-emerald-500 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Legal</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href="/en/privacy" className="text-sm hover:text-emerald-500 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/terms-of-service" className="text-sm hover:text-emerald-500 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Contact</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href="/en/contact" className="text-sm hover:text-emerald-500 transition-colors">
                      contact@invisibletext.top
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
