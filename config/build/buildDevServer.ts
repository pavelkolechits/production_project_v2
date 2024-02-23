import { BuildOptions } from "./types/config"
import { Configuration as DevServerConfiguration } from "webpack-dev-server"


export function buildDevServer({paths, port}: BuildOptions): DevServerConfiguration {
    return {
        static: {
            directory: paths.html,
        },
        port,
        open: true,
    }
}