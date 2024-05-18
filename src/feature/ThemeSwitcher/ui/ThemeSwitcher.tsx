import themeDark from 'shared/assets/icons/themeDark.svg';
import themeLight from 'shared/assets/icons/themeLight.svg';
import { MemoExoticComponent, memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import { useTheme } from 'shared/hooks/useTheme/useTheme';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Theme } from 'shared/lib/ThemeContext/ThemeContext';


interface ThemeSwitherProps {
  className?: string;
}


export const ThemeSwitcher = ({ className }: ThemeSwitherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme='clear'
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        > {
                theme === Theme.DARK ? <Icon Svg={ themeDark } /> : <Icon Svg={ themeLight } />
            }
            
        </Button>
    );
};
