---
title: "App de Gerenciamento de Tarefas"
date: "2024-02-20"
description: "Aplicação fullstack para gerenciar tarefas com autenticação, banco de dados e API REST"
tech: "React, Node.js, Express, PostgreSQL, JWT"
github: "https://github.com/vmussato/task-manager"
---

# App de Gerenciamento de Tarefas

Uma aplicação completa de gerenciamento de tarefas desenvolvida com stack JavaScript moderno, incluindo frontend React e backend Node.js.

## Visão Geral

Este projeto foi criado para demonstrar habilidades fullstack, incluindo:

- Desenvolvimento de interfaces com React
- Criação de APIs RESTful com Node.js e Express
- Gerenciamento de banco de dados relacional
- Implementação de autenticação e autorização
- Deploy e hospedagem de aplicações

## Funcionalidades Principais

### Para Usuários

- **Autenticação Segura**: Login e registro com JWT
- **CRUD de Tarefas**: Criar, ler, atualizar e deletar tarefas
- **Organização**: Categorias e tags para organizar tarefas
- **Filtros**: Buscar e filtrar tarefas por status, prioridade e data
- **Dashboard**: Visualização geral do progresso

### Técnicas

- **API RESTful**: Endpoints bem estruturados seguindo boas práticas
- **Validação**: Validação de dados tanto no frontend quanto backend
- **Segurança**: Hash de senhas, proteção contra SQL injection, CORS configurado
- **Responsividade**: Interface adaptável a diferentes tamanhos de tela

## Arquitetura

### Frontend (React)

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── hooks/         # Custom hooks
├── services/      # Serviços de API
├── contexts/      # Context API para estado global
└── utils/         # Funções utilitárias
```

### Backend (Node.js/Express)

```
server/
├── routes/        # Definição de rotas
├── controllers/   # Lógica de negócio
├── models/        # Modelos do banco de dados
├── middleware/    # Middlewares (auth, validation)
└── config/        # Configurações
```

## Tecnologias Detalhadas

### Frontend
- **React 18**: Biblioteca principal
- **React Router**: Navegação entre páginas
- **Axios**: Cliente HTTP para comunicação com API
- **Context API**: Gerenciamento de estado
- **CSS Modules**: Estilização componentizada

### Backend
- **Node.js**: Runtime JavaScript
- **Express**: Framework web
- **PostgreSQL**: Banco de dados relacional
- **JWT**: Autenticação via tokens
- **Bcrypt**: Hash de senhas
- **Joi**: Validação de dados

## Desafios e Soluções

### Autenticação Persistente

**Desafio**: Manter usuário logado entre sessões

**Solução**: Implementei refresh tokens e localStorage para persistir tokens de forma segura

### Performance de Queries

**Desafio**: Queries lentas com muitas tarefas

**Solução**: Adicionei índices no banco de dados e implementei paginação

### Validação Consistente

**Desafio**: Garantir validação tanto no frontend quanto backend

**Solução**: Criei schemas de validação compartilhados usando Joi

## O que Aprendi

1. **Arquitetura de APIs**: Como estruturar endpoints de forma escalável
2. **Segurança**: Práticas de segurança em aplicações web
3. **SQL**: Queries complexas, índices e otimização
4. **Deploy**: Como fazer deploy de aplicações fullstack
5. **Testes**: Importância de testes automatizados

## Melhorias Futuras

- [ ] Implementar testes unitários e de integração
- [ ] Adicionar funcionalidade de compartilhamento de tarefas
- [ ] Criar modo offline com Service Workers
- [ ] Adicionar notificações em tempo real com WebSockets
- [ ] Implementar exportação de dados em diferentes formatos

## Como Executar

```bash
# Backend
cd server
npm install
npm run dev

# Frontend
cd client
npm install
npm start
```

## Conclusão

Este projeto foi fundamental para consolidar meus conhecimentos em desenvolvimento fullstack e me deu confiança para trabalhar em ambas as camadas de uma aplicação web moderna.
