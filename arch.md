/app                         # Diretório padrão do Next.js (App Router)
  /(public)                  # Páginas públicas (ex: login, landing)
    page.tsx
  /dashboard                 # Módulo do dashboard (ex: /dashboard)
    /[userId]                # Rota dinâmica
      page.tsx
    layout.tsx
  /api                       # Rotas API
    /auth
      route.ts
    /users
      route.ts
  layout.tsx
  globals.css

/modules                    # Feature modules (cada domínio isolado)
  /auth
    /components             # Componentes reutilizáveis
    /hooks                  # Hooks customizados
    /services               # Lógica de login, JWT etc.
    /types                  # Tipagens específicas de auth
    auth.module.ts          # Inicialização do módulo (opcional)
  /user
    /components
    /services
    /hooks
    /types
  /products
    /components
    /services
    /hooks
    /types

/shared                    # Código compartilhado entre os módulos
  /components               # Botões, inputs, modais etc.
  /hooks
  /lib                      # Utils, clientes (ex: axios), schemas zod, etc.
  /types                    # Tipos globais
  /constants
  /config                   # Configurações (ex: env, themes, API urls)

/public                    # Arquivos públicos (imagens, fontes, etc.)
/styles                    # Estilos globais, Tailwind, CSS modules etc.
/tests                     # Testes unitários e e2e
.env.local
next.config.js
tsconfig.json
package.json