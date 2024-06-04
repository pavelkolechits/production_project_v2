import { classNames } from 'shared/helpers/classNames/classNames';
import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}



export const Skeleton = (props: SkeletonProps) => {
    const {
        className, height, width, borderRadius,
    } = props;
    const style: CSSProperties = {
        width,
        height,
        borderRadius,
    };
    return (
        <div style={style} className={classNames(cls.Skeleton, {}, [className])} />
    );
};