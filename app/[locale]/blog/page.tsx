import { Link } from '@/lib/navigation';
import { getAllMarkdownPosts } from "@/lib/markdown";
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import type { Locale } from '@/i18n.config';

export default async function BlogPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const posts = await getAllMarkdownPosts('blog', currentLocale);
  const t = await getTranslations({ locale: currentLocale });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header/Navigation */}
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-16">
          <Link locale={currentLocale} href="/" className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-600">
            {t('nav.portfolio')}
          </Link>
          <div className="flex gap-3 sm:gap-6 items-center">
            <Link locale={currentLocale} href="/blog" className="text-sm sm:text-base text-gray-900 dark:text-white font-semibold">
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

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            {t('blog.subtitle')}
          </p>

          {posts.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Nenhum artigo publicado ainda. Em breve novos conteúdos!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  locale={currentLocale}
                  href={`/blog/${post.slug}`}
                  className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
