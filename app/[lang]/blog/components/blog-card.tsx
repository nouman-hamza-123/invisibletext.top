import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/lib/blog-data"
import type { Locale } from "@/types"

export function BlogCard({ post, lang }: { post: BlogPost; lang: Locale }) {
  return (
    <Link href={`/${lang}/blog/${post.slug}`} className="group">
      <div className="bg-white rounded-xl border-2 border-black shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
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
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>

          <h2 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">{post.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">+{post.tags.length - 2}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
