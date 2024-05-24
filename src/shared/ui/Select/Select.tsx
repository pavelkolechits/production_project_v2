import { useTranslation } from 'react-i18next';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Text } from '../Text/Text';

export interface SelectOptions {
    value: string;
    content: string;
}

export interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChangeValue?: (value: string) => void;
    readonly?: boolean;
}



export const Select = (props: SelectProps) => {
    const {
        className, label, options, value, onChangeValue, readonly,
    } = props;
    const { t } = useTranslation();
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeValue?.(e.target.value);
    };

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={cls.option}
                key={opt.value}
                value={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    return (
        <div className={classNames(cls.Wrap, {}, [className])}>
            {label
            && <Text text={label}  className={classNames(cls.label, { [cls.readonly]: readonly }, [])}/>}
            <select onChange={onChangeHandler} disabled={readonly} value={value} className={cls.select} name="" id="">
                {optionList}
            </select>
        </div>
    );
};