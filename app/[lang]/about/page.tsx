import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import { Check } from "lucide-react"

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black tracking-tight mb-8 text-center">
            {dict.pages.about.title}
            <div className="h-2 w-24 bg-emerald-400 mx-auto mt-4"></div>
          </h1>

          <div className="space-y-16">
            <section className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
              <h2 className="text-3xl font-bold mb-6">{dict.pages.about.mission.title}</h2>
              <p className="text-lg">{dict.pages.about.mission.content}</p>
            </section>

            <section className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
              <h2 className="text-3xl font-bold mb-6">{dict.pages.about.story.title}</h2>
              <p className="text-lg">{dict.pages.about.story.content}</p>
            </section>

            <section className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
              <h2 className="text-3xl font-bold mb-6">{dict.pages.about.team.title}</h2>
              <p className="text-lg">{dict.pages.about.team.content}</p>
            </section>

            <section className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
              <h2 className="text-3xl font-bold mb-8">{dict.pages.about.values.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dict.pages.about.values.items.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
              <h2 className="text-3xl font-bold mb-6">{dict.pages.about.future.title}</h2>
              <p className="text-lg">{dict.pages.about.future.content}</p>
            </section>

            <section className="bg-white p-8 rounded-xl border-2 border-black shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-6">{dict.pages.about.contact.title}</h2>
              <p className="text-lg mb-8">{dict.pages.about.contact.content}</p>
              <Link
                href={`/${lang}/contact`}
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                {dict.navigation.contact}
              </Link>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t-2 border-black py-8 mt-12">
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

