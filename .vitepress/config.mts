import { defineConfig } from 'vitepress'
import { globby } from 'globby'
import { basename, dirname } from 'path'

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

async function generateSidebar() {
  const paths = await globby(['pages/**/*.md'], {
    ignore: ['pages/index.md'],
  });

  const sidebar = {};

  for (const path of paths) {
    const dir = dirname(path);
    const sidebarKey = `/${dir.replace('pages', '')}/`;

    if (!sidebar[sidebarKey]) {
      sidebar[sidebarKey] = [{
        text: capitalize(basename(dir)),
        items: []
      }];
    }

    const fileName = basename(path, '.md');
    const link = `/${path.replace('.md', '')}`;
    const text = capitalize(fileName.replace(/^\d+\./, '').replace(/-/g, ' '));

    sidebar[sidebarKey][0].items.push({ text, link });
  }

  return sidebar;
}

export default defineConfig({
  title: 'Ember Docs',
  description: 'Documentação Genérica e Automatizada',
  base: '/Ember-Docs/',
  srcDir: 'pages',
  cleanUrls: true,

  async buildEnd() {},

  themeConfig: {
    siteTitle: 'Ember Docs',
    sidebar: await generateSidebar(),
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Guias', link: '/guides/01.api-reference' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Rain-Hub1/Ember-Docs' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Documentação gerada dinamicamente.',
      copyright: 'Copyright © 2025-presente'
    }
  }
});
