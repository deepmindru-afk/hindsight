export const locales = [
  "ru",
  "en",
  "es",
  "fr",
  "de",
  "pt",
  "ja",
  "ko",
  "zh-CN",
  "zh-TW",
  "yue-Hant",
] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "Russian",
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  ja: "日本語",
  ko: "한국어",
  "zh-CN": "简体中文",
  "zh-TW": "正體中文（臺灣）",
  "yue-Hant": "粵語（繁體）",
};
