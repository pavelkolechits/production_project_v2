import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/helpers/classNames/classNames'

export interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const { t } = useTranslation()
    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme='secondary' className={cls.mainLink} to={'/'}>{t('Main')}</AppLink>
            <AppLink theme='secondary' to={'/about'}>{t('About')}</AppLink>
        </div>

    </div>
}
