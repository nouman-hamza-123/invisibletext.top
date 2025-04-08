import type { Locale } from "@/types"
import type { Metadata } from "next"

// Base URL for the website
export const baseUrl = "https://www.invisibletext.pro"

// Default metadata for the website
export const defaultMetadata: Metadata = {
  title: {
    default: "Invisible Text Generator | Create Hidden Characters",
    template: "%s | invisibletext.pro",
  },
  description:
    "Generate invisible text for games, social media, and more. Create blank usernames, hidden messages, and invisible characters easily.",
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
    "zero-width space",
  ],
  authors: [{ name: "invisibletext.pro" }],
  creator: "invisibletext.pro",
  publisher: "invisibletext.pro",
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
      id: "/id",
      it: "/it",
      fr: "/fr",
      de: "/de",
      ru: "/ru",
      nl: "/nl",
      pt: "/pt",
      ko: "/ko",
      tr: "/tr",
      my: "/my",
      ar: "/ar",
    },
  },
  openGraph: {
    type: "website",
    siteName: "invisibletext.pro",
    title: "Invisible Text Generator | Create Hidden Characters",
    description:
      "Generate invisible text for games, social media, and more. Create blank usernames, hidden messages, and invisible characters easily.",
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
    description:
      "Generate invisible text for games, social media, and more. Create blank usernames, hidden messages, and invisible characters easily.",
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
export function generateMetadata(page: string, lang: Locale, dictionary: any): Metadata {
  // Safely access dictionary properties with fallbacks
  const dict = dictionary || {}
  const meta = dict.meta || {}
  const pages = dict.pages || {}

  // Define page-specific metadata with fallbacks
  const pageMetadata: Record<string, any> = {
    home: {
      title: meta.title || "Invisible Text Generator",
      description: meta.description || "Generate invisible text for games, social media, and more.",
    },
    about: {
      title: `${pages.about?.title || "About Us"}`,
      description: pages.about?.mission?.content
        ? `Learn about the team behind invisibletext.pro. ${pages.about.mission.content.substring(0, 100)}...`
        : "Learn about the team behind invisibletext.pro.",
    },
    contact: {
      title: `${pages.contact?.title || "Contact Us"} | invisibletext.pro`,
      description: pages.contact?.introduction
        ? `Contact the team at invisibletext.pro. ${pages.contact.introduction.substring(0, 100)}...`
        : "Contact the team at invisibletext.pro.",
    },
    privacy: {
      title: `${pages.privacy?.title || "Privacy Policy"} | invisibletext.pro`,
      description: pages.privacy?.introduction?.content
        ? `${pages.privacy.introduction.content.substring(0, 150)}...`
        : "Our privacy policy explains how we collect and use your information.",
    },
    "terms-of-service": {
      title: `${pages.terms?.title || "Terms of Service"} | invisibletext.pro`,
      description: pages.terms?.introduction?.content
        ? `${pages.terms.introduction.content.substring(0, 150)}...`
        : "Our terms of service outline the rules for using our website.",
    },
  }

  const languageAlternates = {
    canonical: `${baseUrl}/${lang}${page === "home" ? "" : `/${page}`}`,
    languages: {
      en: `${baseUrl}/en${page === "home" ? "" : `/${page}`}`,
      es: `${baseUrl}/es${page === "home" ? "" : `/${page}`}`,
      id: `${baseUrl}/id${page === "home" ? "" : `/${page}`}`,
      it: `${baseUrl}/it${page === "home" ? "" : `/${page}`}`,
      fr: `${baseUrl}/fr${page === "home" ? "" : `/${page}`}`,
      de: `${baseUrl}/de${page === "home" ? "" : `/${page}`}`,
      pt: `${baseUrl}/pt${page === "home" ? "" : `/${page}`}`,
      nl: `${baseUrl}/nl${page === "home" ? "" : `/${page}`}`,
      ru: `${baseUrl}/ru${page === "home" ? "" : `/${page}`}`,
      tr: `${baseUrl}/tr${page === "home" ? "" : `/${page}`}`,
      ko: `${baseUrl}/ko${page === "home" ? "" : `/${page}`}`,
      my: `${baseUrl}/my${page === "home" ? "" : `/${page}`}`,
    },
  }

  // Add metadataBase here so that relative URLs in openGraph/twitter objects resolve correctly.
  return {
    metadataBase: new URL(baseUrl),
    title: pageMetadata[page]?.title || defaultMetadata.title,
    description: pageMetadata[page]?.description || defaultMetadata.description,
    keywords: defaultMetadata.keywords,
    alternates: languageAlternates,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: pageMetadata[page]?.title || defaultMetadata.openGraph?.title,
      description: pageMetadata[page]?.description || defaultMetadata.openGraph?.description,
      url: languageAlternates.canonical,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: pageMetadata[page]?.title || defaultMetadata.twitter?.title,
      description: pageMetadata[page]?.description || defaultMetadata.twitter?.description,
    },
    robots: defaultMetadata.robots,
  }
}




