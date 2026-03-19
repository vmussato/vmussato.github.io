import { Link } from '@/lib/navigation';
import { getMarkdownContent, getAllMarkdownSlugs } from "@/lib/markdown";
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import type { Locale } from '@/i18n.config';

export async function generateStaticParams() {
  const slugs = getAllMarkdownSlugs('projects');
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params;
  const currentLocale = locale as Locale;
  const project = await getMarkdownContent('projects', slug, currentLocale);
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
            <Link locale={currentLocale} href="/blog" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              {t('nav.blog')}
            </Link>
            <Link locale={currentLocale} href="/projects" className="text-sm sm:text-base text-gray-900 dark:text-white font-semibold">
              {t('nav.projects')}
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>

        <article className="max-w-4xl mx-auto">
          <Link
            locale={currentLocale}
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
          >
            {t('projects.backToProjects')}
          </Link>

          <header className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split(',').map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            )}
            {project.github && (
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Ver no GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Demo ao vivo
                  </a>
                )}
              </div>
            )}
          </header>

          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-600 dark:prose-p:text-gray-300
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-code:text-gray-900 dark:prose-code:text-white
              prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </article>
      </div>
    </main>
  );
}
