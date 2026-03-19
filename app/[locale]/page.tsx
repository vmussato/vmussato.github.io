import Image from "next/image";
import { Link } from '@/lib/navigation';
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '../components/LanguageSwitcher';
import type { Locale } from '@/i18n.config';
// import LanguageSwitcher from '../components/LanguageSwitcherSVG'; // Use esta linha para versão SVG

export const dynamic = 'force-static';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const t = await getTranslations({ locale: currentLocale });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header/Navigation */}
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-16">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{t('nav.portfolio')}</h1>
          <div className="flex gap-3 sm:gap-6 items-center">
            <Link locale={currentLocale} href="/blog" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              {t('nav.blog')}
            </Link>
            <Link locale={currentLocale} href="/projects" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              {t('nav.projects')}
            </Link>
            <Link locale={currentLocale} href="/contact" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              {t('nav.contact')}
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt={t('common.profileAlt')}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('home.greeting')}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('home.description')}
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a
              href="https://github.com/vmussato"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              {t('home.github')}
            </a>
            <a
              href="https://linkedin.com/in/vmussato"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('home.linkedin')}
            </a>
            <Link
              locale={currentLocale}
              href="/contact"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              {t('home.contact')}
            </Link>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <Link
              locale={currentLocale}
              href="/blog"
              className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t('home.blogTitle')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.blogDescription')}
              </p>
            </Link>

            <Link
              locale={currentLocale}
              href="/projects"
              className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t('home.projectsTitle')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.projectsDescription')}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
