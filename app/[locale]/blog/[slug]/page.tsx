import { Link } from '@/lib/navigation';
import { getMarkdownContent, getAllMarkdownSlugs } from "@/lib/markdown";
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '../../../components/LanguageSwitcher';

export async function generateStaticParams() {
  const slugs = getAllMarkdownSlugs('blog');
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({
  params
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params;
  const post = await getMarkdownContent('blog', slug, locale as 'pt-BR' | 'en' | 'es');
  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header/Navigation */}
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-16">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-600">
            {t('nav.portfolio')}
          </Link>
          <div className="flex gap-3 sm:gap-6 items-center">
            <Link href="/blog" className="text-sm sm:text-base text-gray-900 dark:text-white font-semibold">
              {t('nav.blog')}
            </Link>
            <Link href="/projects" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              {t('nav.projects')}
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>

        <article className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
          >
            {t('blog.backToBlog')}
          </Link>

          <header className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>

          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-600 dark:prose-p:text-gray-300
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-code:text-gray-900 dark:prose-code:text-white
              prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}
