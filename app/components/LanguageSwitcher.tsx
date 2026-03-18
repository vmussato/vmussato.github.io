'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, localeNames, type Locale } from '@/i18n.config';

// Mapear locales para emojis de bandeiras
const flagEmojis: Record<Locale, string> = {
  'pt-BR': '🇧🇷',
  'en': '🇺🇸',
  'es': '🇪🇸'
};

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();

  const currentLocale = (params.locale as Locale) || 'pt-BR';

  // Função para construir o caminho no novo locale
  const getLocalePath = (newLocale: Locale) => {
    // Remove o locale atual do pathname e adiciona o novo
    const pathWithoutLocale = pathname?.replace(`/${currentLocale}`, '') || '';
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <div className="flex gap-1">
      {locales.map((locale) => {
        return (
          <Link
            key={locale}
            href={getLocalePath(locale)}
            className={`p-2 rounded-md text-lg transition-all transform hover:scale-110 ${
              currentLocale === locale
                ? 'bg-gray-800 dark:bg-white shadow-lg ring-2 ring-blue-500'
                : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
            }`}
            title={localeNames[locale]}
          >
            <span className="text-xl">{flagEmojis[locale]}</span>
          </Link>
        );
      })}
    </div>
  );
}
