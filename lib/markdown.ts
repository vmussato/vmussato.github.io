import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  [key: string]: string;
}

export async function getMarkdownContent(
  type: 'blog' | 'projects',
  slug: string
): Promise<MarkdownPost> {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    ...data,
  } as MarkdownPost;
}

export function getAllMarkdownSlugs(type: 'blog' | 'projects'): string[] {
  const postsDirectory = path.join(contentDirectory, type);

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

export async function getAllMarkdownPosts(
  type: 'blog' | 'projects'
): Promise<MarkdownPost[]> {
  const slugs = getAllMarkdownSlugs(type);
  const posts = await Promise.all(
    slugs.map(slug => getMarkdownContent(type, slug))
  );

  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
