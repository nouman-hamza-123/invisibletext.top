import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog | Invisible Text Generator",
  description:
    "Read our latest articles about invisible text, its applications, and creative uses in gaming, social media, and more.",
  openGraph: {
    title: "Blog | Invisible Text Generator",
    description: "Read our latest articles about invisible text, its applications, and creative uses.",
    url: "https://invisibletext.top/blog",
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

export default function BlogPage() {
  return <BlogClientPage />
}
