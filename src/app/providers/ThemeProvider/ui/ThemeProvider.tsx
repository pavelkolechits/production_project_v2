import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from 'shared'

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme

}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

    useEffect(() => {
        document.body.className = theme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }, [theme])

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
