import type { Args, Preview, ReactRenderer, Story, StoryFn } from "@storybook/react";
import { ThemeProvider } from '../../src/app/providers/ThemeProvider/ui/ThemeProvider'
import React from "react";
import '../../src/app/styles/index.scss'
import '../../src/app/styles/themes/dark.scss'
import { StoryContext } from "@storybook/types";
import { BrowserRouter } from "react-router-dom";
const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'app_normal_theme',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['dark', 'normal', 'orange'],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story: StoryFn, context: StoryContext<ReactRenderer, Args>) => {
            let selectedTheme = context.globals.theme || 'light';
            let theme = 'app app_normal_theme'
            switch (selectedTheme) {
            case 'light': {
                theme = 'app app_normal_theme'
                break;
            } 
            case 'dark': {
                theme = 'app app_dark_theme'
                break;
            } 
            case 'orange': {
                theme = 'app app_orange_theme'
                break;
            } 
            default:
                break;
            }
            return (
                <div
                    className={theme}
                >
                    <Story />
                </div>
            );
        },
        (Story: StoryFn, context: StoryContext<ReactRenderer, Args>) => {

            return (
                <BrowserRouter
                >
                    <Story />
                </BrowserRouter>
            );
        },
    ],
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

};

export default preview;



