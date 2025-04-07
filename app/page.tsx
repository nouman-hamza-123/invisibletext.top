import { Check } from "lucide-react"
import Link from "next/link"
import { InvisibleTextTool } from "./components/invisible-text-tool"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:20px_20px]">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white border-2 border-black rounded-md flex items-center justify-center">
            <span className="font-bold text-lg">IT</span>
          </div>
          <span className="font-bold text-xl tracking-tight">
            INVISIBLE TEXT
            <div className="h-1 w-full bg-emerald-400 mt-0.5"></div>
          </span>
        </Link>
        <nav className="flex gap-6">
          <Link href="#features" className="font-medium hover:text-emerald-500 transition-colors">
            Features
          </Link>
          <Link href="#about" className="font-medium hover:text-emerald-500 transition-colors">
            About Us
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-6xl font-black tracking-tight mb-2">
            INVISIBLE TEXT
            <div className="h-2 w-1/3 bg-emerald-400 mx-auto mt-2"></div>
          </h1>
          <p className="text-xl mt-8 max-w-3xl mx-auto">
            Welcome to our <span className="font-bold">free online invisible text generator</span>! Hide messages in
            plain sight using <span className="font-bold">zero-width characters</span>,{" "}
            <span className="font-bold">color masking</span>, and more.
          </p>
        </section>

        <InvisibleTextTool />

        <section id="what-is" className="max-w-4xl mx-auto mb-20 mt-24">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            WHAT IS INVISIBLE TEXT?
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Invisible text refers to characters or strings that are present in a document or message but are not
              visible to the naked eye. This is achieved through various techniques such as using zero-width characters,
              applying color masking (white text on white background), or utilizing special Unicode characters that have
              no visible representation.
            </p>
            <p>
              These invisible characters still exist in the digital space and can be copied, pasted, and transmitted
              just like regular text. However, they remain hidden from casual observation, making them useful for
              various applications where discreet communication is desired.
            </p>
          </div>
        </section>

        <section id="how-to" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            HOW TO COPY-PASTE INVISIBLE TEXT
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Method</h3>
              <p>Select from our quick copy buttons, manual selection, or custom generator options.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Copy</h3>
              <p>Copy the invisible characters to your clipboard with a single click.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Test & Use</h3>
              <p>Test your invisible text in our testing area, then use it anywhere you need it.</p>
            </div>
          </div>
        </section>

        <section id="why-use" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            WHY WOULD YOU NEED INVISIBLE TEXT?
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Privacy & Discretion</h3>
              <p>
                Invisible text allows you to hide messages in plain sight, providing an additional layer of privacy for
                sensitive information that you don't want to be immediately visible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Creative Uses</h3>
              <p>
                Create unique usernames in games, send blank messages on social platforms, or add hidden watermarks to
                your content to track unauthorized copying.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Digital Steganography</h3>
              <p>
                Hide messages within other messages or documents, allowing for covert communication that doesn't draw
                attention to itself.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p>
                Add hidden context or metadata to content that can be accessed by screen readers or other assistive
                technologies without affecting visual presentation.
              </p>
            </div>
          </div>
        </section>

        <section id="who-uses" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            WHO USES INVISIBLE TEXT?
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Gamers</h3>
              <p>
                Players of games like Free Fire, PUBG, and other online games use invisible characters to create unique,
                minimal usernames that stand out or appear blank.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Social Media Users</h3>
              <p>
                People who want to create unique profiles, send blank messages, or hide information within regular posts
                on platforms like Instagram, Twitter, and Discord.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Content Creators</h3>
              <p>
                Writers, designers, and digital artists who want to add hidden watermarks or metadata to their work to
                track unauthorized use.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            FEATURES OF OUR INVISIBLE TEXT TOOL
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Multiple Invisibility Methods</h3>
                <p>Choose from various techniques including zero-width characters, color masking, and more.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quick Copy Buttons</h3>
                <p>Instantly copy small, medium, or large invisible characters with a single click.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Custom Generator</h3>
                <p>Generate any number of invisible characters from 1 to infinity with our custom generator.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Testing Area</h3>
                <p>Test your invisible characters before using them to ensure they work as expected.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Character Counter</h3>
                <p>See exactly how many invisible characters you've generated or pasted.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Text Encoding</h3>
                <p>Hide entire messages within invisible characters that can be decoded later.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            BENEFITS OF USING INVISIBLETEXT.TOP
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="bg-white p-8 rounded-xl border-2 border-black shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">100% Free</h3>
                  <p className="text-sm">No hidden fees or premium features locked behind paywalls.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">No Registration Required</h3>
                  <p className="text-sm">Use our tool instantly without creating an account.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Privacy-Focused</h3>
                  <p className="text-sm">We don't store your text or track your usage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">User-Friendly Interface</h3>
                  <p className="text-sm">Simple, intuitive design that anyone can use.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">More Methods Than Competitors</h3>
                  <p className="text-sm">We offer more ways to create and use invisible text than any other tool.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Mobile-Friendly</h3>
                  <p className="text-sm">Works perfectly on smartphones and tablets.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="use-cases" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            PRACTICAL USE CASES
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Gaming</h3>
              <p className="mb-4">
                Create unique "invisible" usernames in games like Free Fire, PUBG, and other online games to stand out
                from other players.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-medium">Example:</p>
                <p className="font-mono">PlayerName: "⁣ ⁣"</p>
                <p className="text-xs text-gray-500 mt-2">(Appears as a blank or minimal username)</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Social Media</h3>
              <p className="mb-4">
                Send blank messages on platforms like WhatsApp, Telegram, or Discord, or create unique-looking profiles.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-medium">Example:</p>
                <p className="font-mono">Message: "⁣ ⁣"</p>
                <p className="text-xs text-gray-500 mt-2">
                  (Appears as an empty message but can be copied and decoded)
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Digital Watermarking</h3>
              <p className="mb-4">
                Add invisible signatures to your content that can be used to verify authenticity or track unauthorized
                copying.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-medium">Example:</p>
                <p className="font-mono">Document: "This is my content‍‌‍‌‍‌‍‌."</p>
                <p className="text-xs text-gray-500 mt-2">(Contains hidden watermark that's invisible to readers)</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">Hidden Messages</h3>
              <p className="mb-4">
                Embed secret messages within regular text that can only be revealed by those who know to look for them.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-medium">Example:</p>
                <p className="font-mono">Public post: "Great weather today!‍‌‍‌‍‌‍‌"</p>
                <p className="text-xs text-gray-500 mt-2">(Contains hidden message: "Meet at 5pm")</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            FREQUENTLY ASKED QUESTIONS
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-2">Is invisible text really invisible?</h3>
              <p>
                Yes, invisible text is not visible to the naked eye when viewed normally. However, it can be revealed by
                selecting the text, using our decoder tool, or through certain text editors that display special
                characters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-2">Will invisible text work on all platforms?</h3>
              <p>
                Most invisible text methods work across a wide range of platforms including social media, messaging
                apps, and games. However, some platforms may have restrictions or filters that affect how invisible text
                is displayed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-2">Is using invisible text allowed in games?</h3>
              <p>
                This depends on the specific game's terms of service. Some games may consider using invisible characters
                for usernames as a violation of their rules. Always check the game's policies before using invisible
                text.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-2">How do I decode invisible text?</h3>
              <p>
                You can decode invisible text by using our "Test & Copy" area. Simply paste the text containing
                invisible characters, and our tool will show you the character count and allow you to see the hidden
                content.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-2">
                What's the difference between the small, medium, and large invisible characters?
              </h3>
              <p>
                The small, medium, and large options refer to the number of invisible characters generated. Small
                creates 1 character, medium creates 5 characters, and large creates 10 characters. More characters can
                make the invisible text more robust on certain platforms.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t-2 border-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white border-2 border-black rounded-md flex items-center justify-center">
                  <span className="font-bold text-sm">IT</span>
                </div>
                <span className="font-bold text-lg tracking-tight">
                  INVISIBLE TEXT
                  <div className="h-1 w-full bg-emerald-400 mt-0.5"></div>
                </span>
              </Link>
              <p className="text-sm mt-2">© 2025 invisibletext.top. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-bold mb-2">Navigation</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm hover:text-emerald-500 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#features" className="text-sm hover:text-emerald-500 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#use-cases" className="text-sm hover:text-emerald-500 transition-colors">
                      Use Cases
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq" className="text-sm hover:text-emerald-500 transition-colors">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Legal</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm hover:text-emerald-500 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:text-emerald-500 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Contact</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm hover:text-emerald-500 transition-colors">
                      support@invisibletext.top
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

