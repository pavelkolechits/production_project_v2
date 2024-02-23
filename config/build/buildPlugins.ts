import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions, BuildPaths } from './types/config';
import MiniCssExpractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return  [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExpractPlugin({
            filename: '[name].[contenthash].css'
        }),
      ]
}