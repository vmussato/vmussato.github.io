import { Link } from '@/lib/navigation';
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import type { Locale } from '@/i18n.config';
import { contactLinks } from '@/lib/contact';

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.93 9.93 0 0 0-8.59 14.92L2 22l5.23-1.37A9.93 9.93 0 1 0 19.05 4.94ZM12 20.13a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.1.81.83-3.02-.2-.31A8.11 8.11 0 1 1 12 20.13Zm4.45-6.08c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06a6.58 6.58 0 0 1-1.94-1.2 7.32 7.32 0 0 1-1.35-1.68c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.57 4.06 3.61.57.25 1.02.4 1.37.51.58.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const t = await getTranslations({ locale: currentLocale });

  const items = [
    {
      label: t('contact.items.email.label'),
      value: contactLinks.email,
      href: `mailto:${contactLinks.email}`,
      accent: 'bg-green-600 hover:bg-green-700'
    },
    {
      label: t('contact.items.phone.label'),
      value: contactLinks.phone,
      href: 'tel:+5511979917537',
      accent: 'bg-emerald-600 hover:bg-emerald-700'
    },
    {
      label: t('contact.items.linkedin.label'),
      value: contactLinks.linkedin.replace('https://', ''),
      href: contactLinks.linkedin,
      accent: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      label: t('contact.items.github.label'),
      value: contactLinks.github.replace('https://', ''),
      href: contactLinks.github,
      accent: 'bg-gray-800 hover:bg-gray-700'
    },
    {
      label: t('contact.items.website.label'),
      value: contactLinks.website.replace('https://', ''),
      href: contactLinks.website,
      accent: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      label: t('contact.items.location.label'),
      value: contactLinks.location,
      href: null,
      accent: 'bg-amber-600 hover:bg-amber-700'
    }
  ];

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
            <Link locale={currentLocale} href="/contact" className="text-sm sm:text-base text-gray-900 dark:text-white font-semibold">
              {t('nav.contact')}
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
            {t('contact.backToHome')}
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sm:p-10">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
              {t('contact.subtitle')}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((item) => {
                const isPhone = item.label === t('contact.items.phone.label');

                if (isPhone) {
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-6 h-full"
                    >
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
                        {item.label}
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <a
                          href={item.href ?? undefined}
                          className="text-lg font-medium text-gray-900 dark:text-white break-all hover:underline"
                        >
                          {item.value}
                        </a>
                        <div className="flex items-center gap-2 shrink-0">
                          <a
                            href="https://wa.me/5511979917537"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white transition-colors hover:bg-green-700"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                          >
                            <WhatsAppIcon />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }

                const content = (
                  <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-6 h-full">
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
                      {item.label}
                    </p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white break-all">
                      {item.value}
                    </p>
                  </div>
                );

                if (!item.href) {
                  return <div key={item.label}>{content}</div>;
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block transition-transform hover:scale-[1.01]"
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <div className="mt-10 rounded-xl bg-gray-100 dark:bg-gray-900/60 p-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('contact.availability')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
