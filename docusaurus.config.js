/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Meshery Docs',
  tagline: 'Documentation',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'layer5', // Usually your GitHub org/user name.
  projectName: 'docs-ng', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Layer 5',
      logo: {
        alt: 'Layer5-Logo',
        src: 'img/L5-5-Logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/layer5',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Meshery Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mail',
              href: 'mailto:community@layer5.io',
            },
            
            {
              label: 'Slack',
              href: 'http://slack.layer5.io/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/layer5',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/layer5',
            },
            
            
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/layer5io',
            },
            {
              label: 'Docker Hub',
              href: 'https://hub.docker.com/u/layer5/',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Layer5, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
