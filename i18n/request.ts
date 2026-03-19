import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from '../i18n.config';
import type { Locale } from '../i18n.config';

export default getRequestConfig(async ({ locale }) => {
  // Use the locale parameter directly for static export
  const validLocale = locale && locales.includes(locale as Locale) ? locale : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default,
  };
});
