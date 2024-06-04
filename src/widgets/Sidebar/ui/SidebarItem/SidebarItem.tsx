import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/helpers/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { memo } from 'react';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);
    if (!isAuth && item.authOnly) {
        return null;
    }
    return (
        <div className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [])}>
            <AppLink
                theme='primary'
                className={cls.item}
                to={item.path}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        </div>



    );
});

