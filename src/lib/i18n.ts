import enTranslations from '@/i18n/en.json';
import ruTranslations from '@/i18n/ru.json';

export type Locale = 'en' | 'ru';

export const locales: Locale[] = ['en', 'ru'];
export const defaultLocale: Locale = 'en';

const translations = {
  en: enTranslations,
  ru: ruTranslations,
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return `/${path}`;
  }
  return `/${locale}/${path}`;
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}

