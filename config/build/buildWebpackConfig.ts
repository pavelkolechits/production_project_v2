import { BuildOptions } from "./types/config";
import webpack from 'webpack'
import { buildPlugins } from './buildPlugins';
import { buildLoader } from './buildLoader';
import { buildResolvers } from './buildResolvers';
import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildDevServer } from "./buildDevServer";



export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
            publicPath: '/',
        },
        module: {
            rules: buildLoader(options)
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devServer: buildDevServer(options),
        devtool: isDev ? 'inline-source-map' : undefined,
    }

}