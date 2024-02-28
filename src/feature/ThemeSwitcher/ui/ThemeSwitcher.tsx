import SwitchThemeIcon from 'shared/assets/icons/switchTheme.svg'
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from 'shared/hooks/useTheme/useTheme';

export interface ThemeSwitcherProps {

}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {

    const { toggleTheme } = useTheme()

    return <SwitchThemeIcon onClick={toggleTheme} className={cls.ThemeSwitcher} />
}

