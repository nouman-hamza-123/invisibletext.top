import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-4xl font-bold text-yellow-300 mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8 text-center max-w-lg">The page you're looking for doesn't exist or has been moved.</p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

