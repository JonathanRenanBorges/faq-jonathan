const faqData = [
  {
    id: 1,
    question: "O que é Tailwind CSS?",
    answer:
      "Tailwind CSS é um framework CSS utilitário que oferece classes como flex, pt-4, text-center e rotate-90 que podem ser combinadas para criar qualquer design diretamente no seu HTML. Ele permite desenvolvimento rápido de interfaces sem precisar sair da sua marcação, tornando extremamente rápido construir e manter websites.",
  },
  {
    id: 2,
    question: "O que há de novo no Tailwind CSS v4.0?",
    answer:
      "O Tailwind CSS v4.0 traz tempos de compilação ultra-rápidos, configuração simplificada, melhor experiência do desenvolvedor e opções de personalização aprimoradas. Possui um motor completamente reescrito que é até 10x mais rápido, melhor suporte a container queries e um CLI redesenhado para um fluxo de trabalho melhor.",
  },
  {
    id: 3,
    question: "Como instalo o Tailwind CSS no meu projeto?",
    answer:
      "Você pode instalar o Tailwind CSS via npm executando 'npm install -D tailwindcss' e depois inicializando com 'npx tailwindcss init'. Então configure os caminhos dos templates no arquivo tailwind.config.js e adicione as diretivas do Tailwind ao seu arquivo CSS.",
  },
  {
    id: 4,
    question: "O Tailwind CSS é compatível com React?",
    answer:
      "Sim, o Tailwind CSS funciona perfeitamente com React e outros frameworks JavaScript. Você pode usar as classes utilitárias do Tailwind diretamente nos elementos JSX. Para projetos React, você pode querer usar a versão @tailwindcss/postcss7-compat se estiver usando Create React App sem eject.",
  },
  {
    id: 5,
    question: "Posso personalizar o tema padrão do Tailwind CSS?",
    answer:
      "Com certeza! O Tailwind CSS foi projetado para ser personalizável. Você pode estender ou sobrescrever o tema padrão modificando a seção theme no seu arquivo tailwind.config.js. Isso inclui cores, espaçamentos, breakpoints, fontes e mais para atender aos requisitos do seu design.",
  },
  {
    id: 6,
    question: "Como o Tailwind lida com design responsivo?",
    answer:
      "O Tailwind usa uma abordagem mobile-first com modificadores responsivos como sm:, md:, lg:, xl: e 2xl: que podem ser adicionados a qualquer classe utilitária. Por exemplo, 'md:flex' aplicará flex apenas em telas médias e maiores. Isso torna a criação de layouts responsivos intuitiva e direta.",
  },
  {
    id: 7,
    question: "O Tailwind aumenta o tamanho do bundle final?",
    answer:
      "Embora a versão de desenvolvimento do Tailwind seja grande, ele usa PurgeCSS em produção para analisar seus arquivos de template e remover CSS não utilizado. Isso resulta em arquivos muito pequenos em produção. Com o Tailwind v4.0, o processo de bundling é ainda mais eficiente, resultando em CSS menor.",
  },
];

export default faqData;