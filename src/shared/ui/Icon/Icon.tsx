import React from 'react';
import cls from './Icon.module.scss';
import { classNames } from 'shared/helpers/classNames/classNames';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    inverted?: boolean;
}


export const Icon = (
    props: IconProps,
) => {
    const {
        className, inverted, Svg, ...otherProps
    } = props;
    return (
        <Svg {...otherProps} className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    );
};