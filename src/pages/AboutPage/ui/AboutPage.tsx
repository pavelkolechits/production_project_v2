
import { useTranslation } from "react-i18next";
import cls from "./AboutPage.module.scss";

export  interface AboutPageProps {

}

const AboutPage = (props: AboutPageProps) => {
    const {} = props;
    const {t} = useTranslation('about')
    return <div className={cls.AboutPage}>{t('about')}</div>
}

export default AboutPage
