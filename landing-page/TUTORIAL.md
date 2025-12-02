# Tutorial: Criando uma Landing Page Premium
## React + TypeScript + Vite + Tailwind + GSAP + Framer Motion

Este guia explica passo a passo como esta landing page foi construída e como as tecnologias funcionam juntas.

---

## 1. Tecnologias Utilizadas

*   **Vite:** Ferramenta de build super rápida. Substitui o Webpack.
*   **React:** Biblioteca para criar interfaces de usuário baseadas em componentes.
*   **TypeScript:** Adiciona tipagem estática ao JavaScript, evitando erros comuns.
*   **Tailwind CSS (v4):** Framework CSS utilitário para estilização rápida e responsiva.
*   **GSAP (GreenSock):** Biblioteca poderosa para animações complexas e sequenciais.
*   **Framer Motion:** Biblioteca de animação para React, ótima para gestos e transições de componentes.

---

## 2. Estrutura do Projeto

```
landing-page/
├── src/
│   ├── components/      # Nossos blocos de construção (Header, Hero, etc.)
│   ├── App.tsx          # O componente principal que junta tudo
│   ├── main.tsx         # Ponto de entrada do React
│   └── index.css        # Estilos globais e configuração do Tailwind
├── index.html           # O arquivo HTML base
├── package.json         # Lista de dependências e scripts
└── vite.config.ts       # Configuração do Vite
```

---

## 3. Passo a Passo da Implementação

### Passo 1: Configuração do Tailwind CSS v4
Nesta versão mais recente, a configuração é muito mais simples. Não precisamos mais de um arquivo `tailwind.config.js` complexo. Tudo é feito no CSS.

**Arquivo:** `src/index.css`
```css
@import "tailwindcss"; /* Importa o Tailwind */

@theme {
  --font-outfit: 'Outfit', sans-serif; /* Define nossa fonte personalizada */
}
```

### Passo 2: O Componente Header (Glassmorphism)
Criamos um menu que muda de aparência quando você rola a página.

**Destaques do Código (`src/components/Header.tsx`):**
*   **Hook `useState`:** Controla se a página foi rolada ou não (`scrolled`).
*   **Hook `useEffect`:** Adiciona um "ouvinte" (event listener) para detectar o scroll do mouse.
*   **Renderização Condicional:**
    ```tsx
    className={`fixed ... ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
    ```
    Se `scrolled` for verdadeiro, aplica a classe `.glass` (efeito de vidro) e diminui o espaçamento.

### Passo 3: A Seção Hero (GSAP)
A primeira impressão é a que fica. Usamos o GSAP para criar uma entrada triunfal.

**Destaques do Código (`src/components/Hero.tsx`):**
*   **Refs (`useRef`):** O React precisa de uma referência direta aos elementos HTML para que o GSAP possa animá-los.
*   **GSAP Timeline:** Cria uma sequência de animações.
    ```tsx
    tl.fromTo(headlineRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1 ... })
    ```
    Isso diz: "Mova o título de 100px para baixo e invisível, para a posição original e visível".

### Passo 4: A Seção Features (Framer Motion)
Aqui usamos o Framer Motion para animar os cards conforme eles aparecem na tela.

**Destaques do Código (`src/components/Features.tsx`):**
*   **Componente `motion.div`:** Um `div` especial do Framer Motion que aceita propriedades de animação.
*   **Propriedade `whileInView`:** A mágica acontece aqui. A animação só roda quando o elemento entra na tela.
    ```tsx
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    ```

---

## 4. Como Rodar o Projeto

1.  **Instalar dependências:**
    ```bash
    npm install
    ```
2.  **Rodar servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
3.  **Criar versão final (Build):**
    ```bash
    npm run build
    ```

---

## 5. Dicas para Continuar Aprendendo

*   Tente mudar as cores no `index.css` (dentro de `@theme`).
*   Adicione uma nova seção "Sobre Nós" criando um arquivo `About.tsx` em `components`.
*   Experimente mudar as animações do GSAP (mude `y` para `x` para vir dos lados).
