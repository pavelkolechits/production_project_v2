import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/helpers/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.enterBtn} theme="clear" onClick={onShowModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    )
}
