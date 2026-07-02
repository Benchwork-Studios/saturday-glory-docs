import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Saturday Glory',
  tagline: 'College Football Management Simulation — Self-Hosting & Game Guide',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://benchwork-studios.github.io',
  baseUrl: '/saturday-glory-docs/',

  organizationName: 'Benchwork-Studios',
  projectName: 'saturday-glory-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Benchwork-Studios/saturday-glory-docs/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Saturday Glory',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'hostingSidebar',
          position: 'left',
          label: 'Hosting & Setup',
        },
        {
          type: 'docSidebar',
          sidebarId: 'commissionerSidebar',
          position: 'left',
          label: 'Commissioner Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'coachSidebar',
          position: 'left',
          label: 'Coach Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mechanicsSidebar',
          position: 'left',
          label: 'Game Mechanics',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          href: 'https://github.com/Benchwork-Studios/saturday-glory-server',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            { label: 'Hosting & Setup', to: '/hosting/intro' },
            { label: 'Commissioner Guide', to: '/commissioner/intro' },
            { label: 'Coach Guide', to: '/coach/intro' },
          ],
        },
        {
          title: 'Reference',
          items: [
            { label: 'Game Mechanics', to: '/mechanics/season-structure' },
            { label: 'API Reference', to: '/api/overview' },
            { label: 'Environment Variables', to: '/hosting/env-reference' },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Benchwork-Studios/saturday-glory-server',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Benchwork Studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'go'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
