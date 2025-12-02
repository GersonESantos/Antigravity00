# Antigravity00

Passo 1: O que é o Vite e como "baixar"?
O Vite (palavra francesa para "rápido", pronuncia-se /vit/) é uma ferramenta de construção (build tool) moderna para o desenvolvimento web. Ele foi criado para ser extremamente rápido e leve, substituindo ferramentas mais antigas e lentas como o Webpack em muitos casos.

Por que usar o Vite?

Inicialização Instantânea: O servidor de desenvolvimento inicia quase imediatamente.
HMR (Hot Module Replacement) Rápido: Quando você salva um arquivo, a mudança aparece no navegador instantaneamente, sem recarregar a página toda.
Configuração Simplificada: Ele já vem configurado para TypeScript, JSX e CSS moderno.
Como "baixar"? Diferente de programas tradicionais, nós não baixamos um instalador .exe. Nós utilizamos o Node.js e o gerenciador de pacotes npm (que já vem com o Node) para criar o projeto diretamente pela linha de comando.

O comando mágico que vamos usar no próximo passo é: npm create vite@latest

Isso baixa a versão mais recente do criador de projetos do Vite e configura tudo para nós.
npm create vite@latest landing-page -- --template react-ts