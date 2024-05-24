import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Mods, classNames } from 'shared/helpers/classNames/classNames';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { Profile } from '../model/types/profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export const ProfileCardError = () => {
    const { t } = useTranslation();
    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [cls.error])}
        >
            <Text
                theme='error'
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align='center'
            />
        </HStack>
    );
};

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCountry?: (value: Country) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    readonly?: boolean
  }

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            <Input
                value={data?.firstname}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
                max
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
                max
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                max
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
                max
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                readonly={readonly}
                max
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
                max
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
});
