import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef
} from 'react';
import cls from './Input.module.scss';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Text } from '../Text/Text';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly' | 'max' >

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string ;
    onChange?: (value: string) => void;
    placeholder?: string;
    autofocus?: boolean;
    readonly?: boolean;
    max?: boolean
}


export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        max,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrap, { [cls.readonly]: readonly, [cls.max]: max }, [])}>
            {placeholder && (
                <Text className={cls.placeholder} text={placeholder} />
            )}

            <input
                ref={ref}
                className={classNames(cls.input, { }, [className])}
                {...otherProps}
                value={value}
                onChange={onChangeHandler}
                type={type}
                readOnly={readonly}
            />
        </div>
    );
});