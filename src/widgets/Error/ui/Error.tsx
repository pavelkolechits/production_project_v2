import { useTranslation } from 'react-i18next';
import cls from './Error.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/helpers/classNames/classNames';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Праизошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};