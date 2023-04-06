/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
  ],
  docs:{
    autodocs:'tag',
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  "features":{
    storyStoreV7:true
  }
};
export default config;
