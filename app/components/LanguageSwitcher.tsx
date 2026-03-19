'use client';

import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/lib/navigation';
import { locales, localeNames, type Locale } from '@/i18n.config';
import { BrazilFlag, SpainFlag, USAFlag } from './flags';

const flagComponents: Record<Locale, React.FC<{ size?: number; className?: string }>> = {
  'pt-BR': BrazilFlag,
  'en': USAFlag,
  'es': SpainFlag
};

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const currentLocale = (params.locale as Locale) || 'pt-BR';

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) {
      return;
    }

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex gap-1">
      {locales.map((locale) => {
        const isActive = currentLocale === locale;
        const FlagComponent = flagComponents[locale];

        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleLanguageChange(locale)}
            disabled={isPending || isActive}
            className={`p-2 rounded-md text-lg transition-all transform hover:scale-110 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
              isActive
                ? 'bg-gray-800 dark:bg-white shadow-lg ring-2 ring-blue-500'
                : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
            }`}
            title={localeNames[locale]}
            aria-label={`Mudar idioma para ${localeNames[locale]}`}
            aria-pressed={isActive}
          >
            <FlagComponent size={24} />
          </button>
        );
      })}
    </div>
  );
}
