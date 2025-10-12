# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a multilingual developer portfolio built with Next.js 15, TypeScript, and next-intl for internationalization. The project supports Portuguese (pt-BR), English (en), and Spanish (es) with automatic language detection based on browser preferences.

## Architecture

### Internationalization Structure
- **Locales**: `pt-BR` (default), `en`, `es`
- **Translation files**: Located in `i18n/messages/[locale].json`
- **Content structure**: Markdown content organized by language in `content/[type]/[locale]/`
- **Route structure**: All pages are nested under `app/[locale]/` for automatic locale handling

### Key Components
- **LanguageSwitcher**: Responsive language selector (shows initials on mobile, full names on desktop)
- **Navigation**: Shared navigation system using next-intl's Link component
- **Markdown system**: Blog posts and projects are written in Markdown and processed with remark

### Content Management
- **Blog posts**: Stored in `content/blog/[locale]/` as Markdown files with frontmatter
- **Projects**: Stored in `content/projects/[locale]/` as Markdown files with frontmatter
- **Frontmatter fields**: title, date, description, tech (for projects), github (for projects)

## Common Development Commands

### Development Server
```bash
npm run dev  # Uses Turbopack for faster builds
```

### Build and Production
```bash
npm run build  # Production build with Turbopack
npm start      # Start production server
```

### Linting
```bash
npm run lint   # ESLint code checking
```

## File Structure Patterns

### Adding New Content
- **Blog posts**: Create `.md` files in `content/blog/[locale]/[slug].md`
- **Projects**: Create `.md` files in `content/projects/[locale]/[slug].md`
- **Translations**: Add keys to `i18n/messages/[locale].json`

### Page Structure
All pages follow the pattern:
- Located in `app/[locale]/[page]/page.tsx`
- Use `getTranslations()` for server-side translations
- Include responsive navigation with LanguageSwitcher
- Follow consistent layout patterns with gradients and cards

## Key Configuration Files

- **next.config.ts**: Next.js configuration with next-intl plugin
- **i18n.config.ts**: Locale definitions and names
- **i18n/request.ts**: Server-side translation loading
- **middleware.ts**: Automatic locale detection and routing
- **lib/navigation.ts**: Typed navigation helpers
- **lib/markdown.ts**: Markdown content processing utilities

## Development Guidelines

### Adding New Languages
1. Add locale to `i18n.config.ts` in `locales` array and `localeNames` record
2. Create translation file in `i18n/messages/[locale].json`
3. Create content directories: `content/blog/[locale]/` and `content/projects/[locale]/`
4. Update middleware matcher if needed

### Content Creation
- Use consistent frontmatter structure across all content
- Ensure all content exists in all supported languages
- Follow naming conventions: use slugified titles for filenames
- Include `tech` field for projects (comma-separated technologies)

### Styling Patterns
- Uses Tailwind CSS with custom configuration
- Dark/light mode support via CSS variables and `prefers-color-scheme`
- Responsive design: mobile-first approach with `sm:` breakpoints
- Consistent card-based layouts with shadows and gradients

### Translation Keys Structure
```json
{
  "nav": {}, // Navigation items
  "home": {}, // Homepage content
  "blog": {}, // Blog page specific
  "projects": {}, // Projects page specific
  "common": {} // Shared content
}
```

## Technical Notes

- Uses Turbopack for faster development and build times
- Implements automatic locale detection via middleware
- All images should be placed in `public/images/`
- Profile image expected at `public/images/profile.jpg`
- Uses gray-matter for frontmatter parsing
- remark/remark-html for markdown processing

## Important Files to Modify When Personalizing

- `i18n/messages/*.json` - Update personal information, social links, descriptions
- `content/blog/[locale]/*.md` - Replace example blog posts with actual content
- `content/projects/[locale]/*.md` - Replace example projects with actual projects
- `public/images/profile.jpg` - Add actual profile photo
- Social media links in homepage component (GitHub, LinkedIn, contact email)