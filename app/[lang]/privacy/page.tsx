import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"

export default async function PrivacyPolicy({ params: { lang } }: { params: { lang: Locale } }) {
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
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border-2 border-black shadow-lg">
          <h1 className="text-4xl font-bold mb-2">{dict.pages.privacy.title}</h1>
          <p className="text-gray-500 mb-8">{dict.pages.privacy.lastUpdated}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.privacy.introduction.title}</h2>
              <p>{dict.pages.privacy.introduction.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.privacy.informationCollected.title}</h2>
              <p className="mb-4">{dict.pages.privacy.informationCollected.content}</p>
              <ul className="list-disc pl-6 space-y-2">
                {dict.pages.privacy.informationCollected.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.privacy.useOfInformation.title}</h2>
              <p className="mb-4">{dict.pages.privacy.useOfInformation.content}</p>
              <ul className="list-disc pl-6 space-y-2">
                {dict.pages.privacy.useOfInformation.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.privacy.dataSharing.title}</h2>
              <p>{dict.pages.privacy.dataSharing.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.privacy.dataRetention.title}</h2>
              <p>{dict.pages.privacy.dataRetention.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.privacy.security.title}</h2>
              <p>{dict.pages.privacy.security.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.privacy.childrenPrivacy.title}</h2>
              <p>{dict.pages.privacy.childrenPrivacy.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.privacy.changes.title}</h2>
              <p>{dict.pages.privacy.changes.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.privacy.contact.title}</h2>
              <p>{dict.pages.privacy.contact.content}</p>
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

