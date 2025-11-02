// docs/.vitepress/config.js
export default {
  // Configurações do Site
  title: 'Ember Docs',
  description: 'Documentação limpa e moderna no estilo Ember.',
  
  // CORREÇÃO APLICADA: O nome do repositório com 'D' maiúsculo.
  base: '/Ember-Docs/', 

  // Configurações do Tema
  themeConfig: {
    // Navegação Superior
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Guia da API', link: '/guide/api-reference' }
    ],

    // Barra Lateral de Navegação
    sidebar: [
      {
        text: 'Introdução',
        items: [
          { text: 'Visão Geral', link: '/' }
        ]
      },
      {
        text: 'Guias',
        items: [
          { text: 'Referência da API', link: '/guide/api-reference' }
        ]
      }
    ],

      // CORREÇÃO APLICADA: Link do GitHub atualizado.
      { icon: 'github', link: 'https://github.com/Rain-Hub1/Ember-Docs' }
    ],
    
    // Rodapé
    footer: {
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Copyright © 2025-presente Rain-Hub1'
    }
  }
}
