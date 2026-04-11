import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const supported = ["ko", "en", "ja", "zh"];

function extractPathSegments() {
  if (typeof window === "undefined") return [];

  try {
    const { hash = "", pathname = "" } = window.location;
    const normalizedHash = hash.replace(/^#\/?/, "").split(/[?#]/)[0];
    const normalizedPath = pathname.replace(/^\//, "").split(/[?#]/)[0];
    const source = normalizedHash || normalizedPath;
    return source ? source.split("/").filter(Boolean) : [];
  } catch (_) {
    return [];
  }
}

function initialLngFromPath() {
  const parts = extractPathSegments();
  const first = parts[0] || "";
  return supported.includes(first) ? first : "en";
}

const detector = new LanguageDetector();

detector.addDetector({
  name: "hash",
  lookup() {
    const first = extractPathSegments()[0];
    return supported.includes(first || "") ? first : undefined;
  },
  cacheUserLanguage() {},
});

// Prefer CRA's PUBLIC_URL when available. We avoid referencing `import.meta` here
// because CRA's bundler (webpack) does not support `import.meta` and referencing
// it directly can cause syntax errors like "Cannot use 'import.meta' outside a module".
const rawPublicUrl =
  (typeof process !== "undefined" && process.env && process.env.PUBLIC_URL) || "";
const normalizedPublicUrl =
  rawPublicUrl === "." || rawPublicUrl === "" ? "." : String(rawPublicUrl).replace(/\/$/, "");

i18n
  .use(HttpBackend)
  .use(detector)
  .use(initReactI18next)
  .init({
    // When no language is detected, fall back to English
    fallbackLng: "en",
    supportedLngs: supported,
    lng: initialLngFromPath(),
    ns: [
      "common",
      "presentation",
      "terms",
      "privacy",
      "gdpr",
      "license",
      "pricing",
      "about",
      "history",
      "values",
      "solutions",
      "customdev",
      "sponsorships",
    ],
    defaultNS: "common",
    backend: {
      loadPath: `${normalizedPublicUrl}/locales/{{lng}}/{{ns}}.json`,
    },
    detection: {
      // Prefer explicit signals (URL/cookie/localStorage). Do NOT auto-detect
      // from browser or <html> so first visit defaults to English.
      order: ["hash", "path", "cookie", "localStorage"],
      caches: ["cookie"],
    },
    react: { useSuspense: true },
    interpolation: { escapeValue: false },
  });

export default i18n;
