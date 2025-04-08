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
import tr from "./tr.json"
import ko from "./ko.json"
import my from "./my.json"
import ar from "./ar.json"

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
  tr,
  ko,
  my,
  ar,
}
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  try {
    // Validate locale
    if (!locale || !dictionaries[locale]) {
      console.warn(`Invalid locale: ${locale}, falling back to 'en'`)
      return dictionaries.en
    }

    return dictionaries[locale]
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${locale}`, error)
    // Return English dictionary as fallback
    return dictionaries.en
  }
}
