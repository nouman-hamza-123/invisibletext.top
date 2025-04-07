import "server-only"
import type { Locale } from "@/types"

// Import dictionaries
import en from "./en.json"
import es from "./es.json"

// Define dictionary type
export type Dictionary = typeof en

// Create a dictionary map
const dictionaries = {
  en,
  es,
}

// Function to get dictionary based on locale
export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]
}

