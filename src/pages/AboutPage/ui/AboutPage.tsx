import { useTranslation } from 'react-i18next'
import cls from './AboutPage.module.scss'
import { useEffect } from 'react'

export interface AboutPageProps {

}

const AboutPage = (props: AboutPageProps) => {
    const { } = props
    const { t } = useTranslation('about')

    useEffect(() => {
        throw new Error('error')
    })

      

   

    return <div className={cls.AboutPage}>
        {t('about')}
    </div>
}

export default AboutPage
