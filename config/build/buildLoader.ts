import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

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

     const cssLoader =  {
        test:  /\.(sa|sc|c)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev
                        ? '[path][name]__[local]--[hash:base64:8]'
                        : '[hash:base64:8]',
                },
            },
          },
          "sass-loader",
        ],
      }

    return [ tsLoader, cssLoader, svgLoader]
}