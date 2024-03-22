import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/helpers/classNames/classNames';


interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo(({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames('', {}, [className])}
            theme='background_inverted'
            onClick={toggle}
        >
            {t(short ? 'short_version_language' : 'language')}
        </Button>
    );
});
