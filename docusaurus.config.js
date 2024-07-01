// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'brodycademy',
  tagline: 'Yep',
  favicon: 'img/favicon.ico',

  // production url of the docs
  url: 'https://psychic-adventure-4kp85r4.pages.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'brody',
  projectName: 'brodycademy', // repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  noIndex: true,

  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/securesign/team-docs/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/securesign/team-docs/tree/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'RHTAS Team Docs',
        logo: {
          alt: 'TAS Logo',
          src: 'img/Logo-Red_Hat-Hat_icon-Standard-RGB.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tasDocsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/securesign/team-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'New around here?',
                to: '/docs/welcome',
              },
              {
                label: 'Technical Guides',
                to: '/docs/category/technical-guides'
              },
              {
                label: 'Resources',
                to: '/docs/category/resources'
              },
              {
                label: 'Advocacy',
                to: '/docs/community/technical-marketing-and-advocacy'
              }
            ],
          },
          {
            title: 'Helpful Links',
            items: [
              {
                label: 'Component Matrix',
                href: 'https://docs.google.com/spreadsheets/d/1R02GS2wPElVC3yzxhPqtJaKh-dX1wFvd31Pu3MBOCmo/edit?usp=sharing',
              },
              {
                label: 'JIRA Epic',
                href: 'https://issues.redhat.com/projects/SECURESIGN/summary',
              },
              {
                label: 'Deployment Guide',
                href: 'https://access.redhat.com/documentation/en-us/red_hat_trusted_artifact_signer'
              },
              {
                label: 'Snyk RHTAS',
                href: 'https://app.snyk.io/org/application-services-red-hat-trusted-artifact-signer/'
              },
              {
                label: 'RHTAS Google Drive',
                href: 'https://drive.google.com/drive/u/0/folders/0AHFnOPouWfujUk9PVA'
              }
            ],
          },
          {
            title: 'Communications',
            items: [
              {
                label: 'Slack (team)',
                href: 'https://redhat.enterprise.slack.com/archives/C05M2GGKU7Q',
              },
              {
                label: 'Slack (RH internal)',
                href: 'https://redhat.enterprise.slack.com/archives/C05G8TKPN7P'
              },
              {
                label: 'Mailing list',
                href: 'mailto:team-secure-sign@redhat.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/securesign',
              },
              {
                label: 'RHTAP',
                to: 'https://console.redhat.com/preview/application-pipeline/workspaces/rhtas/applications'
              },
              {
                label: 'The Source',
                to: 'https://source.redhat.com/communities/communities_of_practice/applications/integration_cop/integration_community_of_practice_forum/sigstore_productization'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Red Hat`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
