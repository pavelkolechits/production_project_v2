import { memo, useState } from "react";
import { classNames } from "shared/helpers/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from "feature/ThemeSwitcher";
import { LanguageSwitcher } from "feature/LanguageSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
      
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                theme='background_inverted'
                className={cls.collapseBtn}
                onClick={onToggle}
                square
                size='size_l'
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
           
       
    );
})