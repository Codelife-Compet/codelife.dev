import { mergeConfig } from 'vite';
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y", "@storybook/addon-actions", "@storybook/addon-docs", "@storybook/addon-mdx-gfm"],
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag'
  },
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: "@storybook/builder-vite"
    }
  },
  "features": {
    storyStoreV7: true
  },
  async viteFinal(config, {
    configType
  }) {
    // Merge custom configuration into the default config
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
      config.base = '/codelife.dev/';
    }
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode']
      }
    });
  }
};
export default config;