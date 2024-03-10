import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoader({isDev}: BuildOptions): webpack.RuleSetRule[]  {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
    const tsLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

      const babelLoader =  {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
      
     const cssLoader = buildCssLoader(isDev)

    return [ babelLoader, tsLoader, cssLoader, svgLoader]
}