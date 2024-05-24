import { useTranslation } from 'react-i18next'
import cls from './AboutPage.module.scss'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard'


export interface ProfilePageProps {

}

const ProfilePage = (props: ProfilePageProps) => {
    const { } = props
    const { t } = useTranslation('about')

    return <div className={cls.AboutPage}>
        <ProfileCard />
    </div>
}

export default ProfilePage