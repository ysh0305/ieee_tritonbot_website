import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'UCSD TritonBot',
  tagline: 'UC San Diego RoboCup SSL Team',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ysh0305.github.io',
  baseUrl: '/ieee_tritonbot_website/',
  trailingSlash: false,

  organizationName: 'ysh0305',
  projectName: 'ieee_tritonbot_website',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mechanical',
        path: 'mechanical',
        routeBasePath: 'mechanical',
        sidebarPath: require.resolve('./sidebarsMechanical.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'electrical',
        path: 'electrical',
        routeBasePath: 'electrical',
        sidebarPath: require.resolve('./sidebarsElectrical.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'embedded',
        path: 'embedded',
        routeBasePath: 'embedded',
        sidebarPath: require.resolve('./sidebarsEmbedded.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ai',
        path: 'ai',
        routeBasePath: 'ai',
        sidebarPath: require.resolve('./sidebarsAi.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'UCSD TritonBot',
      logo: {
        alt: 'UCSD TritonBot Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          docsPluginId: 'docs',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Introduction',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'mechanical',
          sidebarId: 'mechanicalSidebar',
          position: 'right',
          label: 'Mechanical',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'electrical',
          sidebarId: 'electricalSidebar',
          position: 'right',
          label: 'Electrical',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'embedded',
          sidebarId: 'embeddedSidebar',
          position: 'right',
          label: 'Embedded',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'ai',
          sidebarId: 'aiSidebar',
          position: 'right',
          label: 'AI',
        },

        {
          href: 'https://ssl.robocup.org/',
          label: 'Robocup SSL',
          position: 'right',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
