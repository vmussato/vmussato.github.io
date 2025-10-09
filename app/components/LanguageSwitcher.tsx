'use client';

import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/lib/navigation';
import { locales, localeNames, type Locale } from '@/i18n.config';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = (params.locale as Locale) || 'pt-BR';

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-1">
      {locales.map((locale) => {
        // Usar apenas as iniciais para mobile: PT, EN, ES
        const shortName = locale === 'pt-BR' ? 'PT' : locale.toUpperCase();

        return (
          <button
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={`px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors ${
              currentLocale === locale
                ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
            title={localeNames[locale]}
          >
            <span className="sm:hidden">{shortName}</span>
            <span className="hidden sm:inline">{localeNames[locale]}</span>
          </button>
        );
      })}
    </div>
  );
}
