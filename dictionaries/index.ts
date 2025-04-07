import "server-only"
import type { Locale } from "@/types"

// Import dictionaries
import en from "./en.json"
import es from "./es.json"
import id from "./id.json"
import it from "./it.json"
import fr from "./fr.json"
import de from "./de.json"
import nl from "./nl.json"
import pt from "./pt.json"
import ru from "./ru.json"

// Define dictionary type
export type Dictionary = typeof en

// Create a dictionary map
const dictionaries = {
  en,
  es,
  id,
  it,
  fr,
  de,
  nl,
  pt,
  ru,
}

// Function to get dictionary based on locale
export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]
}

