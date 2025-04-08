import { InvisibleTextTool } from "@/app/[lang]/components/invisible-text-tool"
import Link from "next/link"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import { Check } from "lucide-react"
import type { Metadata } from "next"
import { generateMetadata as generateSeoMetadata } from "../seo-config"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { StructuredData } from "@/components/structured-data"
import { MobileHeader } from "@/app/[lang]/components/mobile-header"

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  // We need to await the params object before accessing its properties
  const lang = await params.lang
  const dict = await getDictionary(lang)
  return generateSeoMetadata("home", lang, dict)
}

export default async function Home({
  params,
}: {
  params: { lang: Locale }
}) {
  try {
    // We need to await the params object before accessing its properties
    const lang = await params.lang
    const dict = await getDictionary(lang)

    // Make sure dict.meta exists before accessing it
    const description = dict.meta?.description || "Default description"

    // Define structured data for the page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Invisible Text Generator",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: description,
      url: `https://invisibletext.top/${lang}`,
      author: {
        "@type": "Organization",
        name: "invisibletext.top",
      },
    }

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-gray-950 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] dark:bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:20px_20px]">
        {/* Add structured data */}
        <StructuredData data={structuredData} />

        <MobileHeader
          lang={lang}
          title={dict.hero?.title || "INVISIBLE TEXT"}
          navigation={{
            features: dict.navigation?.features || "Features",
            about: dict.navigation?.about || "About Us",
            contact: dict.navigation?.contact || "Contact",
          }}
        />

        <main className="container mx-auto px-4 py-12">
          {/* Add breadcrumbs for better SEO */}
          <Breadcrumbs items={[{ label: "Home", url: `/${lang}` }]} lang={lang} />

          <section className="text-center mb-16">
            <h1 className="text-6xl font-black tracking-tight mb-2">
              {dict.hero?.title || "INVISIBLE TEXT"}
              <div className="h-2 w-1/3 bg-emerald-400 mx-auto mt-2"></div>
            </h1>
            <p className="text-xl mt-8 max-w-3xl mx-auto">
              {dict.hero?.subtitle || "Welcome to our free online invisible text generator!"}
            </p>
          </section>

          {/* Pass the dictionary directly to the component */}
          <InvisibleTextTool lang={lang} dictionary={dict} />

          <section id="what-is" className="max-w-4xl mx-auto mb-20 mt-24">
            <h2 className="text-4xl font-black tracking-tight mb-8">
              {dict.sections?.whatIs?.title}
              <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>{dict.sections?.whatIs?.content1}</p>
              <p>{dict.sections?.whatIs?.content2}</p>
            </div>
          </section>

          <section id="how-to" className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-8">
              {dict.sections?.howTo?.title}
              <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{dict.sections?.howTo?.step1?.title}</h3>
                <p>{dict.sections?.howTo?.step1?.content}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{dict.sections?.howTo?.step2?.title}</h3>
                <p>{dict.sections?.howTo?.step2?.content}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{dict.sections?.howTo?.step3?.title}</h3>
                <p>{dict.sections?.howTo?.step3?.content}</p>
              </div>
            </div>
          </section>

          <section id="why-use" className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-8">
              {dict.sections?.whyUse?.title}
              <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.whyUse?.privacy?.title}</h3>
                <p>{dict.sections?.whyUse?.privacy?.content}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.whyUse?.creative?.title}</h3>
                <p>{dict.sections?.whyUse?.creative?.content}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.whyUse?.steganography?.title}</h3>
                <p>{dict.sections?.whyUse?.steganography?.content}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.whyUse?.accessibility?.title}</h3>
                <p>{dict.sections?.whyUse?.accessibility?.content}</p>
              </div>
            </div>
          </section>

          <section id="who-uses" className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-8">
              {dict.sections?.whoUses?.title}
              <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.whoUses?.gamers?.title}</h3>
                <p>{dict.sections?.whoUses?.gamers?.content}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.whoUses?.socialMedia?.title}</h3>
                <p>{dict.sections?.whoUses?.socialMedia?.content}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.whoUses?.contentCreators?.title}</h3>
                <p>{dict.sections?.whoUses?.contentCreators?.content}</p>
              </div>
            </div>
          </section>

          <section id="features" className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-8">
              {dict.sections?.features?.title}
              <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{dict.sections?.features?.methods?.title}</h3>
                  <p>{dict.sections?.features?.methods?.content}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{dict.sections?.features?.quickCopy?.title}</h3>
                  <p>{dict.sections?.features?.quickCopy?.content}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{dict.sections?.features?.customGenerator?.title}</h3>
                  <p>{dict.sections?.features?.customGenerator?.content}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{dict.sections?.features?.testingArea?.title}</h3>
                  <p>{dict.sections?.features?.testingArea?.content}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{dict.sections?.features?.counter?.title}</h3>
                  <p>{dict.sections?.features?.counter?.content}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{dict.sections?.features?.encoding?.title}</h3>
                  <p>{dict.sections?.features?.encoding?.content}</p>
                </div>
              </div>
            </div>
          </section>

          <section id="benefits" className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-8">
              {dict.sections?.benefits?.title}
              <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
            </h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{dict.sections?.benefits?.free?.title}</h3>
                    <p className="text-sm">{dict.sections?.benefits?.free?.content}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{dict.sections?.benefits?.noRegistration?.title}</h3>
                    <p className="text-sm">{dict.sections?.benefits?.noRegistration?.content}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{dict.sections?.benefits?.privacy?.title}</h3>
                    <p className="text-sm">{dict.sections?.benefits?.privacy?.content}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{dict.sections?.benefits?.userFriendly?.title}</h3>
                    <p className="text-sm">{dict.sections?.benefits?.userFriendly?.content}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{dict.sections?.benefits?.moreMethods?.title}</h3>
                    <p className="text-sm">{dict.sections?.benefits?.moreMethods?.content}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{dict.sections?.benefits?.mobileFriendly?.title}</h3>
                    <p className="text-sm">{dict.sections?.benefits?.mobileFriendly?.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="use-cases" className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-8">
              {dict.sections?.useCases?.title}
              <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.useCases?.gaming?.title}</h3>
                <p className="mb-4">{dict.sections?.useCases?.gaming?.content}</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium">Example:</p>
                  <p className="font-mono">{dict.sections?.useCases?.gaming?.example}</p>
                  <p className="text-xs text-gray-500 mt-2">{dict.sections?.useCases?.gaming?.note}</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.useCases?.socialMedia?.title}</h3>
                <p className="mb-4">{dict.sections?.useCases?.socialMedia?.content}</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium">Example:</p>
                  <p className="font-mono">{dict.sections?.useCases?.socialMedia?.example}</p>
                  <p className="text-xs text-gray-500 mt-2">{dict.sections?.useCases?.socialMedia?.note}</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.useCases?.watermarking?.title}</h3>
                <p className="mb-4">{dict.sections?.useCases?.watermarking?.content}</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium">Example:</p>
                  <p className="font-mono">{dict.sections?.useCases?.watermarking?.example}</p>
                  <p className="text-xs text-gray-500 mt-2">{dict.sections?.useCases?.watermarking?.note}</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4">{dict.sections?.useCases?.hiddenMessages?.title}</h3>
                <p className="mb-4">{dict.sections?.useCases?.hiddenMessages?.content}</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium">Example:</p>
                  <p className="font-mono">{dict.sections?.useCases?.hiddenMessages?.example}</p>
                  <p className="text-xs text-gray-500 mt-2">{dict.sections?.useCases?.hiddenMessages?.note}</p>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-8">
              {dict.sections?.faq?.title}
              <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-2">{dict.sections?.faq?.isInvisible?.question}</h3>
                <p>{dict.sections?.faq?.isInvisible?.answer}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-2">{dict.sections?.faq?.allPlatforms?.question}</h3>
                <p>{dict.sections?.faq?.allPlatforms?.answer}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-2">{dict.sections?.faq?.allowed?.question}</h3>
                <p>{dict.sections?.faq?.allowed?.answer}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-2">{dict.sections?.faq?.decode?.question}</h3>
                <p>{dict.sections?.faq?.decode?.answer}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-2">{dict.sections?.faq?.difference?.question}</h3>
                <p>{dict.sections?.faq?.difference?.answer}</p>
              </div>
            </div>
          </section>

          {/* Enhanced internal linking section */}
          <section className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-8">
              Explore More
              <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href={`/${lang}/about`}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{dict.navigation?.about}</h3>
                <p>Learn more about our team and mission to provide the best invisible text tools.</p>
              </Link>
              <Link
                href={`/${lang}/blog`}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">Blog</h3>
                <p>Read our latest articles about invisible text and its creative applications.</p>
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-black dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{dict.navigation?.contact}</h3>
                <p>Have questions or suggestions? We'd love to hear from you!</p>
              </Link>
            </div>
          </section>
        </main>

        <footer className="bg-white dark:bg-gray-900 border-t-2 border-black dark:border-gray-700 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <Link href={`/${lang}`} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white border-2 border-black rounded-md flex items-center justify-center">
                    <span className="font-bold text-sm">IT</span>
                  </div>
                  <span className="font-bold text-lg tracking-tight">
                    {dict.hero?.title || "INVISIBLE TEXT"}
                    <div className="h-1 w-full bg-emerald-400 mt-0.5"></div>
                  </span>
                </Link>
                <p className="text-sm mt-2">
                  {dict.footer?.copyright || "© 2025 invisibletext.top. All rights reserved."}
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div>
                  <h4 className="font-bold mb-2">{dict.footer?.navigation}</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href={`/${lang}`} className="text-sm hover:text-emerald-500 transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-sm hover:text-emerald-500 transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/#features`} className="text-sm hover:text-emerald-500 transition-colors">
                        {dict.navigation?.features}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/#use-cases`} className="text-sm hover:text-emerald-500 transition-colors">
                        Use Cases
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/#faq`} className="text-sm hover:text-emerald-500 transition-colors">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/about`} className="text-sm hover:text-emerald-500 transition-colors">
                        {dict.navigation?.about}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/contact`} className="text-sm hover:text-emerald-500 transition-colors">
                        {dict.navigation?.contact}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">{dict.footer?.legal}</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href={`/${lang}/privacy`} className="text-sm hover:text-emerald-500 transition-colors">
                        {dict.navigation?.privacy}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/terms-of-service`}
                        className="text-sm hover:text-emerald-500 transition-colors"
                      >
                        {dict.navigation?.terms}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">{dict.footer?.contact}</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href={`/${lang}/contact`} className="text-sm hover:text-emerald-500 transition-colors">
                        contact@invisibletext.top
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
  } catch (error) {
    console.error("Error rendering page:", error)
    // Fallback UI in case of error
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p>We're sorry, but there was an error loading this page. Please try again later.</p>
        </div>
      </div>
    )
  }
}
