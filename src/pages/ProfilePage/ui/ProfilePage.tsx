import { useTranslation } from 'react-i18next'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard'
import { EditableProfileCard } from 'feature/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'

export interface ProfilePageProps {

}

const ProfilePage = (props: ProfilePageProps) => {
    const {id} = useParams<{id: string}>()
    const { } = props
    const { t } = useTranslation('about')
    if(!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return <div >
        <EditableProfileCard id={id} />
    </div>
}

export default ProfilePage