// import type { Locale } from "@/types"

// // Base URL for the website
// export const baseUrl = "https://www.invisibletext.pro"

// // Default metadata for the website
// export const defaultMetadata = {
//   title: {
//     default: "Invisible Text Generator | Create Hidden Characters",
//     template: "%s | invisibletext.pro",
//   },
//   description:
//     "Generate invisible text for games, social media, and more. Create blank usernames, hidden messages, and invisible characters easily.",
//   keywords: [
//     "invisible text",
//     "zero-width characters",
//     "blank username",
//     "invisible characters",
//     "hidden text",
//     "Free Fire invisible name",
//     "PUBG invisible name",
//     "invisible text generator",
//     "blank message",
//     "hidden message",
//     "invisible space",
//     "zero-width space",
//   ],
//   authors: [{ name: "invisibletext.pro" }],
//   creator: "invisibletext.pro",
//   publisher: "invisibletext.pro",
//   formatDetection: {
//     email: "support@InvisibleTextGenerator.pro",
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL(baseUrl),
//   alternates: {
//     canonical: "/",
//     languages: {
//       en: "/en",
//       es: "/es",
//     },
//   },
//   openGraph: {
//     type: "website",
//     siteName: "invisibletext.pro",
//     title: "Invisible Text Generator | Create Hidden Characters",
//     description:
//       "Generate invisible text for games, social media, and more. Create blank usernames, hidden messages, and invisible characters easily.",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Invisible Text Generator",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Invisible Text Generator | Create Hidden Characters",
//     description:
//       "Generate invisible text for games, social media, and more. Create blank usernames, hidden messages, and invisible characters easily.",
//     images: ["/og-image.jpg"],
//     creator: "@invisibletext",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   verification: {
//     google: "google-site-verification-code", // Replace with your verification code
//   },
// }

// // Generate metadata for specific pages and languages
// export function generateMetadata(page: string, lang: Locale, dictionary: any) {
//   // Add fallbacks for missing properties
//   const pageMetadata: Record<string, any> = {
//     home: {
//       title: dictionary.meta?.title || "Invisible Text Generator",
//       description: dictionary.meta?.description || "Generate invisible text for games, social media, and more.",
//     },
//     about: {
//       title: `${dictionary.pages.about.title} | invisibletext.pro`,
//       description: `Learn about the team behind invisibletext.pro. ${dictionary.pages.about.mission.content.substring(0, 100)}...`,
//     },
//     contact: {
//       title: `${dictionary.pages.contact.title} | invisibletext.pro`,
//       description: `Contact the team at invisibletext.pro. ${dictionary.pages.contact.introduction.substring(0, 100)}...`,
//     },
//     privacy: {
//       title: `${dictionary.pages.privacy.title} | invisibletext.pro`,
//       description: `${dictionary.pages.privacy.introduction.content.substring(0, 150)}...`,
//     },
//     "terms-of-service": {
//       title: `${dictionary.pages.terms.title} | invisibletext.pro`,
//       description: `${dictionary.pages.terms.introduction.content.substring(0, 150)}...`,
//     },
//   }

//   const languageAlternates = {
//     canonical: `${baseUrl}/${lang}${page === "home" ? "" : `/${page}`}`,
//     languages: {
//       en: `${baseUrl}/en${page === "home" ? "" : `/${page}`}`,
//       es: `${baseUrl}/es${page === "home" ? "" : `/${page}`}`,
//     },
//   }

//   return {
//     title: pageMetadata[page]?.title || defaultMetadata.title,
//     description: pageMetadata[page]?.description || defaultMetadata.description,
//     keywords: defaultMetadata.keywords.join(", "),
//     alternates: languageAlternates,
//     openGraph: {
//       ...defaultMetadata.openGraph,
//       title: pageMetadata[page]?.title || defaultMetadata.openGraph.title,
//       description: pageMetadata[page]?.description || defaultMetadata.openGraph.description,
//       url: languageAlternates.canonical,
//     },
//     twitter: {
//       ...defaultMetadata.twitter,
//       title: pageMetadata[page]?.title || defaultMetadata.twitter.title,
//       description: pageMetadata[page]?.description || defaultMetadata.twitter.description,
//     },
//     robots: defaultMetadata.robots,
//   }
// }
