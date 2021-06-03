import React, {FC} from 'react'
import css from './Header.module.scss'
import { Link } from 'react-router-dom';
import logo from '../../static/images/logo.svg'
import heart from '../../static/images/heart-icon.svg'
//import {getAuthorizeHref} from "../../utils/authorization/oauthConfig";

export const Header: FC = () => {
    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.header__top}>
                    <Link to="/" className={css.logo}>
                        <img src={logo} alt=""/>
                        ImageStock
                    </Link>

                    <Link to="/favorites" className={css.favorites}>
                        <img src={heart} alt=""/>
                        Избранное
                    </Link>
                    {/*<button onClick={() => console.log(getAuthorizeHref())}>Authorize</button>*/}
                </div>
            </div>
        </header>
    );
};