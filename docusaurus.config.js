// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SkyMod',
  tagline: 'A mod of TurboWarp',
  favicon: 'img/favicon.ico',

  url: 'https://skymod-project.github.io',

  baseUrl: '/docs/',

  organizationName: 'SkyMod-Project',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/SkyMod-Project/docs/tree/main/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'docusaurus-preset-shiki-twoslash',
      {
        themes: ['light-plus', 'dark-plus']
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SkyMod Documentation',
        logo: {
          alt: 'SkyMod Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://skymod-project.github.io/',
            label: 'SkyMod',
            position: 'right',
          },
          {
            href: '/development/getting-started',
            label: 'Development',
            position: 'left',
          },
          {
            href: 'https://github.com/SkyMod-Project',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
