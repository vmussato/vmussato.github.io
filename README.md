# Dev Portfolio - Multilingual

Um portfólio pessoal moderno construído com Next.js 15, React 19 e suporte multilíngue (Português do Brasil, Inglês e Espanhol).

## 🌐 Recursos Multilíngue

Este projeto é uma versão multilíngue do dev-portfolio original, com suporte para:

- **Português do Brasil (pt-BR)** - Idioma padrão
- **Inglês (en)**
- **Espanhol (es)**

### Como funciona

- **Troca de idioma**: Botões no canto superior direito permitem alternar entre os idiomas
- **URLs com locale**: Todas as rotas incluem o código do idioma (ex: `/pt-BR/`, `/en/blog`, `/es/projects`)
- **Middleware automático**: Redireciona automaticamente para o idioma padrão quando necessário
- **Traduções centralizadas**: Todos os textos estão em arquivos JSON em `i18n/messages/`

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **next-intl** - Biblioteca de internacionalização para Next.js
- **Gray Matter** - Parser de frontmatter para arquivos Markdown
- **Remark** - Processador de Markdown

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
dev-portfolio-multilingual/
├── app/
│   ├── [locale]/              # Rotas com suporte a locale
│   │   ├── page.tsx           # Página inicial
│   │   ├── layout.tsx         # Layout específico do locale
│   │   ├── blog/              # Páginas do blog
│   │   └── projects/          # Páginas de projetos
│   ├── components/
│   │   └── LanguageSwitcher.tsx  # Componente de troca de idioma
│   ├── layout.tsx             # Layout raiz
│   └── globals.css            # Estilos globais
├── i18n/
│   ├── messages/
│   │   ├── pt-BR.json         # Traduções em português
│   │   ├── en.json            # Traduções em inglês
│   │   └── es.json            # Traduções em espanhol
│   └── request.ts             # Configuração do next-intl
├── content/
│   ├── blog/                  # Artigos do blog em Markdown
│   └── projects/              # Projetos em Markdown
├── lib/
│   └── markdown.ts            # Utilitários para processar Markdown
├── i18n.config.ts             # Configuração de idiomas
└── middleware.ts              # Middleware de internacionalização
```

## ✏️ Personalização

### 1. Informações Pessoais

Edite as traduções em `i18n/messages/pt-BR.json`, `en.json` e `es.json`:

```json
{
  "home": {
    "greeting": "Olá, eu sou [Seu Nome]",
    "description": "Desenvolvedor de Software..."
  }
}
```

### 2. Foto de Perfil

Substitua `public/images/profile.jpg` com sua foto.

### 3. Adicionar Posts de Blog

Crie arquivos `.md` em `content/blog/`:

```markdown
---
title: "Título do Post"
date: "2024-01-01"
description: "Breve descrição"
---

# Conteúdo do post aqui

Seu conteúdo em Markdown...
```

### 4. Adicionar Projetos

Crie arquivos `.md` em `content/projects/`:

```markdown
---
title: "Nome do Projeto"
date: "2024-01-01"
description: "Descrição do projeto"
tech: "React, Node.js, PostgreSQL"
github: "https://github.com/usuario/projeto"
demo: "https://projeto.com"
---

# Detalhes do projeto

Descrição completa...
```

## 🌍 Adicionando Novos Idiomas

1. Adicione o locale em `i18n.config.ts`:
```typescript
export const locales: Locale[] = ['pt-BR', 'en', 'es', 'fr'];
export const localeNames: Record<Locale, string> = {
  'pt-BR': 'Português',
  'en': 'English',
  'es': 'Español',
  'fr': 'Français',
};
```

2. Crie o arquivo de tradução `i18n/messages/fr.json`

3. Atualize o matcher do middleware em `middleware.ts`:
```typescript
export const config = {
  matcher: ['/', '/(pt-BR|en|es|fr)/:path*']
};
```

## 🎨 Modificando Traduções

Para adicionar ou modificar traduções, edite os arquivos em `i18n/messages/`:

- `pt-BR.json` - Português do Brasil
- `en.json` - Inglês
- `es.json` - Espanhol

Exemplo de estrutura:

```json
{
  "nav": {
    "portfolio": "Meu Portfólio",
    "blog": "Blog",
    "projects": "Projetos"
  },
  "home": {
    "greeting": "Olá, eu sou [Seu Nome]",
    "description": "Desenvolvedor de Software...",
    "github": "GitHub",
    "linkedin": "LinkedIn",
    "contact": "Contato"
  }
}
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte seu repositório no [Vercel](https://vercel.com)
3. O Vercel automaticamente detecta Next.js e faz o deploy

### Outras Plataformas

O projeto pode ser deployado em:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📝 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

**Nota**: Este é um projeto baseado no `dev-portfolio` original, com adição de suporte multilíngue usando `next-intl`.
