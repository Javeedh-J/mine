module.exports = {
  title: 'DTO Copilot Community',
  tagline: 'Documentation and best practices for GitHub Copilot at DTO',
  url: 'https://your-username.github.io',
  baseUrl: '/dto-copilot-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-username',
  projectName: 'dto-copilot-docs',
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
