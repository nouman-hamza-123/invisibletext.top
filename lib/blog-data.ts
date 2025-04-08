export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    content: string
    coverImage: string
    date: string
    author: {
      name: string
      avatar: string
    }
    tags: string[]
  }
  
  export const blogPosts: BlogPost[] = [
    {
      slug: "how-to-use-invisible-text",
      title: "How to Use Invisible Text in Social Media",
      excerpt:
        "Learn how to create and use invisible characters on various social media platforms to enhance your posts and profiles.",
      content: `
  # How to Use Invisible Text in Social Media
  
  Invisible text can be a powerful tool for creating unique effects on social media platforms. In this guide, we'll explore how to use invisible characters effectively across different platforms.
  
  ## What is Invisible Text?
  
  Invisible text refers to characters that take up space but aren't visible to the naked eye. These include:
  
  - Zero-width spaces
  - Zero-width non-joiners
  - Zero-width joiners
  - Other Unicode whitespace characters
  
  ## Why Use Invisible Text?
  
  There are several creative reasons to use invisible text:
  
  1. **Create cleaner captions** by adding line breaks without visible characters
  2. **Hide hashtags** in your posts while still getting the SEO benefits
  3. **Create unique usernames** that stand out from others
  4. **Add hidden messages** that can only be seen when the text is copied and analyzed
  
  ## Platform-Specific Tips
  
  ### Instagram
  
  Instagram doesn't allow regular line breaks in bios, but you can use invisible characters to create spacing. Simply place invisible characters where you want breaks to appear.
  
  ### Twitter
  
  Twitter counts invisible characters toward your character limit, but they can still be useful for formatting. You can use them to create visual separation between sections of your tweet.
  
  ### Discord
  
  Discord is particularly interesting because it allows for creative username formatting with invisible characters. You can make parts of your username appear to float or create other unique effects.
  
  ## Best Practices
  
  - **Don't overuse invisible text** - it can make your content hard to select or interact with
  - **Test on different devices** - some platforms may render invisible characters differently
  - **Be mindful of accessibility** - screen readers might handle invisible characters in unexpected ways
  
  By using invisible text thoughtfully, you can enhance your social media presence and create more engaging content for your audience.
      `,
      coverImage: "/placeholder.svg?height=600&width=1200",
      date: "2025-04-01",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      tags: ["social media", "invisible text", "tutorial"],
    },
    {
      slug: "invisible-characters-in-gaming",
      title: "Using Invisible Characters in Gaming Usernames",
      excerpt:
        "Discover how gamers are using invisible characters to create unique usernames in popular games like Free Fire and PUBG.",
      content: `
  # Using Invisible Characters in Gaming Usernames
  
  Gaming usernames are an important part of your online identity. With invisible characters, you can create truly unique usernames that stand out from the crowd.
  
  ## Why Use Invisible Characters in Gaming?
  
  - Create minimalist or "blank" usernames
  - Make your name appear differently in-game
  - Add spacing that other players can't easily replicate
  - Create visual effects with your username
  
  ## Popular Games That Support Invisible Characters
  
  ### Free Fire
  
  Free Fire is one of the most popular games where players use invisible characters. You can create usernames that appear to be blank or have special spacing.
  
  ### PUBG Mobile
  
  PUBG Mobile also supports invisible characters in usernames, allowing for creative formatting and unique appearances.
  
  ### Fortnite
  
  Fortnite has some limitations, but certain invisible characters still work for creating unique username effects.
  
  ## How to Create Your Invisible Username
  
  1. Use our invisible text generator to create the invisible characters
  2. Copy the characters to your clipboard
  3. When creating or changing your username, paste the invisible characters where desired
  4. Preview your username to make sure it looks as expected
  5. Save your new username
  
  ## Important Considerations
  
  - Some games have policies against "blank" usernames and may enforce them
  - Updates to games may change how invisible characters are handled
  - Other players might not be able to easily search for your username
  - Some characters may appear differently across different devices
  
  By using invisible characters thoughtfully, you can create a gaming username that truly stands out and represents your unique style.
      `,
      coverImage: "/placeholder.svg?height=600&width=1200",
      date: "2025-03-15",
      author: {
        name: "Sam Rivera",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      tags: ["gaming", "usernames", "invisible text"],
    },
    {
      slug: "hidden-messages-with-invisible-text",
      title: "Creating Hidden Messages with Invisible Text",
      excerpt:
        "Learn how to embed secret messages within normal text using invisible characters for fun or practical purposes.",
      content: `
  # Creating Hidden Messages with Invisible Text
  
  Invisible text offers a fascinating way to hide messages within plain sight. In this article, we'll explore how to create and decode hidden messages using invisible characters.
  
  ## The Art of Steganography
  
  Steganography is the practice of concealing information within other non-secret data or a physical object. Using invisible Unicode characters is a form of digital steganography.
  
  ## How to Hide Messages in Normal Text
  
  ### Method 1: Between Characters
  
  You can insert invisible characters between normal characters to spell out a hidden message:
  
  1. Write your visible message
  2. Use our tool to generate invisible characters
  3. Insert these characters between the visible characters to spell your hidden message
  4. The result looks normal but contains hidden information
  
  ### Method 2: Invisible Blocks
  
  Another approach is to add blocks of invisible text:
  
  1. Write your visible message
  2. Add a block of invisible characters at the end
  3. Within this invisible block, use a special encoding (like binary represented by different invisible characters)
  
  ## Practical Applications
  
  - **Fun surprises** for friends who copy your text
  - **Watermarking your content** to identify if someone has copied it
  - **Sharing information** in a way that's not immediately visible
  - **Creating puzzles** or scavenger hunts
  
  ## Ethical Considerations
  
  While hiding messages can be fun, it's important to use this technique ethically:
  
  - Don't use it to bypass content moderation
  - Be mindful of privacy and consent
  - Consider accessibility implications
  
  ## How to Detect Hidden Messages
  
  If you suspect text contains hidden invisible characters:
  
  1. Copy the text to a plain text editor
  2. Look for unusual spacing or cursor behavior
  3. Use a character counting tool to see if there are more characters than visible
  4. Try selecting all text to see if there are selections where no visible text appears
  
  Invisible text provides a creative way to add another layer to your communications, whether for fun, privacy, or creative expression.
      `,
      coverImage: "/placeholder.svg?height=600&width=1200",
      date: "2025-02-20",
      author: {
        name: "Jamie Chen",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      tags: ["steganography", "hidden messages", "invisible text"],
    },
  ]
  
  export function getBlogPosts() {
    return blogPosts
  }
  
  export function getBlogPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug)
  }
  
  export function getRelatedPosts(currentSlug: string, limit = 2) {
    return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit)
  }
  