import React from 'react';
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/helpers/classNames/classNames';

type ThemeButton = 'clear' | 'outline' | 'background' | 'background_inverted' | 'outline_success' | 'outline_error'
type SizeButton = 'size_m' | 'size_l' | 'size_xl'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
  children?: ReactNode
}


export const Button = memo((props: ButtonProps) => {
    const {
        className, theme = "outline", children, square, size = "size_m", disabled, ...otherProps
    } = props;
    return (
        <button
            type="button"
            {...otherProps}
            disabled={disabled}
            className={
                classNames(
                    cls.Button,
                    { [cls.square]: square, [cls.disabled]: disabled },
                    [className, cls[theme], cls[size]],
                )
            }
        >
            {children}
        </button>
    );
});