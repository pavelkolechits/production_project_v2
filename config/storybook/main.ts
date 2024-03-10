import type { StorybookConfig } from "@storybook/react-webpack5";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { Configuration } from "webpack";


const mode =  'development'
const PORT =  3000
const isDev = mode === 'development'

const config: StorybookConfig = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-css-modules"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
   webpackFinal: async (config): Promise<Configuration> => {

    return  {

      ...config,

        resolve:{
      extensions: ['.tsx', '.ts', '.js'],
      preferAbsolute: true,
      modules: ['../../src', 'node_modules'],
      mainFiles: ['index'],
    },
    module: {
      rules: [buildCssLoader(true), {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }]
    },
  }
      
  
    
  },
};
export default config;
