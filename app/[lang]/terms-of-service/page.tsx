import Link from "next/link"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import { MobileHeader } from "@/app/[lang]/components/mobile-header"

export default async function TermsOfService({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:20px_20px]">
      <MobileHeader
        lang={lang}
        title={dict.hero.title}
        navigation={{
          features: dict.navigation.features,
          about: dict.navigation.about,
          contact: dict.navigation.contact,
        }}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border-2 border-black shadow-lg">
          <h1 className="text-4xl font-bold mb-2">{dict.pages.terms.title}</h1>
          <p className="text-gray-500 mb-8">{dict.pages.terms.lastUpdated}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.terms.introduction.title}</h2>
              <p>{dict.pages.terms.introduction.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.terms.intellectualProperty.title}</h2>
              <p>{dict.pages.terms.intellectualProperty.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.terms.userConduct.title}</h2>
              <p className="mb-4">{dict.pages.terms.userConduct.content}</p>
              <ul className="list-disc pl-6 space-y-2">
                {dict.pages.terms.userConduct.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.terms.disclaimer.title}</h2>
              <p>{dict.pages.terms.disclaimer.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.terms.limitation.title}</h2>
              <p>{dict.pages.terms.limitation.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.terms.indemnification.title}</h2>
              <p>{dict.pages.terms.indemnification.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.terms.changes.title}</h2>
              <p>{dict.pages.terms.changes.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{dict.pages.terms.contact.title}</h2>
              <p>{dict.pages.terms.contact.content}</p>
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

