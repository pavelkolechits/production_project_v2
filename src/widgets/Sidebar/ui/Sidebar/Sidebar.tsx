import { memo, useMemo, useState, useTransition } from "react";
import { classNames } from "shared/helpers/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from "feature/ThemeSwitcher";
import { LanguageSwitcher } from "feature/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getSidebarItems } from "widgets/Sidebar/model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const {t} = useTranslation()
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemList = useSelector(getSidebarItems);
    const itemsList = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemList]);
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.links}>
                {itemsList}
            </div>
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