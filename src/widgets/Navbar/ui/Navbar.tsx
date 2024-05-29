import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/helpers/classNames/classNames'
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { LoginModal } from 'feature/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';

export interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [])

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            {!authData ? <Button className={cls.enterBtn} theme='background_inverted' onClick={onShowModal}>
                {t('Войти')}
            </Button> 
            :
             <Button className={cls.enterBtn} theme='background_inverted' onClick={onLogout}>
                {t('Выйти')}
            </Button>}
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    )
}
