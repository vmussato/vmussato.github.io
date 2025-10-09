import { Link } from '@/lib/navigation';
import { getAllMarkdownPosts } from "@/lib/markdown";
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default async function ProjectsPage() {
  const projects = await getAllMarkdownPosts('projects');
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
            <Link href="/blog" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              {t('nav.blog')}
            </Link>
            <Link href="/projects" className="text-sm sm:text-base text-gray-900 dark:text-white font-semibold">
              {t('nav.projects')}
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            {t('projects.subtitle')}
          </p>

          {projects.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Nenhum projeto cadastrado ainda. Em breve novos projetos!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h2>
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.split(',').map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
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
