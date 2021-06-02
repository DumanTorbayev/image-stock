import React, {FC} from 'react'
import css from './Header.module.scss'
import logo from '../../static/images/logo.svg'

export const Header: FC = () => {
    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.header__top}>
                    <a href="/" className={css.logo}>
                        <img src={logo} alt=""/>
                        ImageStock
                    </a>
                </div>
            </div>
        </header>
    );
};