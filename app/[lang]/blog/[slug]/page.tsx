import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import { BlogContent } from "../components/blog-content"
import { RelatedPosts } from "../components/related-posts"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import { MobileHeader } from "@/app/[lang]/components/mobile-header"

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { lang: Locale; slug: string } }): Promise<Metadata> {
  // We need to await the params object before accessing its properties
  const lang = await params.lang
  const slug = await params.slug

  const post = getBlogPostBySlug(slug)

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
      url: `https://invisibletext.top/${lang}/blog/${post.slug}`,
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

export default async function BlogPostPage({ params }: { params: { lang: Locale; slug: string } }) {
  // We need to await the params object before accessing its properties
  const lang = await params.lang
  const slug = await params.slug

  const dict = await getDictionary(lang)
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
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
      "@id": `https://invisibletext.top/${lang}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] dark:bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:20px_20px]">
      {/* Add structured data */}
      <StructuredData data={structuredData} />

      <MobileHeader
        lang={lang}
        title={dict.hero.title}
        navigation={{
          features: dict.navigation.features,
          about: dict.navigation.about,
          contact: dict.navigation.contact,
        }}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href={`/${lang}/blog`} className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2">
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
                <span className="text-sm text-gray-500">{post.date}</span>
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

          <RelatedPosts posts={relatedPosts} lang={lang} />

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border-2 border-black dark:border-gray-700 shadow-lg text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Ready to try invisible text yourself?</h2>
            <p className="mb-6">Use our generator to create invisible characters for your own creative projects.</p>
            <Link
              href={`/${lang}`}
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
              <Link href={`/${lang}`} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white border-2 border-black rounded-md flex items-center justify-center">
                  <span className="font-bold text-sm">IT</span>
                </div>
                <span className="font-bold text-lg tracking-tight">
                  {dict.hero.title}
                  <div className="h-1 w-full bg-emerald-400 mt-0.5"></div>
                </span>
              </Link>
              <p className="text-sm mt-2">{dict.footer.copyright}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-bold mb-2">{dict.footer.navigation}</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href={`/${lang}`} className="text-sm hover:text-emerald-500 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/blog`} className="text-sm hover:text-emerald-500 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/about`} className="text-sm hover:text-emerald-500 transition-colors">
                      {dict.navigation.about}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/contact`} className="text-sm hover:text-emerald-500 transition-colors">
                      {dict.navigation.contact}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">{dict.footer.legal}</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href={`/${lang}/privacy`} className="text-sm hover:text-emerald-500 transition-colors">
                      {dict.navigation.privacy}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${lang}/terms-of-service`}
                      className="text-sm hover:text-emerald-500 transition-colors"
                    >
                      {dict.navigation.terms}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">{dict.footer.contact}</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href={`/${lang}/contact`} className="text-sm hover:text-emerald-500 transition-colors">
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
