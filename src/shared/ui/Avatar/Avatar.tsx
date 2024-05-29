import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';
import { classNames } from 'shared/helpers/classNames/classNames';

interface AvatarProps {
    className?: string;
    size?: number;
    src?: string;
    alt?: string
}


export const Avatar = (props: AvatarProps) => {
    const {
        className, size, src, alt,
    } = props;
    const styles = useMemo<CSSProperties>(() => (
        {
            width: size || 100,
            height: size || 100,
        }
    ), [size]);

    return (
        <img
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
        />
    );
};