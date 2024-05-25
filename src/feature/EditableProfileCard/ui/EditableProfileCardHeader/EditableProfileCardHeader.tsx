import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import cls from './EditableProfileCardHeader.module.scss'
import { getProfileReadonly, getProfileData } from 'feature/EditableProfileCard/model/selectors/editableProfileCardSelectors';
import { updateProfileData } from 'feature/EditableProfileCard/model/services/updateProfileData/updateProfileData';
import { profileActions } from 'feature/EditableProfileCard/model/slices/editableProfileCardSlice';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';



interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCanselEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (


        <div className={cls.ProfilePageHeader}>
            <p>{t('Профиль')}</p>
            {canEdit
                && (
                    <div className={cls.btnsWrap}>
                        {readonly ? (
                            <Button
                                onClick={onEdit}
                                className={cls.editBtn}
                                theme='outline'
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    onClick={onCanselEdit}
                                    className={cls.editBtn}
                                    theme='outline_error'
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    onClick={onSave}
                                    className={cls.editBtn}
                                    theme='outline_success'
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                    </div>
                )}
        </div>
    )



};


