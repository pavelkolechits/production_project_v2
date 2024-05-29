import { classNames } from 'shared/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <Text title={t('Страница не найдена')} />
        </div>
    );
};

export default NotFoundPage