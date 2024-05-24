import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Currency } from '../../model/consts/consts';
import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
    className?: string
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}
const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = ({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);



    return (
        <Select
            label='Выберите валюту'
            options={options}
            value={value}
            readonly={readonly}
            className={className}
            onChangeValue={onChangeHandler} />

    );
};