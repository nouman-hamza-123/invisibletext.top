import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import ContactForm from "./contact-form"

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ContactForm params={{ lang }} dictionary={dict} />
}

