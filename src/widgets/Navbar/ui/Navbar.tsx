
import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";

export interface NavbarProps {

}

export const Navbar = (props: NavbarProps) => {
    const { } = props;
    return <div className={cls.Navbar}>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
    </div>
}

