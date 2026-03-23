import { Link } from '@/lib/navigation';
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import type { Locale } from '@/i18n.config';
import { resumeFiles } from '@/lib/resume';

export default async function ResumePage({
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
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-16">
          <Link locale={currentLocale} href="/" className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-600">
            {t('nav.portfolio')}
          </Link>
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
            <Link locale={currentLocale} href="/resume" className="text-sm sm:text-base text-gray-900 dark:text-white font-semibold">
              {t('nav.resume')}
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          <Link
            locale={currentLocale}
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
          >
            {t('resume.backToHome')}
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sm:p-10">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('resume.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
              {t('resume.subtitle')}
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
              {t('resume.description')}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {resumeFiles.map((file) => (
                <a
                  key={file.locale}
                  href={file.href}
                  download
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-6 shadow-sm transition-transform hover:scale-[1.01] hover:shadow-md"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
                    {t('resume.sampleLabel')}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {t(file.labelKey)}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {t('resume.fileSize', { size: 'sample PDF' })}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                    {t('resume.lastUpdated', { date: '2026-03-19' })}
                  </p>
                  <span className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                    {t('resume.downloadBtn')}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
