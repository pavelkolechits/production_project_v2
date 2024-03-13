import { Link } from 'react-router-dom'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

export interface NavbarProps {

}

export const Navbar = (props: NavbarProps) => {
    const { } = props
    const {t} = useTranslation()
    return <div className={cls.Navbar}>
        <Link to={'/'}>{t('Main')}</Link>
        <Link to={'/about'}>{t('About')}</Link>
    </div>
}
