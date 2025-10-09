export type Locale = 'pt-BR' | 'en' | 'es';

export const locales: Locale[] = ['pt-BR', 'en', 'es'];
export const defaultLocale: Locale = 'pt-BR';

export const localeNames: Record<Locale, string> = {
  'pt-BR': 'Português',
  'en': 'English',
  'es': 'Español',
};
