import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/types";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import { generateMetadata as generateSeoMetadata } from "../../seo-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { MobileHeader } from "@/app/[lang]/components/mobile-header";

// ✅ Fix metadata function by awaiting `params`
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return generateSeoMetadata("about", lang, dict); // 🛠 was `params.lang`, now it's `lang`
}

export default async function About({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `${dict.pages.about.title} | InvisibleText.pro`,
    description: dict.pages.about.mission.content,
    url: `https://www.invisibletext.pro/${lang}/about`,
    publisher: {
      "@type": "Organization",
      name: "invisibletext.pro",
      logo: {
        "@type": "ImageObject",
        url: "https://invisibletext.pro/logo.png",
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:20px_20px]">
      
      <StructuredData data={structuredData} />

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
        {/* Add breadcrumbs for better SEO */}
        <Breadcrumbs
          items={[
            { label: "Home", url: `/${lang}` },
            { label: dict.pages.about.title, url: `/${lang}/about` },
          ]}
          lang={lang}
        />

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

          {/* Enhanced internal linking section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href={`/${lang}/#features`}
                className="bg-white p-6 rounded-xl border-2 border-black shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">Explore Our Features</h3>
                <p>Discover all the powerful features our invisible text generator offers.</p>
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="bg-white p-6 rounded-xl border-2 border-black shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <p>Have questions about our team or mission? Contact us today!</p>
              </Link>
            </div>
          </section>
        </div>
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
                  {dict.hero?.title || "INVISIBLE TEXT"}
                  <div className="h-1 w-full bg-emerald-400 mt-0.5"></div>
                </span>
              </Link>
              <p className="text-sm mt-2">
                {dict.footer?.copyright || "© 2025 invisibletext.pro. All rights reserved."}
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
                      contact@invisibletext.pro
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


