import Link from "next/link"
import { BlogHeader } from "../components/blog-header"

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:20px_20px]">
      <BlogHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black tracking-tight mb-8">
            Post Not Found
            <div className="h-2 w-24 bg-emerald-400 mx-auto mt-4"></div>
          </h1>

          <p className="text-xl mb-8">
            Sorry, the blog post you're looking for doesn't exist or has been moved.
          </p>

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
