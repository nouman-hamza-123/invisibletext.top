import { LanguageSwitcher } from "@/components/language-switcher"
import { InvisibleTextTool } from "@/app/[lang]/components/invisible-text-tool"
import Link from "next/link"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import { Check } from "lucide-react"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:20px_20px]">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white border-2 border-black rounded-md flex items-center justify-center">
            <span className="font-bold text-lg">IT</span>
          </div>
          <span className="font-bold text-xl tracking-tight">
            {dict.hero.title}
            <div className="h-1 w-full bg-emerald-400 mt-0.5"></div>
          </span>
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href={`/${lang}/#features`} className="font-medium hover:text-emerald-500 transition-colors">
            {dict.navigation.features}
          </Link>
          <Link href={`/${lang}/about`} className="font-medium hover:text-emerald-500 transition-colors">
            {dict.navigation.about}
          </Link>
          <Link href={`/${lang}/contact`} className="font-medium hover:text-emerald-500 transition-colors">
            {dict.navigation.contact}
          </Link>
          <LanguageSwitcher lang={lang} />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-6xl font-black tracking-tight mb-2">
            {dict.hero.title}
            <div className="h-2 w-1/3 bg-emerald-400 mx-auto mt-2"></div>
          </h1>
          <p className="text-xl mt-8 max-w-3xl mx-auto">{dict.hero.subtitle}</p>
        </section>

        {/* Pass the dictionary directly to the component */}
        <InvisibleTextTool lang={lang} dictionary={dict} />

        <section id="what-is" className="max-w-4xl mx-auto mb-20 mt-24">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            {dict.sections.whatIs.title}
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>{dict.sections.whatIs.content1}</p>
            <p>{dict.sections.whatIs.content2}</p>
          </div>
        </section>

        <section id="how-to" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            {dict.sections.howTo.title}
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.sections.howTo.step1.title}</h3>
              <p>{dict.sections.howTo.step1.content}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.sections.howTo.step2.title}</h3>
              <p>{dict.sections.howTo.step2.content}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.sections.howTo.step3.title}</h3>
              <p>{dict.sections.howTo.step3.content}</p>
            </div>
          </div>
        </section>

        <section id="why-use" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            {dict.sections.whyUse.title}
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.whyUse.privacy.title}</h3>
              <p>{dict.sections.whyUse.privacy.content}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.whyUse.creative.title}</h3>
              <p>{dict.sections.whyUse.creative.content}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.whyUse.steganography.title}</h3>
              <p>{dict.sections.whyUse.steganography.content}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.whyUse.accessibility.title}</h3>
              <p>{dict.sections.whyUse.accessibility.content}</p>
            </div>
          </div>
        </section>

        <section id="who-uses" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            {dict.sections.whoUses.title}
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.whoUses.gamers.title}</h3>
              <p>{dict.sections.whoUses.gamers.content}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.whoUses.socialMedia.title}</h3>
              <p>{dict.sections.whoUses.socialMedia.content}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.whoUses.contentCreators.title}</h3>
              <p>{dict.sections.whoUses.contentCreators.content}</p>
            </div>
          </div>
        </section>

        <section id="features" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            {dict.sections.features.title}
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{dict.sections.features.methods.title}</h3>
                <p>{dict.sections.features.methods.content}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{dict.sections.features.quickCopy.title}</h3>
                <p>{dict.sections.features.quickCopy.content}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{dict.sections.features.customGenerator.title}</h3>
                <p>{dict.sections.features.customGenerator.content}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{dict.sections.features.testingArea.title}</h3>
                <p>{dict.sections.features.testingArea.content}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{dict.sections.features.counter.title}</h3>
                <p>{dict.sections.features.counter.content}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{dict.sections.features.encoding.title}</h3>
                <p>{dict.sections.features.encoding.content}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            {dict.sections.benefits.title}
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="bg-white p-8 rounded-xl border-2 border-black shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{dict.sections.benefits.free.title}</h3>
                  <p className="text-sm">{dict.sections.benefits.free.content}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{dict.sections.benefits.noRegistration.title}</h3>
                  <p className="text-sm">{dict.sections.benefits.noRegistration.content}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{dict.sections.benefits.privacy.title}</h3>
                  <p className="text-sm">{dict.sections.benefits.privacy.content}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{dict.sections.benefits.userFriendly.title}</h3>
                  <p className="text-sm">{dict.sections.benefits.userFriendly.content}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{dict.sections.benefits.moreMethods.title}</h3>
                  <p className="text-sm">{dict.sections.benefits.moreMethods.content}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{dict.sections.benefits.mobileFriendly.title}</h3>
                  <p className="text-sm">{dict.sections.benefits.mobileFriendly.content}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="use-cases" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            {dict.sections.useCases.title}
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.useCases.gaming.title}</h3>
              <p className="mb-4">{dict.sections.useCases.gaming.content}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-medium">Example:</p>
                <p className="font-mono">{dict.sections.useCases.gaming.example}</p>
                <p className="text-xs text-gray-500 mt-2">{dict.sections.useCases.gaming.note}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.useCases.socialMedia.title}</h3>
              <p className="mb-4">{dict.sections.useCases.socialMedia.content}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-medium">Example:</p>
                <p className="font-mono">{dict.sections.useCases.socialMedia.example}</p>
                <p className="text-xs text-gray-500 mt-2">{dict.sections.useCases.socialMedia.note}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.useCases.watermarking.title}</h3>
              <p className="mb-4">{dict.sections.useCases.watermarking.content}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-medium">Example:</p>
                <p className="font-mono">{dict.sections.useCases.watermarking.example}</p>
                <p className="text-xs text-gray-500 mt-2">{dict.sections.useCases.watermarking.note}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-4">{dict.sections.useCases.hiddenMessages.title}</h3>
              <p className="mb-4">{dict.sections.useCases.hiddenMessages.content}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-medium">Example:</p>
                <p className="font-mono">{dict.sections.useCases.hiddenMessages.example}</p>
                <p className="text-xs text-gray-500 mt-2">{dict.sections.useCases.hiddenMessages.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8">
            {dict.sections.faq.title}
            <div className="h-1 w-24 bg-emerald-400 mt-2"></div>
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-2">{dict.sections.faq.isInvisible.question}</h3>
              <p>{dict.sections.faq.isInvisible.answer}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-2">{dict.sections.faq.allPlatforms.question}</h3>
              <p>{dict.sections.faq.allPlatforms.answer}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-2">{dict.sections.faq.allowed.question}</h3>
              <p>{dict.sections.faq.allowed.answer}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-2">{dict.sections.faq.decode.question}</h3>
              <p>{dict.sections.faq.decode.answer}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <h3 className="text-xl font-bold mb-2">{dict.sections.faq.difference.question}</h3>
              <p>{dict.sections.faq.difference.answer}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t-2 border-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href={`/${lang}`} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white border-2 border-black rounded-md flex items-center justify-center">
                  <span className="font-bold text-sm">IT</span>
                </div>
                <span className="font-bold text-lg tracking-tight">
                  {dict.hero.title}
                  <div className="h-1 w-full bg-emerald-400 mt-0.5"></div>
                </span>
              </Link>
              <p className="text-sm mt-2">{dict.footer.copyright}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-bold mb-2">{dict.footer.navigation}</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href={`/${lang}`} className="text-sm hover:text-emerald-500 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/#features`} className="text-sm hover:text-emerald-500 transition-colors">
                      {dict.navigation.features}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/about`} className="text-sm hover:text-emerald-500 transition-colors">
                      {dict.navigation.about}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/contact`} className="text-sm hover:text-emerald-500 transition-colors">
                      {dict.navigation.contact}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">{dict.footer.legal}</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href={`/${lang}/privacy`} className="text-sm hover:text-emerald-500 transition-colors">
                      {dict.navigation.privacy}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${lang}/terms-of-service`}
                      className="text-sm hover:text-emerald-500 transition-colors"
                    >
                      {dict.navigation.terms}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">{dict.footer.contact}</h4>
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
}

