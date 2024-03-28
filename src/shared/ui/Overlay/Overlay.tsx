
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = (props: OverlayProps) => {
    const { className, onClick } = props;
    return (
        <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
    );
};