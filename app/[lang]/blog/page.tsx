import Link from "next/link"
import { getBlogPosts } from "@/lib/blog-data"
import { BlogCard } from "./components/blog-card"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import { MobileHeader } from "@/app/[lang]/components/mobile-header"

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  // We need to await the params object before accessing its properties
  const lang = await params.lang

  return {
    title: "Blog | Invisible Text Generator",
    description:
      "Read our latest articles about invisible text, its applications, and creative uses in gaming, social media, and more.",
    openGraph: {
      title: "Blog | Invisible Text Generator",
      description: "Read our latest articles about invisible text, its applications, and creative uses.",
      url: `https://invisibletext.top/${lang}/blog`,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Invisible Text Generator Blog",
        },
      ],
    },
  }
}

export default async function BlogPage({ params }: { params: { lang: Locale } }) {
  // We need to await the params object before accessing its properties
  const lang = await params.lang
  const dict = await getDictionary(lang)
  const posts = getBlogPosts()

  // Define structured data for the blog page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Invisible Text Generator Blog",
    description:
      "Articles about invisible text, its applications, and creative uses in gaming, social media, and more.",
    url: `https://invisibletext.top/${lang}/blog`,
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
      url: `https://invisibletext.top/${lang}/blog/${post.slug}`,
    })),
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
          <h1 className="text-5xl font-black tracking-tight mb-8 text-center">
            Our Blog
            <div className="h-2 w-24 bg-emerald-400 mx-auto mt-4"></div>
          </h1>

          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Discover tips, tutorials, and insights about invisible text and its creative applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} lang={lang} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border-2 border-black dark:border-gray-700 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
            <p className="mb-6">
              Try our invisible text generator and discover creative ways to use invisible characters.
            </p>
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
