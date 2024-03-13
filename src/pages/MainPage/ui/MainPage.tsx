import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'

export interface MainPageProps {

}

export const MainPage = (props: MainPageProps) => {
    const {} = props
    const { t } = useTranslation('main')
    return <div className={cls.MainPage}>{t('main')}</div>
}
