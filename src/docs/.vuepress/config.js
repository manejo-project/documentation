module.exports = {
    title: 'Manejo.app',
    themeConfig: {
      logo: 'logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Aplicativo', link: '/produtor/' },
      ],
      sidebar: [
        {
          title: 'Menu',   // required
          //path: '/aplicativo/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            '/produtor/',
            '/unidade_referencia/',
            '/safra/',
          ]
        },
      ]
    },
    markdown: {
      extendMarkdown: md => {
        md.use(require('markdown-it-html5-embed'), {
          html5embed: {
            useImageSyntax: true,
            useLinkSyntax: false
          }
        })
      }
    },
  };