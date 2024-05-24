import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entities/Country/model/consts/consts';

interface CurrencySelectProps {
    className?: string
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = ({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);



    return (
        <Select
            label='Выберите страну'
            options={options}
            value={value}
            readonly={readonly}
            className={className}
            onChangeValue={onChangeHandler} />

    );
};