import { classNames } from 'shared/helpers/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';


type CardTheme = 'outlined' | 'normal'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}



export const Card = (props: CardProps) => {
    const {
        className, max, children, theme = 'normal', ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {[cls.max]: max}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};