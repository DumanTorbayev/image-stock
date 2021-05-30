import React, {FC} from 'react'
import css from './Header.module.scss'

const Header: FC = () => {
    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.header__top}>
                    <a href="/" className={css.logo}>
                        <img src={require('../../static/images/logo.svg').default} alt=""/>
                        ImageStock
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;