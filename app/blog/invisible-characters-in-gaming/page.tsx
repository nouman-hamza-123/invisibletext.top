"use client"

import Link from "next/link"
import Image from "next/image"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import type { BlogPost } from "@/lib/blog-data"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// BlogHeader component included directly
function BlogHeader() {
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
    </header>
  )
}

// BlogContent component included directly
function BlogContent({ content }: { content: string }) {
  // Use client-side rendering for ReactMarkdown
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="animate-pulse h-96 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

// RelatedPosts component included directly
function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return null
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-black dark:border-gray-700 shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
              <div className="flex">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// StructuredData component included directly
function StructuredData({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function BlogPostPage() {
  const slug = "invisible-characters-in-gaming"
  const post = getBlogPostBySlug(slug)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-slate-50 dark:bg-gray-950 animate-pulse"></div>
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-gray-950">
        <BlogHeader />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-black tracking-tight mb-8">
              Post Not Found
              <div className="h-2 w-24 bg-emerald-400 mx-auto mt-4"></div>
            </h1>
            <p className="text-xl mb-8">Sorry, the blog post you're looking for doesn't exist or has been moved.</p>
            <Link
              href="/blog"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const relatedPosts = getRelatedPosts(slug)

  // Define structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage.startsWith("/placeholder")
      ? "https://invisibletext.top/og-image.jpg"
      : `https://invisibletext.top${post.coverImage}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "invisibletext.top",
      logo: {
        "@type": "ImageObject",
        url: "https://invisibletext.top/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://invisibletext.top/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] dark:bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:20px_20px]">
      {/* Add structured data */}
      <StructuredData data={structuredData} />

      <BlogHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to all posts
            </Link>
          </div>

          <article className="bg-white dark:bg-gray-800 rounded-xl border-2 border-black dark:border-gray-700 shadow-lg overflow-hidden mb-12">
            <div className="relative w-full h-[400px]">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{post.author.name}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight mb-6">{post.title}</h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <BlogContent content={post.content} />
            </div>
          </article>

          <RelatedPosts posts={relatedPosts} />

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border-2 border-black dark:border-gray-700 shadow-lg text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Ready to try invisible text yourself?</h2>
            <p className="mb-6">Use our generator to create invisible characters for your own creative projects.</p>
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
