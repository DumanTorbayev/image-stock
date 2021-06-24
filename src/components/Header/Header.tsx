import React, {FC} from 'react'
import css from './Header.module.scss'
import { Link } from 'react-router-dom';

export const Header: FC = () => {
    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.header__top}>
                    <Link to="/" className={css.logo}>
                        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt=""/>
                        ImageStock
                    </Link>

                    <Link to="/favorites" className={css.favorites}>
                        <img src={`${process.env.PUBLIC_URL}/img/heart-icon.svg`} alt=""/>
                        Избранное
                    </Link>
                </div>
            </div>
        </header>
    );
};