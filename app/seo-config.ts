import type { Locale } from "@/types"

// Base URL for the website
export const baseUrl = "https://invisibletext.top"

// Default metadata for the website
export const defaultMetadata = {
  title: {
    default: "Invisible Text Generator | Create Hidden Characters",
    template: "%s | invisibletext.top"
  },
  description: "Generate invisible text for games, social media, and more. Create blank usernames, hidden messages, and invisible characters easily.",
  keywords: [
    "invisible text",
    "zero-width characters",
    "blank username",
    "invisible characters",
    "hidden text",
    "Free Fire invisible name",
    "PUBG invisible name",
    "invisible text generator",
    "blank message",
    "hidden message",
    "invisible space",
    "zero-width space"
  ],
  authors: [{ name: "invisibletext.top" }],
  creator: "invisibletext.top",
  publisher: "invisibletext.top",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      es: "/es",
    },
  },
  openGraph: {
    type: "website",
    siteName: "invisibletext.top",
    title: "Invisible Text Generator | Create Hidden Characters",
    description: "Generate invisible text for games, social media, and more. Create blank usernames, hidden messages, and invisible characters easily.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Invisible Text Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisible Text Generator | Create Hidden Characters",
    description: "Generate invisible text for games, social media, and more. Create blank usernames, hidden messages, and invisible characters easily.",
    images: ["/og-image.jpg"],
    creator: "@invisibletext",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your verification code
  },
}

// Generate metadata for specific pages and languages
export function generateMetadata(
  page: string,
  lang: Locale,
  dictionary: any
) {
  const languageAlternates = {
    canonical: `${baseUrl}/${lang}${page === "home" ? "" : `/${page}`}`,
    languages: {
      en: `${baseUrl}/en${page === "home" ? "" : `/${page}`}`,
      es: `${baseUrl}/es${page === "home" ? "" : `/${page}`}`,
    },
  }

  // Page-specific metadata
  const pageMetadata: Record<string, any> = {
    home: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    },
    about: {
      title: `${dictionary.pages.about.title} | invisibletext.top`,
      description: `Learn about the team behind invisibletext.top. ${dictionary.pages.about.mission.content.substring(0, 100)}...`,
    },
    contact: {
      title: `${dictionary.pages.contact.title} | invisibletext.top`,
      description: `Contact the team at invisibletext.top. ${dictionary.pages.contact.introduction.substring(0, 100)}...`,
    },
    privacy: {
      title: `${dictionary.pages.privacy.title} | invisibletext.top`,
      description: `${dictionary.pages.privacy.introduction.content.substring(0, 150)}...`,
    },
    "terms-of-service": {
      title: `${dictionary.pages.terms.title} | invisibletext.top`,
      description: `${dictionary.pages.terms.introduction.content.substring(0, 150)}...`,
    },
  }

  return {
    title: pageMetadata[page]?.title || defaultMetadata.title,
    description: pageMetadata[page]?.description || defaultMetadata.description,
    keywords: defaultMetadata.keywords.join(", "),
    alternates: languageAlternates,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: pageMetadata[page]?.title || defaultMetadata.openGraph.title,
      description: pageMetadata[page]?.description || defaultMetadata.openGraph.description,
      url: languageAlternates.canonical,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: pageMetadata[page]?.title || defaultMetadata.twitter.title,
      description: pageMetadata[page]?.description || defaultMetadata.twitter.description,
    },
    robots: defaultMetadata.robots,
  }
}
