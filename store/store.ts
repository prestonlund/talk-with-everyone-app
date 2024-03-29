import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguagesSupported =
  | "en"
  | "es"
  | "tl"
  | "de"
  | "fr"
  | "hi"
  | "ja"
  | "la"
  | "ru"
  | "zh"
  | "ar"
  | "pt";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  es: "Spanish",
  tl: "Tagalog",
  de: "German",
  fr: "French",
  hi: "Hindi",
  ja: "Japanese",
  la: "Latin",
  ru: "Russian",
  zh: "Mandarin",
  ar: "Arabic",
  pt: "Portuguese",
};

const LANGUAGES_IN_FREE = 3;

interface LanguageState {
  language: LanguagesSupported;
  setLanguage: (language: LanguagesSupported) => void;
  getLanguages: (isPro: boolean) => LanguagesSupported[];
  getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: 'en',
  setLanguage: (language: LanguagesSupported) => set({ language }),
  getLanguages: (isPro: boolean) => {
    // if the user is pro, return all supported languages
    if (isPro)
      return Object.keys(LanguagesSupportedMap) as LanguagesSupported[]

      // if not pro, return only the first two languages
      return Object.keys(LanguagesSupportedMap).slice(0, LANGUAGES_IN_FREE) as LanguagesSupported[]
  },
  getNotSupportedLanguages: (isPro: boolean) => {
    if (isPro) return []; // no unsupported languages for "pro" users
    return Object.keys(LanguagesSupportedMap).slice(LANGUAGES_IN_FREE) as LanguagesSupported[]; // excluding the first two supported languages
  },
}))

interface SubscriptionState {
    subscription: Subscription | null | undefined; 
    setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
    subscription: undefined,
    setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
