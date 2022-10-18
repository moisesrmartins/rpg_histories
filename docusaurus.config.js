// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Infinite Word",
  tagline: "Words are INFINITE",
  url: "https://infinite-word.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "infinite", // Usually your GitHub org/user name.
  projectName: "infiniteword", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/moisesrmartins/rpg_histories",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/moisesrmartins/rpg_histories",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Infinite Word",
        logo: {
          alt: "Infinite Word Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "As Palavras",
          },
          { to: "/blog", label: "Atualizações", position: "left" },
          {
            href: "https://github.com/moisesrmartins/rpg_histories",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Words",
            items: [
              {
                label: "As Palavras",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Atualizações",
                to: "/blog",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/moisesrmartins/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/MoisesM45618859",
              },
              {
                label: "GitHub",
                href: "https://github.com/moisesrmartins/rpg_histories",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built by Moises Rodrigues Martins.`,
      },
    }),
};

module.exports = config;
