import Link from "next/link"
import type { Locale } from "@/types"

interface BreadcrumbItem {
  label: string
  url: string
}

export function Breadcrumbs({ items, lang }: { items: BreadcrumbItem[]; lang: Locale }) {
  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://invisibletext.top${item.url}`,
    })),
  }

  return (
    <>
      {/* Add structured data for breadcrumbs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          {items.map((item, index) => (
            <li key={item.url}>
              {index === items.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <>
                  <Link href={item.url} className="hover:text-emerald-500 transition-colors">
                    {item.label}
                  </Link>
                  <span className="ml-2">/</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

