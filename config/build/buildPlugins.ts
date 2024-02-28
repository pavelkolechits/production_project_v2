import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions, BuildPaths } from './types/config';
import MiniCssExpractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExpractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]
}