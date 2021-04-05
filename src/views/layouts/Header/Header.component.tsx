import React from "react";
import style from './Header.module.css';
import { HeaderProps } from "./Header.model";

export const Header = ({}: HeaderProps): JSX.Element => {

    return (
        <header className={style.header}>
            <div className={style.logo}>
                🐙
                work
            </div>
        </header>
    )
}

export default Header;