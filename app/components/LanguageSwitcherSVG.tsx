'use client';

import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/lib/navigation';
import { locales, localeNames, type Locale } from '@/i18n.config';
import { BrazilFlag, USAFlag, SpainFlag } from './flags';

export default function LanguageSwitcherSVG() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = (params.locale as Locale) || 'pt-BR';

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  // Mapear locales para componentes de bandeiras
  const flagComponents: Record<Locale, React.FC<{ size?: number; className?: string }>> = {
    'pt-BR': BrazilFlag,
    'en': USAFlag,
    'es': SpainFlag
  };

  return (
    <div className="flex gap-2">
      {locales.map((locale) => {
        const FlagComponent = flagComponents[locale];
        
        return (
          <button
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-110 hover:shadow-md ${ 
              currentLocale === locale
                ? 'bg-blue-100 dark:bg-blue-900 shadow-lg ring-2 ring-blue-500 ring-opacity-50'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
            title={localeNames[locale]}
          >
            <FlagComponent size={24} />
          </button>
        );
      })}
    </div>
  );
}