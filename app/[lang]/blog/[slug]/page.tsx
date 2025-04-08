import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import { BlogHeader } from "../components/blog-header"
import { BlogContent } from "../components/blog-content"
import { RelatedPosts } from "../components/related-posts"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { lang: 'en'; slug: string } }): Promise<Metadata> {
  // We need to await the params object before accessing its properties
  const lang = await params.lang
  const slug = await params.slug

  const post = await getBlogPostBySlug(slug)

  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Invisible Text Generator Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://invisibletext.top/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage.startsWith("/placeholder") 
            ? "https://invisibletext.top/og-image.jpg" 
            : `https://invisibletext.top${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params // Destructure safely
  
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(params.slug)

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
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:20px_20px]">
      {/* Add structured data */}
      <StructuredData data={structuredData} />

      <BlogHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to all posts
            </Link>
          </div>

          <article className="bg-white rounded-xl border-2 border-black shadow-lg overflow-hidden mb-12">
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
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <BlogContent content={post.content} />
            </div>
          </article>

          <RelatedPosts posts={relatedPosts} />

          <div className="bg-white p-8 rounded-xl border-2 border-black shadow-lg text-center mt-12">
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

      <footer className="bg-white border-t-2 border-black py-8 mt-12">
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
