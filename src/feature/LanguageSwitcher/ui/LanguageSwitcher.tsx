import cls from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'

export interface LanguageSwitcherProps {

}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    const { } = props
    const { t, i18n } = useTranslation()
    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    };
    return <button
        onClick={toggleLanguage}
        className={cls.LanguageSwitcher}>
        {t('language')}
    </button>
}
