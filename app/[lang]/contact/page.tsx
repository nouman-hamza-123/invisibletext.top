import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import ContactForm from "./contact-form"

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return <ContactForm params={{ lang }} dictionary={dict} />
}

