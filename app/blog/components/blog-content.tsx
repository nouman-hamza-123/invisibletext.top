"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

export function BlogContent({ content }: { content: string }) {
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
