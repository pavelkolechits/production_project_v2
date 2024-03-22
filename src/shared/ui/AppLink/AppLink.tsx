import { ReactNode, memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/helpers/classNames/classNames";
import cls from './AppLink.module.scss'


 type AppLinkTheme = 'primary' | 'secondary'
  
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode
}
  
  
export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = 'primary',
        ...otherProps
    } = props;
    return (
        <Link
            {...otherProps}
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
});