"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, AlertCircle } from "lucide-react"
import type { Locale } from "@/types"
import type { Dictionary } from "@/dictionaries"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { StructuredData } from "@/components/structured-data"
import { MobileHeader } from "@/app/[lang]/components/mobile-header"

export default function ContactForm({
  params: { lang },
  dictionary,
}: {
  params: { lang: Locale }
  dictionary: Dictionary
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  // Use the dictionary from props
  const dict = dictionary

  // Define structured data for the page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${dict.pages.contact.title} | invisibletext.top`,
    description: dict.pages.contact.introduction,
    url: `https://invisibletext.top/${lang}/contact`,
    publisher: {
      "@type": "Organization",
      name: "invisibletext.top",
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@invisibletext.top",
        contactType: "customer service",
      },
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:20px_20px]">
      {/* Add structured data */}
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
            { label: dict.pages.contact.title, url: `/${lang}/contact` },
          ]}
          lang={lang}
        />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black tracking-tight mb-8 text-center">
            {dict.pages.contact.title}
            <div className="h-2 w-24 bg-emerald-400 mx-auto mt-4"></div>
          </h1>

          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">{dict.pages.contact.introduction}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.pages.contact.email.title}</h3>
              <p className="mb-4">{dict.pages.contact.email.address}</p>
              <p className="text-sm text-gray-500">{dict.pages.contact.email.note}</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.pages.contact.social.title}</h3>
              <div className="flex gap-4 mb-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-500">{dict.pages.contact.social.note}</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.pages.contact.faq.title}</h3>
              <p className="mb-4">{dict.pages.contact.faq.note}</p>
              <Link
                href={`/${lang}/#faq`}
                className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                {dict.pages.contact.faq.title} →
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
            <h2 className="text-2xl font-bold mb-6">{dict.pages.contact.form.title}</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {dict.pages.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-black"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {dict.pages.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-black"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {dict.pages.contact.form.subject}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-2 border-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {dict.pages.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-2 border-black"
                />
              </div>

              <Button
                type="submit"
                disabled={formStatus === "submitting"}
                className="bg-black hover:bg-gray-800 text-white py-3 px-6"
              >
                {formStatus === "submitting" ? "Sending..." : dict.pages.contact.form.submit}
              </Button>

              {formStatus === "success" && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700">
                  {dict.pages.contact.form.success}
                </div>
              )}

              {formStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {dict.pages.contact.form.error}
                </div>
              )}
            </form>
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

