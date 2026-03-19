'use client';

import { useParams } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n.config';

// Mapear locales para emojis de bandeiras
const flagEmojis: Record<Locale, string> = {
  'pt-BR': '🇧🇷',
  'en': '🇺🇸',
  'es': '🇪🇸'
};

export default function LanguageSwitcher() {
  const params = useParams();
  const currentLocale = (params.locale as Locale) || 'pt-BR';

  // Função para trocar de idioma mantendo o path atual
  const handleLanguageChange = (newLocale: Locale) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Não faz nada se clicar no idioma atual
    if (newLocale === currentLocale) {
      return;
    }

    const currentPath = window.location.pathname;
    let pathWithoutLocale = currentPath;

    console.log('[LanguageSwitcher] Current path:', currentPath);
    console.log('[LanguageSwitcher] Switching from', currentLocale, 'to', newLocale);

    // Remove o locale atual do path
    for (const loc of locales) {
      const localePrefix = `/${loc}`;
      // Trata com e sem trailing slash
      if (currentPath === localePrefix || currentPath === `${localePrefix}/` || currentPath.startsWith(`${localePrefix}/`)) {
        pathWithoutLocale = currentPath.substring(localePrefix.length);
        console.log('[LanguageSwitcher] Removed locale prefix:', localePrefix, '→', pathWithoutLocale);
        break;
      }
    }

    // Garante que começa com /
    if (!pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = '/' + pathWithoutLocale;
    }

    // Constrói o novo path
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    console.log('[LanguageSwitcher] Navigating to:', newPath);

    // Navega para o novo path
    window.location.href = newPath;
  };

  return (
    <div className="flex gap-1">
      {locales.map((locale) => {
        return (
          <a
            key={locale}
            href={`/${locale}/`}
            onClick={handleLanguageChange(locale)}
            className={`p-2 rounded-md text-lg transition-all transform hover:scale-110 cursor-pointer ${
              currentLocale === locale
                ? 'bg-gray-800 dark:bg-white shadow-lg ring-2 ring-blue-500'
                : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
            }`}
            title={localeNames[locale]}
          >
            <span className="text-xl">{flagEmojis[locale]}</span>
          </a>
        );
      })}
    </div>
  );
}
