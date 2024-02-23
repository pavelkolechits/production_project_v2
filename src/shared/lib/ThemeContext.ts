import { createContext } from "react";


export enum Theme {
    LIGHT = 'app_normal_theme',
    DARK = 'app_dark_theme',
    ORANGE = 'app_orange_theme'
  }

interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})