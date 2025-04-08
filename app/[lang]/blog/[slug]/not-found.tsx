import Link from "next/link"

export default function BlogPostNotFound() {
  // Since this is a static page, we can't access params directly
  // We'll use a generic approach that works with any language
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:20px_20px]">
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
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black tracking-tight mb-8">
            Post Not Found
            <div className="h-2 w-24 bg-emerald-400 mx-auto mt-4"></div>
          </h1>

          <p className="text-xl mb-8">Sorry, the blog post you're looking for doesn't exist or has been moved.</p>

          <Link
            href="/en/blog"
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    </div>
  )
}
